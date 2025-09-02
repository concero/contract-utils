import { PublicClient } from 'viem';
type GasData = {
    gasPrice?: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
};
export declare function getActualGasData(publicClient: PublicClient): Promise<GasData>;
export {};
