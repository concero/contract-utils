import mainnetChains from '@concero/concero-networks/output/chains.mainnet.json';
import testnetChains from '@concero/concero-networks/output/chains.testnet.json';
import { ConceroNetwork } from '../../types/ConceroNetwork';
export type ConceroMainnetNetworkNames = (typeof mainnetChains)[keyof typeof mainnetChains]['name'];
export type ConceroTestnetNetworkNames = (typeof testnetChains)[keyof typeof testnetChains]['name'];
export declare const testnetNetworks: Record<string, ConceroNetwork>;
export declare const mainnetNetworks: Record<string, ConceroNetwork>;
export declare const conceroNetworks: Record<string, ConceroNetwork>;
