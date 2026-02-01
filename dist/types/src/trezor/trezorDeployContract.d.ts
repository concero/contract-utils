import type { Abi, Address, Hash, Hex } from 'viem';
import { ITrezorTxParams, ITrezorViemParams, type ITrezorParams } from './trezorSendTx';
export interface ITrezorDeployParams extends Omit<ITrezorTxParams, 'to' & 'data'> {
    abi: Abi;
    bytecode: Hex;
    args?: readonly unknown[];
}
export declare function trezorDeployContract(viemParams: ITrezorViemParams, deployParams: ITrezorDeployParams, trezorParams?: ITrezorParams): Promise<{
    hash: Hash;
    contractAddress: Address;
}>;
