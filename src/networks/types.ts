import { Chain } from 'viem';

export type NetworkType = 'mainnet' | 'testnet' | 'localhost';
export type ConceroNetwork = {
  name: string;
  type: NetworkType;
  chainId: number;
  chainSelector: number;
  confirmations: number;
  viemChain: Chain;
};
