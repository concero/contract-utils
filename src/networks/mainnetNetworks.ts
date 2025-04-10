import {
  arbitrum,
  avalanche,
  base,
  mainnet,
  optimism,
  polygon,
} from 'viem/chains';
import { config } from '../constants/config';

import { networkTypes } from './networkTypes';

export const mainnetNetworks = {
  ethereum: {
    name: 'ethereum',
    type: networkTypes.mainnet,
    chainId: 1,
    chainSelector: 1,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: mainnet,
  },
  base: {
    name: 'base',
    type: networkTypes.mainnet,
    chainId: 8453,
    chainSelector: 8453,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: base,
  },
  arbitrum: {
    name: 'arbitrum',
    type: networkTypes.mainnet,
    chainId: 42161,
    chainSelector: 42161,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: arbitrum,
  },
  polygon: {
    name: 'polygon',
    type: networkTypes.mainnet,
    chainId: 137,
    chainSelector: 137,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: polygon,
  },
  avalanche: {
    name: 'avalanche',
    type: networkTypes.mainnet,
    chainId: 43114,
    chainSelector: 43114,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: avalanche,
  },
  optimism: {
    name: 'optimism',
    type: networkTypes.mainnet,
    chainId: 10,
    chainSelector: 10,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: optimism,
  },
  polygonZkEvm: {
    name: 'polygonZkEvm',
    type: networkTypes.mainnet,
    chainId: 137,
    chainSelector: 137,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: polygon,
  },
};

export type ConceroMainnetNetworkNames = keyof typeof mainnetNetworks;
