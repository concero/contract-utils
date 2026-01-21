import { ConceroNetwork } from "../types/ConceroNetwork";
interface GasParameters {
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
}
/**
 * Gets optimized gas parameters for priority transaction processing
 * @param chain - The network configuration
 * @param priorityMultiplier - Multiplier for maxPriorityFeePerGas (default: 2)
 * @param maxFeeMultiplier - Multiplier for maxFeePerGas buffer (default: 2)
 * @returns GasParameters object containing maxFeePerGas and maxPriorityFeePerGas
 */
export declare function getGasParameters(chain: ConceroNetwork, priorityMultiplier?: number, maxFeeMultiplier?: number): Promise<GasParameters>;
export {};
