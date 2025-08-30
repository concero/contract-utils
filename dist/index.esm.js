// src/constants/config.ts
var config = {
  DEFAULT_BLOCK_CONFIRMATIONS: 2
};

// src/networks/getNetworkEnvKey.ts
function getNetworkEnvKey(networkName) {
  if (!networkName) {
    throw new Error("Network name must be provided");
  }
  return camelCaseToCapsSnakeCase(networkName);
}
function getNetworkKey(NETWORK_NAME) {
  if (!NETWORK_NAME) {
    throw new Error("Network name must be provided");
  }
  return capsSnakeCaseToCamelCase(NETWORK_NAME);
}
function capsSnakeCaseToCamelCase(snakeCaseString) {
  if (!snakeCaseString) {
    throw new Error("String must be provided");
  }
  return snakeCaseString.toLowerCase().replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}
function camelCaseToCapsSnakeCase(camelCaseString) {
  if (!camelCaseString) {
    throw new Error("String must be provided");
  }
  return camelCaseString.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toUpperCase();
}

// src/networks/networkTypes.ts
var networkTypes = {
  mainnet: "mainnet",
  testnet: "testnet",
  localhost: "localhost"
};
export {
  config,
  getNetworkEnvKey,
  getNetworkKey,
  networkTypes
};
//# sourceMappingURL=index.esm.js.map
