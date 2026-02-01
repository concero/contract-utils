import { Abi, Address, Hash } from 'viem';
import { ITrezorParams, ITrezorTxParams, ITrezorViemParams } from './trezorSendTx';
export interface ITrezorWriteContractParams extends Omit<ITrezorTxParams, 'to'> {
    address: Address;
    abi: Abi;
    functionName: string;
    args?: readonly unknown[];
}
export declare function trezorWriteContract(viemParams: ITrezorViemParams, writeContractParams: ITrezorWriteContractParams, trezorParams: ITrezorParams): Promise<Hash>;
