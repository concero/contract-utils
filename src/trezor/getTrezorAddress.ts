import TrezorConnect from '@trezor/connect';
import { Address } from 'viem';
import { initTrezorOnce } from './initTrezorOnce';
import { defaultTrezorPath, ITrezorParams } from './trezorSendTx';

export const getTrezorAddress = async (path: ITrezorParams['path'] = defaultTrezorPath): Promise<Address> => {
	await initTrezorOnce();

	const addrRes = await TrezorConnect.ethereumGetAddress({
		path,
		showOnTrezor: false,
	});

	if (!addrRes.success) throw new Error(addrRes.payload.error);

	return addrRes.payload.address as Address;
};
