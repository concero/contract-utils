import { type NetworkType } from '../types';
export declare function getWallet(chainType: NetworkType, accountType: 'proxyDeployer' | 'deployer' | 'operator', walletType: 'privateKey' | 'address'): string | undefined;
