import { HardhatRuntimeEnvironment } from 'hardhat/types';

import { conceroNetworks } from '../constants/conceroNetworks';
import { ContractPrefix, EnvFileName } from '../../types/deploymentVariables';
import { getTrezorDeployEnabled, log, updateEnvAddress } from '../utils';

export interface ITxParams {
	gasLimit: bigint;
}

export interface IGenericDeployParams {
	hre: HardhatRuntimeEnvironment;
	contractName: string;
	contractPrefix: ContractPrefix;
	txParams?: Partial<ITxParams>;
}

export const genericDeploy = async (
	{ hre, contractName, contractPrefix, txParams }: IGenericDeployParams,
	...contractConstructorArgs: any[]
) => {
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
	await contract.deploymentTransaction()?.wait();
	const deploymentAddress = await contract.getAddress();

	if (hre.tenderly) {
		await hre.tenderly.verify({ name: contractName, address: deploymentAddress });
	}

	log(
		`Deployed at: ${deploymentAddress}`,
		`deploy ${contractName}`,
		chain.name
	);

	updateEnvAddress(
		contractPrefix,
		deploymentAddress,
		`deployments.${chain.type}` as EnvFileName,
		chain.name,
	);

	return contract.deploymentTransaction()?.hash;
};
