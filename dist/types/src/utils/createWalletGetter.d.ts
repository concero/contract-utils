import { type NetworkType } from '../types';
export interface BaseAccountTypePrefixes extends Record<string, string> {
    proxyDeployer: 'PROXY_DEPLOYER';
    deployer: 'DEPLOYER';
}
export declare const baseAccountTypePrefixes: BaseAccountTypePrefixes;
export interface WalletGetterConfig<TPrefixes extends Record<string, string>> {
    accountTypePrefixes: TPrefixes;
}
export declare function createWalletGetter<TPrefixes extends Record<string, string>>(config: WalletGetterConfig<TPrefixes>): {
    getWallet: (chainType: NetworkType, accountType: keyof TPrefixes, walletType: "privateKey" | "address") => string | undefined;
};
export declare const getWallet: (chainType: NetworkType, accountType: keyof BaseAccountTypePrefixes, walletType: "privateKey" | "address") => string | undefined;
