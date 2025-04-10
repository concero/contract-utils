import {
  type ConceroMainnetNetworkNames,
  mainnetNetworks,
} from './mainnetNetworks';
import {
  type ConceroTestnetNetworkNames,
  testnetNetworks,
} from './testnetNetworks';
import { type ConceroNetwork, type NetworkType } from "./types";
import {networkEnvKeys, type NetworkEnvKeys} from "./networkEnvKeys";
import {networkTypes} from "./networkTypes";

const conceroNetworks: Record<
  ConceroMainnetNetworkNames | ConceroTestnetNetworkNames,
  ConceroNetwork
> = {
  ...testnetNetworks,
  ...mainnetNetworks,
};

export type { ConceroNetwork, ConceroMainnetNetworkNames, ConceroTestnetNetworkNames, NetworkType, NetworkEnvKeys};
export { conceroNetworks, testnetNetworks, mainnetNetworks, networkEnvKeys, networkTypes};
