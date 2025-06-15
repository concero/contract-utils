"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  config: () => config,
  getNetworkEnvKey: () => getNetworkEnvKey,
  getNetworkKey: () => getNetworkKey,
  networkTypes: () => networkTypes
});
module.exports = __toCommonJS(index_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config,
  getNetworkEnvKey,
  getNetworkKey,
  networkTypes
});
//# sourceMappingURL=index.cjs.js.map
