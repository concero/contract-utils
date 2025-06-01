/**
 * Converts a network name from camelCase to SNAKE_CASE
 *
 * @param networkName The network name in camelCase
 * @returns The network name in SNAKE_CASE
 */
export declare function getNetworkEnvKey(networkName: string): string;
/**
 * Converts a network name from camelCase to SNAKE_CASE
 *
 * @param networkName The network name in camelCase
 * @returns The network name in SNAKE_CASE
 */
export declare function getNetworkKey(NETWORK_NAME: string): string;
/**
 * Converts a string from CAPS_SNAKE_CASE to camelCase
 *
 * @param snakeCaseString The string in CAPS_SNAKE_CASE format
 * @returns The string converted to camelCase format
 */
export declare function capsSnakeCaseToCamelCase(snakeCaseString: string): string;
/**
 * Converts a string from camelCase to CAPS_SNAKE_CASE
 *
 * @param camelCaseString The string in camelCase format
 * @returns The string converted to CAPS_SNAKE_CASE format
 */
export declare function camelCaseToCapsSnakeCase(camelCaseString: string): string;
export declare function getNetworkName(networkEnvKey: string): string;
