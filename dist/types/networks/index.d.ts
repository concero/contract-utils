import { type ConceroMainnetNetworkNames, mainnetNetworks } from './mainnetNetworks';
import { type ConceroTestnetNetworkNames, testnetNetworks } from './testnetNetworks';
import { type ConceroNetwork, type NetworkType } from "./types";
import { networkEnvKeys, type NetworkEnvKeys } from "./networkEnvKeys";
import { networkTypes } from "./networkTypes";
declare const conceroNetworks: Record<ConceroMainnetNetworkNames | ConceroTestnetNetworkNames, ConceroNetwork>;
export type { ConceroNetwork, ConceroMainnetNetworkNames, ConceroTestnetNetworkNames, NetworkType, NetworkEnvKeys };
export { conceroNetworks, testnetNetworks, mainnetNetworks, networkEnvKeys, networkTypes };
