import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { TransactionReceipt } from 'ethers';
export interface ITxParams {
    gasLimit: bigint;
    libraries: Record<string, string>;
}
export interface IDeployResult {
    address: string;
    chainType: string;
    chainName: string;
    chainId: number;
    receipt: TransactionReceipt;
}
export interface IGenericDeployParams {
    hre: HardhatRuntimeEnvironment;
    contractName: string;
    txParams?: Partial<ITxParams>;
}
export declare const genericDeploy: ({ hre, contractName, txParams }: IGenericDeployParams, ...contractConstructorArgs: any[]) => Promise<IDeployResult>;
