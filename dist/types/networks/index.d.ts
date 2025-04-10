import { type ConceroMainnetNetworkNames } from './mainnetNetworks';
import { type ConceroTestnetNetworkNames } from './testnetNetworks';
import { type ConceroNetwork, type NetworkType } from "./types";
import { networkEnvKeys, type NetworkEnvKeys } from "./networkEnvKeys";
import { networkTypes } from "./networkTypes";
declare const conceroNetworks: Record<ConceroMainnetNetworkNames | ConceroTestnetNetworkNames, ConceroNetwork>;
export type { ConceroNetwork, ConceroMainnetNetworkNames, ConceroTestnetNetworkNames, NetworkType, NetworkEnvKeys };
export { conceroNetworks, networkEnvKeys, networkTypes };
