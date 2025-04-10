import { Chain } from 'viem';

export type ConceroNetwork = {
  name: string;
  type: NetworkType;
  chainId: number;
  chainSelector: number;
  confirmations: number;
  viemChain: Chain;
};

export type NetworkType = 'mainnet' | 'testnet' | 'localhost';
