import { defineChain } from 'viem';
import { ChainDefinition } from '../../types/ConceroNetwork';
export declare function createViemChain(chainDefinition: ChainDefinition): ReturnType<typeof defineChain>;
