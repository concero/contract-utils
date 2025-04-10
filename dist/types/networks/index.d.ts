import { type ConceroMainnetNetworkNames } from './mainnetNetworks';
import { type ConceroTestnetNetworkNames } from './testnetNetworks';
import { ConceroNetwork } from "./types";
declare const conceroNetworks: Record<ConceroMainnetNetworkNames | ConceroTestnetNetworkNames, ConceroNetwork>;
export type { ConceroMainnetNetworkNames, ConceroTestnetNetworkNames };
export { conceroNetworks };
export { ConceroNetwork } from "./types";
