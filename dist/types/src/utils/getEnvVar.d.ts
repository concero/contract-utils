import { Address } from 'viem';
export declare function getEnvVar(key: string, defaultValue?: string): string;
export interface EnvAddressConfig<TPrefixes extends Record<string, string>> {
    prefixes: TPrefixes;
}
export declare function createEnvAddressGetter<TPrefixes extends Record<string, string>>(config: EnvAddressConfig<TPrefixes>): {
    getEnvAddress: (prefix: keyof TPrefixes, networkName?: string) => [Address, string];
};
