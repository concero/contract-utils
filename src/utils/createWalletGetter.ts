import { type NetworkType } from '../types';
import { warn } from './log';

export interface BaseAccountTypePrefixes extends Record<string, string> {
	proxyDeployer: 'PROXY_DEPLOYER';
	deployer: 'DEPLOYER';
}

export const baseAccountTypePrefixes: BaseAccountTypePrefixes = {
	proxyDeployer: 'PROXY_DEPLOYER',
	deployer: 'DEPLOYER'
};

export interface WalletGetterConfig<TPrefixes extends Record<string, string>> {
	accountTypePrefixes: TPrefixes;
}

export function createWalletGetter<TPrefixes extends Record<string, string>>(
	config: WalletGetterConfig<TPrefixes>,
) {
	function getWallet(
		chainType: NetworkType,
		accountType: keyof TPrefixes,
		walletType: 'privateKey' | 'address',
	) {
		const prefix = config.accountTypePrefixes[accountType];
		if (!prefix) {
			throw new Error(`Unknown account type: ${String(accountType)}`);
		}

		const walletKey = walletType === 'privateKey' ? 'PRIVATE_KEY' : 'ADDRESS';
		const envKey = `${chainType.toUpperCase()}_${prefix}_${walletKey}`;
		const walletValue = process.env[envKey];

		if (!walletValue) {
			warn(`Missing env variable: ${envKey}`, 'getWallet');
		}

		return walletValue;
	}

	return { getWallet };
}

export const { getWallet } = createWalletGetter({
	accountTypePrefixes: baseAccountTypePrefixes,
});
