import { Deployment } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { PublicClient } from 'viem';
type HardhatDeployWrapperArgs = {
    hre: HardhatRuntimeEnvironment;
    args: any[];
    publicClient: PublicClient;
    proxy?: boolean;
    gasLimit?: number;
    log?: boolean;
    libraries?: {
        [key: string]: `0x${string}`;
    };
    skipIfAlreadyDeployed: boolean;
};
export declare function hardhatDeployWrapper(contractName: string, { hre, args, publicClient, proxy, gasLimit, log, libraries, skipIfAlreadyDeployed, }: HardhatDeployWrapperArgs): Promise<Deployment>;
export {};
