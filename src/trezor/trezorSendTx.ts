import TrezorConnect from '@trezor/connect';
import type { Address, Hash, Hex, PublicClient } from 'viem';
import { isHex, serializeTransaction, toHex } from 'viem';
import { log } from '../utils';

const defaultPath = "m/44'/60'/0'/0/0";

export interface ITrezorViemParams {
	publicClient: PublicClient;
}

export interface ITrezorParams {
	path: string | number[];
	showFromAddressOnTrezor?: boolean;
	forceLegacy?: boolean;
}

export interface ITrezorTxParams {
	to?: Address;
	value?: bigint;
	data?: Hex;
	gas?: bigint;
	nonce?: number;
	gasPrice?: bigint;
	maxFeePerGas?: bigint;
	maxPriorityFeePerGas?: bigint;
}

function normalizeHex(hex: string, name: string): Hex {
	if (!hex.startsWith('0x')) hex = `0x${hex}`;
	if (!isHex(hex)) throw new Error(`${name} must be 0x-prefixed hex`);
	return hex as Hex;
}

function yParityFromV(v: bigint): 0 | 1 {
	if (v === 0n || v === 1n) return Number(v) as 0 | 1;
	if (v === 27n || v === 28n) return Number(v - 27n) as 0 | 1;
	return Number((v - 35n) % 2n) as 0 | 1;
}

export async function trezorSendTx(
	viemParams: ITrezorViemParams,
	txParams: ITrezorTxParams,
	trezorPrams: ITrezorParams = {
		path: defaultPath,
		showFromAddressOnTrezor: false,
		forceLegacy: false,
	}
): Promise<Hash> {
	await TrezorConnect.init({
		manifest: {
			email: 'nikita@concero.io',
			appUrl: 'https://concero.io',
			appName: 'concero',
		},
	});

	const { publicClient } = viemParams;
	const { to = null, value = 0n, data = '0x' } = txParams;
	const { path, showFromAddressOnTrezor, forceLegacy } = trezorPrams;

	const chainId = publicClient.chain?.id ?? (await publicClient.getChainId());

	const addrRes = await TrezorConnect.ethereumGetAddress({
		path,
		showOnTrezor: showFromAddressOnTrezor,
	});

	if (!addrRes.success) throw new Error(addrRes.payload.error);
	const from = addrRes.payload.address as Address;

	log(`Deploy from ${from}`, 'trezorSendTx');

	const normData = normalizeHex(data, 'data');

	const nonce =
		txParams.nonce ??
		(await publicClient.getTransactionCount({
			address: from,
			blockTag: 'pending',
		}));

	const gas =
		txParams.gas ??
		(await publicClient.estimateGas({
			account: from,
			to: to ?? undefined,
			value,
			data: normData === '0x' ? undefined : normData,
		}));

	let gasPrice = txParams.gasPrice;
	let maxFeePerGas = txParams.maxFeePerGas;
	let maxPriorityFeePerGas = txParams.maxPriorityFeePerGas;

	if (!forceLegacy && gasPrice == null && (maxFeePerGas == null || maxPriorityFeePerGas == null)) {
		const fees = await publicClient.estimateFeesPerGas();
		if ('maxFeePerGas' in fees && 'maxPriorityFeePerGas' in fees) {
			maxFeePerGas = fees.maxFeePerGas;
			maxPriorityFeePerGas = fees.maxPriorityFeePerGas;
		} else if ('gasPrice' in fees) {
			gasPrice = (fees as { gasPrice: bigint }).gasPrice;
		}
	}

	const useEip1559 = !forceLegacy && maxFeePerGas != null && maxPriorityFeePerGas != null;

	if (!useEip1559 && gasPrice == null) {
		gasPrice = await publicClient.getGasPrice();
	}

	const txForTrezor: Record<string, unknown> = {
		to,
		value: toHex(value),
		data: normData,
		chainId,
		nonce: toHex(nonce),
		gasLimit: toHex(gas),
	};

	if (useEip1559) {
		txForTrezor.maxFeePerGas = toHex(maxFeePerGas!);
		txForTrezor.maxPriorityFeePerGas = toHex(maxPriorityFeePerGas!);
	} else {
		txForTrezor.gasPrice = toHex(gasPrice!);
	}

	const signRes = await TrezorConnect.ethereumSignTransaction({
		path,
		transaction: txForTrezor as any,
	});
	if (!signRes.success) throw new Error(signRes.payload.error);

	const r = normalizeHex(signRes.payload.r, 'r');
	const s = normalizeHex(signRes.payload.s, 's');
	const vBig = BigInt(signRes.payload.v);

	const txSerializable: any = {
		chainId,
		nonce,
		gas,
		to: to ?? undefined,
		value,
		data: normData,
	};

	if (useEip1559) {
		txSerializable.maxFeePerGas = maxFeePerGas;
		txSerializable.maxPriorityFeePerGas = maxPriorityFeePerGas;
		const serializedTransaction = serializeTransaction(txSerializable, {
			r,
			s,
			yParity: yParityFromV(vBig),
		});

		return await publicClient.sendRawTransaction({ serializedTransaction });
	} else {
		txSerializable.gasPrice = gasPrice;

		const serializedTransaction = serializeTransaction(txSerializable, {
			r,
			s,
			v: vBig,
		} as any);
		return await publicClient.sendRawTransaction({ serializedTransaction });
	}
}
