import process from 'process';
import { Address } from 'viem';

import { warn } from './log';
import { shorten } from './formatting';
import { getNetworkEnvKey } from '../networks';

export function getEnvVar(key: string, defaultValue?: string): string {
	const value = process.env[key];
	if (value === undefined || value === '') {
		if (defaultValue !== undefined) return defaultValue;
		warn(`Missing env variable: ${key}`, 'getEnvVar');
		return '';
	}

	return value;
}

export interface EnvAddressConfig<TPrefixes extends Record<string, string>> {
	prefixes: TPrefixes;
}

export function createEnvAddressGetter<TPrefixes extends Record<string, string>>(
	config: EnvAddressConfig<TPrefixes>,
) {
	function getEnvAddress(
		prefix: keyof TPrefixes,
		networkName?: string,
	): [Address, string] {
		const searchKey = networkName
			? `${config.prefixes[prefix]}_${getNetworkEnvKey(networkName)}`
			: config.prefixes[prefix];

		const value = getEnvVar(searchKey) as Address;
		const friendlyName = `${String(prefix)}(${shorten(value)})`

		return [value, friendlyName];
	}

	return { getEnvAddress };
}
