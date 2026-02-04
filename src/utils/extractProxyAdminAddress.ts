import { ethers } from 'ethers';
import { Log } from 'viem';
import { IDeployResult } from '../deploy/GenericDeploy';

export function extractProxyAdminAddress(receipt: IDeployResult['receipt']): string {
	const adminChangedTopic = ethers.id('AdminChanged(address,address)');
	const adminChangedLog = receipt.logs.find((log: ethers.Log | Log) => log.topics[0] === adminChangedTopic);

	if (!adminChangedLog) throw new Error('AdminChanged(address,address) log not found');

	const abiCoder = ethers.AbiCoder.defaultAbiCoder();
	const [, newAdmin] = abiCoder.decode(['address', 'address'], adminChangedLog.data);
	return newAdmin;
}
