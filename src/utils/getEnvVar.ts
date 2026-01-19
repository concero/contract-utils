import process from 'process';

import { warn } from './log';

function getEnvVar(key: string): string | undefined {
	const value = process.env[key];
	if (value === undefined || value === '') {
		warn(`Missing env variable: ${key}`, 'getEnvVar');
		return undefined;
	}

	return value;
}

export { getEnvVar };
