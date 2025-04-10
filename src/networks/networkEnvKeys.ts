import { mainnetNetworks } from './mainnetNetworks';
import { testnetNetworks } from './testnetNetworks';

export const networkEnvKeys: Record<string, string> = (() => {
  const generateKeys = (networks: Record<string, any>) => {
    return Object.keys(networks).reduce((acc, key) => {
      acc[key] = key.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
      return acc;
    }, {} as Record<string, string>);
  };

  const mainnetKeys = generateKeys(mainnetNetworks);
  const testnetKeys = generateKeys(testnetNetworks);

  return {
    ...mainnetKeys,
    ...testnetKeys,
    localhost: 'LOCALHOST',
    hardhat: 'LOCALHOST',
  };
})();


export type NetworkEnvKeys = typeof networkEnvKeys;
