/**
 * Converts a network name from camelCase to SNAKE_CASE
 *
 * @param networkName The network name in camelCase
 * @returns The network name in SNAKE_CASE
 */
export function getNetworkEnvKey(networkName: string): string {
  if (!networkName) {
    throw new Error('Network name must be provided');
  }

  return networkName.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
}
