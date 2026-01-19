import { HardhatRuntimeEnvironment } from 'hardhat/types';
export interface ITxParams {
    gasLimit: bigint;
}
export interface IDeployResult {
    hash: string;
    address: string;
    chainType: string;
    chainName: string;
    proxyAdminAddress: string;
}
export interface IGenericDeployParams {
    hre: HardhatRuntimeEnvironment;
    contractName: string;
    txParams?: Partial<ITxParams>;
}
export declare const genericDeploy: ({ hre, contractName, txParams }: IGenericDeployParams, ...contractConstructorArgs: any[]) => Promise<IDeployResult>;
