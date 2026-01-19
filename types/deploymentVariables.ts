export type EnvPrefixes = {
	router: string;
	routerProxy: string;
	routerProxyAdmin: string;
	verifier: string;
	verifierProxy: string;
	verifierProxyAdmin: string;
	priceFeed: string;
	priceFeedProxy: string;
	priceFeedProxyAdmin: string;
	lpToken: string;
	pause: string;
	creValidatorLib: string;
	creValidatorLibProxy: string;
	creValidatorLibProxyAdmin: string;
	relayerLib: string;
	relayerLibProxy: string;
	relayerLibProxyAdmin: string;
};

export type ContractPrefix = keyof EnvPrefixes;

export type EnvFileName =
| "deployments.mainnet"
| "deployments.testnet"
| "deployments.localhost"

