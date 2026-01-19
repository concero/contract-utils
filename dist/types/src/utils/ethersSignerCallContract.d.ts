import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Address } from "viem";
export declare const ethersSignerCallContract: (hre: HardhatRuntimeEnvironment, contract: Address, abi: any[], functionName: string, ...functionArgs: any[]) => Promise<`0x${string}`>;
