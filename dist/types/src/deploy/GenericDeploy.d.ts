import { TransactionReceipt } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import type { WaitForTransactionReceiptReturnType } from 'viem/actions/public/waitForTransactionReceipt';
export interface ITxParams {
    gasLimit: bigint;
    libraries: Record<string, string>;
}
export interface IDeployResult {
    address: string;
    chainType: string;
    chainName: string;
    chainId: number;
    receipt: TransactionReceipt | WaitForTransactionReceiptReturnType;
}
export interface IGenericDeployParams {
    hre: HardhatRuntimeEnvironment;
    contractName: string;
    txParams?: Partial<ITxParams>;
}
export declare const genericDeploy: ({ hre, contractName, txParams }: IGenericDeployParams, ...contractConstructorArgs: any[]) => Promise<IDeployResult>;
