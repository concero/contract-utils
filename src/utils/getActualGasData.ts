import { PublicClient } from 'viem';

type GasData = {
	gasPrice?: string;
	maxFeePerGas?: string;
	maxPriorityFeePerGas?: string;
};

export async function getActualGasData(
	publicClient: PublicClient
): Promise<GasData> {
	const block = await publicClient.getBlock();

	const isEIP1559 = !!block.baseFeePerGas;

	let gasPrice = 0n;
	let maxPriorityFeePerGas = 0n;
	try {
		if (isEIP1559) {
			const { maxFeePerGas } = await publicClient.estimateFeesPerGas();
			gasPrice = maxFeePerGas;
			maxPriorityFeePerGas =
				await publicClient.estimateMaxPriorityFeePerGas();
		} else {
			gasPrice = await publicClient.getGasPrice();
		}
	} catch (error) {
		console.error('Error getting actual gas data:', error);
		return {
			gasPrice: '0',
			maxFeePerGas: '0',
			maxPriorityFeePerGas: '0',
		};
	}

	const gasDataLegacy = {
		gasPrice: gasPrice.toString(),
	};

	const gasDataEIP1559 = {
		maxFeePerGas: gasPrice.toString(),
		maxPriorityFeePerGas: maxPriorityFeePerGas.toString(),
	};

	const gasData: GasData = isEIP1559 ? gasDataEIP1559 : gasDataLegacy;

	return gasData;
}
