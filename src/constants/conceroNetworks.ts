import mainnetChains from '@concero/concero-networks/output/chains.mainnet.json';
import testnetChains from '@concero/concero-networks/output/chains.testnet.json';
import type { Chain } from '@concero/concero-networks/src/types';

import {
	type NetworkType,
	type ChainDefinition,
	type ConceroNetwork,
	networkTypes,
} from '../types';
import { getWallet } from '../utils';
import { createViemChain } from '../utils/createViemChain';
import { getTrezorDeployEnabled } from '../utils/getTrezorDeployEnabled';

const mainnetProxyDeployerPK = getWallet(
	'mainnet',
	'proxyDeployer',
	'privateKey'
);
const testnetProxyDeployerPK = getWallet(
	'testnet',
	'proxyDeployer',
	'privateKey'
);

const mainnetDeployerPK = getWallet('mainnet', 'deployer', 'privateKey');
const testnetDeployerPK = getWallet('testnet', 'deployer', 'privateKey');

const trezorDeployEnabled = getTrezorDeployEnabled();

const testnetAccounts = [testnetDeployerPK, testnetProxyDeployerPK];

export type ConceroMainnetNetworkNames =
	(typeof mainnetChains)[keyof typeof mainnetChains]['name'];
export type ConceroTestnetNetworkNames =
	(typeof testnetChains)[keyof typeof testnetChains]['name'];

function createExtendedNetworks<T extends Record<string, Chain>>(
	chains: T,
	networkType: NetworkType,
	accounts: (string | undefined)[]
): Record<T[keyof T]['name'], ConceroNetwork> {
	const validAccounts = accounts.filter((acc): acc is string => !!acc);

	return Object.fromEntries(
		Object.values(chains).map(chain => {
			const chainDefinition: ChainDefinition = {
				id: parseInt(chain.id),
				name: chain.name,
				rpcUrls: chain.rpcUrls,
				isTestnet: chain.isTestnet ?? false,
				...(chain.blockExplorers?.[0] && {
					blockExplorer: {
						name: chain.blockExplorers[0].name,
						url: chain.blockExplorers[0].url,
					},
				}),
			};

			const viemChain = createViemChain(chainDefinition);

			return [
				chain.name,
				{
					name: chain.name,
					chainId: parseInt(chain.id),
					type: networkType,
					url: chain.rpcUrls[0] || '',
					rpcUrls: chain.rpcUrls,
					saveDeployments: false,
					...(!trezorDeployEnabled && { accounts: validAccounts }),
					chainSelector: BigInt(chain.chainSelector),
					confirmations: 1,
					viemChain,
					...(trezorDeployEnabled && {
						trezorDerivationPaths: [
							[44, 60, 0, 0, 0],
							[44, 60, 0, 0, 1],
						],
						trezorInsecureDerivation: true,
					}),
				},
			];
		})
	) as Record<T[keyof T]['name'], ConceroNetwork>;
}

export const testnetNetworks = createExtendedNetworks(
	testnetChains as unknown as Record<string, Chain>,
	networkTypes.testnet,
	testnetAccounts
);

export const mainnetNetworks = createExtendedNetworks(
	mainnetChains as unknown as Record<string, Chain>,
	networkTypes.mainnet,
	[mainnetDeployerPK, mainnetProxyDeployerPK]
);

export const conceroNetworks: Record<string, ConceroNetwork> = {
	...testnetNetworks,
	...mainnetNetworks,
};
