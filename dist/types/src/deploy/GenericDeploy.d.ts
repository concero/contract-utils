import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { ContractPrefix } from '../../types/deploymentVariables';
export interface ITxParams {
    gasLimit: bigint;
}
export interface IGenericDeployParams {
    hre: HardhatRuntimeEnvironment;
    contractName: string;
    contractPrefix: ContractPrefix;
    txParams?: Partial<ITxParams>;
}
export declare const genericDeploy: ({ hre, contractName, contractPrefix, txParams }: IGenericDeployParams, ...contractConstructorArgs: any[]) => Promise<any>;
