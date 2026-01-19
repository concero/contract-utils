import { HardhatRuntimeEnvironment } from 'hardhat/types';

import { conceroNetworks } from '../constants/conceroNetworks';
import { getTrezorDeployEnabled, log } from '../utils';
import { extractProxyAdminAddress } from '../utils/extractProxyAdminAddress';

export interface ITxParams {
	gasLimit: bigint;
}

export interface IDeployResult {
	hash: string;
	address: string;
	chainType: string;
	chainName: string;
	proxyAdminAddress: string;
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

	log(
		`Deploy ${contractName} from address: ${await deployer.getAddress()}`,
		'contract deploy',
		chain.name
	);

	const contractFactory = await hre.ethers.getContractFactory(contractName);

	const deployOverrides = txParams?.gasLimit ? { gasLimit: txParams.gasLimit } : {};

	const deployTx = contractFactory.getDeployTransaction(
		...contractConstructorArgs,
		deployOverrides
	);

	const isTrezorDeployEnabled = getTrezorDeployEnabled();
	if (deployTx.data && isTrezorDeployEnabled) {
		log(
			`${contractName} input data: ${deployTx.data} \n size: ${(deployTx.data.length - 2) / 2}`,
			'bytecode',
			chain.name
		);
	}

	const contract = await contractFactory.deploy(...contractConstructorArgs, deployOverrides);
	const receipt = await contract.deploymentTransaction()?.wait();
	const deploymentAddress = await contract.getAddress();

	if (hre.tenderly) {
		await hre.tenderly.verify({ name: contractName, address: deploymentAddress });
	}

	log(
		`Deployed at: ${deploymentAddress}`,
		`deploy ${contractName}`,
		chain.name
	);

	return {
		hash: contract.deploymentTransaction()?.hash,
		address: deploymentAddress,
		chainName: chain.name,
		chainType: chain.type,
		proxyAdminAddress: extractProxyAdminAddress(receipt)
	};
};
