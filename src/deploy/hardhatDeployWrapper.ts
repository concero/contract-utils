import { Deployment } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { PublicClient } from 'viem';
import { getActualGasData } from './getActualGasData';

type HardhatDeployWrapperArgs = {
	hre: HardhatRuntimeEnvironment;
	args: any[];
	publicClient: PublicClient;
	proxy?: boolean;
	gasLimit?: number;
	log?: boolean;
	libraries?: {
		[key: string]: `0x${string}`;
	};
	skipIfAlreadyDeployed: boolean;
};

export async function hardhatDeployWrapper(
	contractName: string,
	{
		hre,
		args,
		publicClient,
		proxy = false,
		gasLimit,
		log = false,
		libraries,
		skipIfAlreadyDeployed = false,
	}: HardhatDeployWrapperArgs
): Promise<Deployment> {
	let actualDeployer;

	if (proxy) {
		const { proxyDeployer } = await hre.getNamedAccounts();
		actualDeployer = proxyDeployer;
	} else {
		const { deployer } = await hre.getNamedAccounts();
		actualDeployer = deployer;
	}

	const { deploy } = hre.deployments;

	const nonce = await publicClient.getTransactionCount({
		address: actualDeployer as `0x${string}`,
	});

	const gasData = await getActualGasData(publicClient);
	const waitConfirmations = hre.network.name.startsWith('ethereum') ? 1 : 3;

	if (log) {
		console.log(
			`\x1b[34m[hardhatDeployWrapper]\x1b[0m\x1b[35m[args]\x1b[0m`,
			{
				from: actualDeployer,
				args,
				nonce,
				gasLimit: gasLimit ? gasLimit : 'auto',
				gasData,
				waitConfirmations,
			}
		);
	}

	let deployment: Deployment;
	try {
		console.log('Starting deployment of:', contractName);
		deployment = await deploy(contractName, {
			from: actualDeployer,
			args: args,
			log: true,
			autoMine: true,
			nonce,
			waitConfirmations,
			...(gasLimit ? { gasLimit } : {}),
			...gasData,
			...(libraries ? { libraries } : {}),
			skipIfAlreadyDeployed,
		});
	} catch (error) {
		console.error('Error deploying contract:', error);
		throw error;
	}

	return deployment;
}
