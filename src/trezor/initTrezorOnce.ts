import TrezorConnect from '@trezor/connect';

let isTrezorInitialized = false;

export async function initTrezorOnce() {
	if (isTrezorInitialized) return;
	await TrezorConnect.init({
		manifest: {
			email: 'nikita@concero.io',
			appUrl: 'https://concero.io',
			appName: 'concero',
		},
	});
	isTrezorInitialized = true;
}
