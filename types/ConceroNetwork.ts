import { Chain } from 'viem';

export type NetworkType = 'mainnet' | 'testnet' | 'localhost';

export type ConceroNetworkNames = string;

export type ConceroNetwork = {
	chainId: number;
	name: string;
	type: NetworkType;
	chainSelector: bigint;
	accounts?: string[];
	viemChain: Chain;
	confirmations: number;
	url: string;
	rpcUrls: string[];
	saveDeployments?: boolean;
	trezorDerivationPaths?: number[][];
	trezorInsecureDerivation?: boolean;
};

export interface ChainDefinition {
	id: number;
	name: string;
	rpcUrls: string[];
	blockExplorer?: {
		name: string;
		url: string;
	};
	isTestnet: boolean;
}

export type ConceroLocalNetwork = ConceroNetwork & {
	saveDeployments?: boolean;
	forking?: {
		url: string;
		enabled: boolean;
		blockNumber?: number;
	};
};
export type ConceroHardhatNetwork = Omit<ConceroLocalNetwork, 'accounts'> & {
	accounts: Array<{
		privateKey: string;
		balance: string;
	}>;
};
