import {
	Chain,
	createPublicClient,
	createTestClient,
	createWalletClient,
	fallback,
	http,
	nonceManager,
	publicActions,
	walletActions,
	type PublicClient,
	type TestClient,
	type WalletClient,
} from 'viem';
import { privateKeyToAccount, type PrivateKeyAccount } from 'viem/accounts';

import { conceroNetworks } from '../constants/conceroNetworks';
import { type ConceroNetwork, type NetworkType } from '../types';
import { getWallet, type BaseAccountTypePrefixes } from '../utils';
import { localhostViemChain } from './localhostViemChain';

function getClients(
	viemChain: Chain,
	url: string | undefined,
	account: PrivateKeyAccount = privateKeyToAccount(
		`0x${process.env.TESTNET_DEPLOYER_PRIVATE_KEY}`
	)
): {
	walletClient: WalletClient;
	publicClient: PublicClient;
	account: PrivateKeyAccount;
} {
	const publicClient = createPublicClient({
		transport: http(url),
		chain: viemChain,
	});
	const walletClient = createWalletClient({
		transport: http(url),
		chain: viemChain,
		account,
	});

	return { walletClient, publicClient, account };
}

export type ExtendedTestClient = TestClient & WalletClient & PublicClient;

function getTestClient(account: PrivateKeyAccount): ExtendedTestClient {
	const testClient = createTestClient({
		chain: localhostViemChain,
		mode: 'hardhat',
		transport: http(),
		account,
	})
		.extend(publicActions)
		.extend(walletActions);

	return testClient as unknown as ExtendedTestClient;
}

function getFallbackClients(
	chain: ConceroNetwork,
	account?: PrivateKeyAccount
): {
	walletClient: WalletClient;
	publicClient: PublicClient;
	account: PrivateKeyAccount;
} {
	if (!account) {
		switch (chain.type) {
			case 'mainnet':
				account = privateKeyToAccount(
					`0x${process.env.MAINNET_DEPLOYER_PRIVATE_KEY}`
				);
				break;
			case 'testnet':
				account = privateKeyToAccount(
					`0x${process.env.TESTNET_DEPLOYER_PRIVATE_KEY}`,
					{
						nonceManager: nonceManager,
					}
				);
				break;
			case 'localhost':
				account = privateKeyToAccount(
					`0x${process.env.LOCALHOST_DEPLOYER_PRIVATE_KEY}`
				);
				break;
			default:
				throw new Error(`Unsupported chain type: ${chain.type}`);
		}
	}

	const { viemChain, name } = chain;

	if (!conceroNetworks[name].rpcUrls.length) {
		throw new Error(`No URLs configured for chain: ${name}`);
	}

	const transport = fallback(
		conceroNetworks[name].rpcUrls.map((url) => http(url)),
		{
			retryCount: 3,
		}
	);
	const publicClient = createPublicClient({ transport, chain: viemChain });
	const walletClient = createWalletClient({
		transport,
		chain: viemChain,
		account,
	});

	return { walletClient, publicClient, account };
}

function getViemAccount(
	chainType: NetworkType,
	accountType: keyof BaseAccountTypePrefixes
) {
	const privateKey = `0x${getWallet(chainType, accountType, 'privateKey')}`;

	return privateKeyToAccount(privateKey as `0x${string}`, {
		nonceManager: nonceManager,
	});
}

export interface ViemAccountGetterConfig<
	TPrefixes extends Record<string, string>,
> {
	accountTypePrefixes: TPrefixes;
	getWallet: (
		chainType: NetworkType,
		accountType: keyof TPrefixes,
		walletType: 'privateKey' | 'address'
	) => string | undefined;
}

export function createViemAccountGetter<
	TPrefixes extends Record<string, string>,
>(config: ViemAccountGetterConfig<TPrefixes>) {
	function getViemAccount(
		chainType: NetworkType,
		accountType: keyof TPrefixes
	) {
		const privateKey = `0x${config.getWallet(chainType, accountType, 'privateKey')}`;

		return privateKeyToAccount(privateKey as `0x${string}`, {
			nonceManager: nonceManager,
		});
	}

	return { getViemAccount };
}

export { getClients, getFallbackClients, getTestClient, getViemAccount };
