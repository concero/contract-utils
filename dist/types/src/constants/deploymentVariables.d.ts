import type { WaitForTransactionReceiptParameters } from "viem/actions/public/waitForTransactionReceipt";
import { EnvPrefixes } from "../../types/deploymentVariables";
import { ConceroNetwork } from "../../types/ConceroNetwork";
declare enum ProxyEnum {
    routerProxy = "routerProxy",
    verifierProxy = "verifierProxy",
    priceFeedProxy = "priceFeedProxy",
    creValidatorLibProxy = "creValidatorLibProxy",
    relayerLibProxy = "relayerLibProxy"
}
declare function getViemReceiptConfig(chain: ConceroNetwork): Partial<WaitForTransactionReceiptParameters>;
declare const envPrefixes: EnvPrefixes;
declare const ADMIN_ROLE = "0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42";
export { ProxyEnum, envPrefixes, getViemReceiptConfig, ADMIN_ROLE, };
