import { ConceroNetwork } from '../types/ConceroNetwork';
import {
  type ConceroMainnetNetworkNames,
  mainnetNetworks,
} from './mainnetNetworks';
import {
  type ConceroTestnetNetworkNames,
  testnetNetworks,
} from './testnetNetworks';

const conceroNetworks: Record<
  ConceroMainnetNetworkNames | ConceroTestnetNetworkNames,
  ConceroNetwork
> = {
  ...testnetNetworks,
  ...mainnetNetworks,
};

export type { ConceroMainnetNetworkNames, ConceroTestnetNetworkNames };

export { conceroNetworks };
