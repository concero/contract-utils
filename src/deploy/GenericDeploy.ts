import { TransactionReceipt } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

import { Hex } from 'viem';
import type { WaitForTransactionReceiptReturnType } from 'viem/actions/public/waitForTransactionReceipt';
import { conceroNetworks } from '../constants/conceroNetworks';
import { trezorDeployContract } from '../trezor/trezorDeployContract';
import { getFallbackClients, getTrezorDeployEnabled, log } from '../utils';

export interface ITxParams {
	gasLimit: bigint;
	libraries: Record<string, string>;
}

export interface IDeployResult {
	address: string;
	chainType: string;
	chainName: string;
	chainId: number;
	receipt: TransactionReceipt | WaitForTransactionReceiptReturnType;
}

export interface IGenericDeployParams {
	hre: HardhatRuntimeEnvironment;
	contractName: string;
	txParams?: Partial<ITxParams>;
}

export const genericDeploy = async (
	{ hre, contractName, txParams }: IGenericDeployParams,
	...contractConstructorArgs: any[]
): Promise<IDeployResult> => {
	const [deployer] = await hre.ethers.getSigners();
	const chain = conceroNetworks[hre.network.name];
	const isTrezorDeployEnabled = getTrezorDeployEnabled();

	log(`Deploy ${contractName} from address: ${await deployer.getAddress()}`, 'contract deploy', chain.name);

	const contractFactory = await hre.ethers.getContractFactory(contractName, {
		libraries: txParams?.libraries,
	});

	const deployOverrides = txParams?.gasLimit ? { gasLimit: txParams.gasLimit } : {};

	let deploymentAddress;
	let receipt;

	if (isTrezorDeployEnabled) {
		const { publicClient } = getFallbackClients(chain);
		const tx = await trezorDeployContract(
			{ publicClient },
			{
				args: contractConstructorArgs,
				abi: hre.artifacts.readArtifactSync(contractName).abi,
				bytecode: contractFactory.bytecode as Hex,
				gas: deployOverrides.gasLimit,
			}
		);

		deploymentAddress = tx.contractAddress;
		receipt = await publicClient.waitForTransactionReceipt({ hash: tx.hash });
	} else {
		const contract = await contractFactory.deploy(...contractConstructorArgs, deployOverrides);
		receipt = await contract.deploymentTransaction()?.wait();
		deploymentAddress = await contract.getAddress();
	}

	if (hre.tenderly) {
		try {
			await hre.tenderly.verify({
				name: contractName,
				address: deploymentAddress,
			});
		} catch (e) {
			console.error(JSON.stringify(e));
		}
	}

	log(`Deployed at: ${deploymentAddress}`, `deploy ${contractName}`, chain.name);

	return {
		address: deploymentAddress,
		chainName: chain.name,
		chainType: chain.type,
		chainId: chain.chainId,
		receipt,
	};
};
