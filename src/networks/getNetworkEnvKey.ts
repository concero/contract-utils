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
  return camelCaseToCapsSnakeCase(networkName);
}

/**
 * Converts a network name from camelCase to SNAKE_CASE
 *
 * @param networkName The network name in camelCase
 * @returns The network name in SNAKE_CASE
 */
export function getNetworkKey(NETWORK_NAME: string): string {
  if (!NETWORK_NAME) {
    throw new Error('Network name must be provided');
  }
  return capsSnakeCaseToCamelCase(NETWORK_NAME);
}

/**
 * Converts a string from CAPS_SNAKE_CASE to camelCase
 *
 * @param snakeCaseString The string in CAPS_SNAKE_CASE format
 * @returns The string converted to camelCase format
 */
export function capsSnakeCaseToCamelCase(snakeCaseString: string): string {
  if (!snakeCaseString) {
    throw new Error('String must be provided');
  }

  return snakeCaseString
    .toLowerCase()
    .replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

/**
 * Converts a string from camelCase to CAPS_SNAKE_CASE
 *
 * @param camelCaseString The string in camelCase format
 * @returns The string converted to CAPS_SNAKE_CASE format
 */
export function camelCaseToCapsSnakeCase(camelCaseString: string): string {
  if (!camelCaseString) {
    throw new Error('String must be provided');
  }

  return camelCaseString.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toUpperCase();
}

export function getNetworkName(networkEnvKey: string): string {
  if (!networkEnvKey) {
    throw new Error('Network name must be provided');
  }

  return networkEnvKey
    .toLowerCase()
    .split('_')
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}
