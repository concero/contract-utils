import { getEnvVar } from './getEnvVar';

export const getTrezorDeployEnabled = () =>
	getEnvVar('TREZOR_DEPLOY_ENABLED', 'false') === 'true';
