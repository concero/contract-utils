import type { Abi, Address, Hash, Hex } from 'viem';
import { encodeDeployData } from 'viem';
import {
	ITrezorTxParams,
	ITrezorViemParams,
	trezorSendTx,
	type ITrezorParams,
} from './trezorSendTx';

export interface ITrezorDeployParams
	extends Omit<ITrezorTxParams, 'to' & 'data'> {
	abi: Abi;
	bytecode: Hex;
	args?: readonly unknown[];
}

export async function trezorDeployContract(
	viemParams: ITrezorViemParams,
	deployParams: ITrezorDeployParams,
	trezorParams?: ITrezorParams
): Promise<{ hash: Hash; contractAddress: Address }> {
	const { publicClient } = viemParams;
	const { abi, bytecode, args, value = 0n, ...overrides } = deployParams;

	const data = encodeDeployData({ abi, bytecode, args });

	const hash = await trezorSendTx(
		{ publicClient },
		{ data, value, ...overrides },
		trezorParams
	);

	const receipt = await publicClient.waitForTransactionReceipt({ hash });
	if (!receipt.contractAddress)
		throw new Error('No contractAddress in receipt');

	return { hash, contractAddress: receipt.contractAddress as Address };
}
