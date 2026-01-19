import type { WaitForTransactionReceiptParameters } from "viem/actions/public/waitForTransactionReceipt";

import { EnvPrefixes } from "../../types/deploymentVariables";
import { ConceroNetwork } from "../../types/ConceroNetwork";

enum ProxyEnum {
	routerProxy = "routerProxy",
	verifierProxy = "verifierProxy",
	priceFeedProxy = "priceFeedProxy",
	creValidatorLibProxy = "creValidatorLibProxy",
	relayerLibProxy = "relayerLibProxy",
}

function getViemReceiptConfig(chain: ConceroNetwork): Partial<WaitForTransactionReceiptParameters> {
	return {
		timeout: 0,
		confirmations: chain.confirmations,
	};
}

const envPrefixes: EnvPrefixes = {
	router: "CONCERO_ROUTER",
	routerProxy: "CONCERO_ROUTER_PROXY",
	routerProxyAdmin: "CONCERO_ROUTER_PROXY_ADMIN",
	verifier: "CONCERO_VERIFIER",
	verifierProxy: "CONCERO_VERIFIER_PROXY",
	verifierProxyAdmin: "CONCERO_VERIFIER_PROXY_ADMIN",
	priceFeed: "CONCERO_PRICE_FEED",
	priceFeedProxy: "CONCERO_PRICE_FEED_PROXY",
	priceFeedProxyAdmin: "CONCERO_PRICE_FEED_PROXY_ADMIN",
	lpToken: "LPTOKEN",
	pause: "CONCERO_PAUSE",
	creValidatorLibProxy: "CONCERO_CRE_VALIDATOR_LIB_PROXY",
	creValidatorLibProxyAdmin: "CONCERO_CRE_VALIDATOR_LIB_PROXY_ADMIN",
	creValidatorLib: "CONCERO_CRE_VALIDATOR_LIB",
	relayerLib: "CONCERO_RELAYER_LIB",
	relayerLibProxy: "CONCERO_RELAYER_LIB_PROXY",
	relayerLibProxyAdmin: "CONCERO_RELAYER_LIB_PROXY_ADMIN",
};

const ADMIN_SLOT = "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103";
const ADMIN_ROLE = "0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42";

export {
	ProxyEnum,
	envPrefixes,
	getViemReceiptConfig,
	ADMIN_SLOT,
	ADMIN_ROLE,
};
