import { NetworkType } from '../networks/types';
export declare function getWallet(chainType: NetworkType, accountType: 'proxyDeployer' | 'deployer' | 'operator' | 'priceFeedProxyDeployer', walletType: 'privateKey' | 'address'): string | undefined;
