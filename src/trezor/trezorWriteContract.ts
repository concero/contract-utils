import { Abi, Address, encodeFunctionData, Hash } from 'viem';
import {
	ITrezorParams,
	ITrezorTxParams,
	ITrezorViemParams,
	trezorSendTx,
} from './trezorSendTx';

export interface ITrezorWriteContractParams
	extends Omit<ITrezorTxParams, 'to'> {
	address: Address;
	abi: Abi;
	functionName: string;
	args?: readonly unknown[];
}

export async function trezorWriteContract(
	viemParams: ITrezorViemParams,
	writeContractParams: ITrezorWriteContractParams,
	trezorParams: ITrezorParams
): Promise<Hash> {
	const {
		address,
		abi,
		functionName,
		args,
		value = 0n,
		...overrides
	} = writeContractParams;

	const data = encodeFunctionData({ abi, functionName, args });

	return trezorSendTx(
		viemParams,
		{
			to: address,
			data,
			value,
			...overrides,
		},
		trezorParams
	);
}
