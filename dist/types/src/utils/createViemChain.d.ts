import { defineChain } from 'viem';
import { type ChainDefinition } from '../types';
export declare function createViemChain(chainDefinition: ChainDefinition): ReturnType<typeof defineChain>;
