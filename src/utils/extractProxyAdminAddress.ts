import { ethers } from 'ethers';
import { Log } from 'viem';
import { IDeployResult } from '../deploy/GenericDeploy';

export function extractProxyAdminAddress(receipt: IDeployResult['receipt'] | null): string {
	if (!receipt) return ethers.ZeroAddress;

	const adminChangedTopic = ethers.id('AdminChanged(address,address)');
	const adminChangedLog = receipt.logs.find((log: ethers.Log | Log) => log.topics[0] === adminChangedTopic);

	if (!adminChangedLog) return ethers.ZeroAddress;

	try {
		const abiCoder = ethers.AbiCoder.defaultAbiCoder();
		const [, newAdmin] = abiCoder.decode(['address', 'address'], adminChangedLog.data);
		return newAdmin;
	} catch {
		return ethers.ZeroAddress;
	}
}
