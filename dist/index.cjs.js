"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  TokenSender: () => TokenSender,
  baseAccountTypePrefixes: () => baseAccountTypePrefixes,
  compileContracts: () => compileContracts,
  conceroNetworks: () => conceroNetworks,
  config: () => config,
  createEnvAddressGetter: () => createEnvAddressGetter,
  createEnvUpdater: () => createEnvUpdater,
  createViemAccountGetter: () => createViemAccountGetter,
  createViemChain: () => createViemChain,
  createWalletGetter: () => createWalletGetter,
  err: () => err,
  ethersSignerCallContract: () => ethersSignerCallContract,
  extractProxyAdminAddress: () => extractProxyAdminAddress,
  formatGas: () => formatGas,
  genericDeploy: () => genericDeploy,
  getActualGasData: () => getActualGasData,
  getClients: () => getClients,
  getEnvVar: () => getEnvVar,
  getFallbackClients: () => getFallbackClients,
  getGasParameters: () => getGasParameters,
  getNetworkEnvKey: () => getNetworkEnvKey,
  getNetworkKey: () => getNetworkKey,
  getTestClient: () => getTestClient,
  getTrezorDeployEnabled: () => getTrezorDeployEnabled,
  getViemAccount: () => getViemAccount,
  getWallet: () => getWallet,
  localhostViemChain: () => localhostViemChain,
  log: () => log,
  mainnetNetworks: () => mainnetNetworks,
  networkTypes: () => networkTypes,
  shorten: () => shorten,
  testnetNetworks: () => testnetNetworks,
  trezorDeployContract: () => trezorDeployContract,
  trezorSendTx: () => trezorSendTx,
  trezorWriteContract: () => trezorWriteContract,
  warn: () => warn
});
module.exports = __toCommonJS(index_exports);

// src/types/networkTypes.ts
var networkTypes = {
  mainnet: "mainnet",
  testnet: "testnet",
  localhost: "localhost"
};

// src/utils/createViemChain.ts
var import_viem = require("viem");
function createViemChain(chainDefinition) {
  return (0, import_viem.defineChain)({
    id: chainDefinition.id,
    name: chainDefinition.name,
    nativeCurrency: {
      decimals: 18,
      name: "eth",
      symbol: "eth"
    },
    rpcUrls: {
      default: { http: chainDefinition.rpcUrls }
    },
    blockExplorers: chainDefinition.blockExplorer ? {
      default: {
        name: chainDefinition.blockExplorer.name,
        url: chainDefinition.blockExplorer.url
      }
    } : void 0,
    testnet: chainDefinition.isTestnet
  });
}

// src/utils/getEnvVar.ts
var import_process = __toESM(require("process"));

// src/utils/log.ts
var networkColors = {
  ethereum: "\x1B[30m",
  // grey
  arbitrum: "\x1B[34m",
  // blue
  polygon: "\x1B[35m",
  // magenta
  avalanche: "\x1B[31m",
  // red
  base: "\x1B[36m",
  // cyan
  ethereumSepolia: "\x1B[30m",
  // grey
  arbitrumSepolia: "\x1B[34m",
  // blue
  optimismSepolia: "\x1B[31m",
  // red
  polygonAmoy: "\x1B[35m",
  // magenta
  avalancheFuji: "\x1B[31m",
  // red
  baseSepolia: "\x1B[36m",
  // cyan
  hardhat: "\x1B[32m",
  // green
  localhost: "\x1B[32m"
  // green
};
var reset = "\x1B[0m";
function log(message, functionName, networkName) {
  const greenFill = "\x1B[32m";
  const network = networkName ? `\x1B[35m[${networkName}]${reset}` : "";
  console.log(`${network}${greenFill}[${functionName}]${reset}`, message);
}
function warn(message, functionName) {
  const yellowFill = "\x1B[33m";
  console.log(`${yellowFill}[${functionName}]${reset}`, message);
}
function err(message, functionName, networkName) {
  const redFill = "\x1B[31m";
  const network = networkName ? `${networkColors[networkName]}[${networkName}]${reset}` : "";
  console.log(
    `${network}${redFill}[${functionName}] ERROR:${reset}`,
    message
  );
}
var log_default = log;

// src/utils/formatting.ts
function shorten(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
function formatGas(gasAmountWei) {
  return gasAmountWei.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

// src/utils/getEnvVar.ts
function getEnvVar(key, defaultValue) {
  const value = import_process.default.env[key];
  if (value === void 0 || value === "") {
    if (defaultValue !== void 0) return defaultValue;
    warn(`Missing env variable: ${key}`, "getEnvVar");
    return "";
  }
  return value;
}
function createEnvAddressGetter(config2) {
  function getEnvAddress(prefix, networkName) {
    const searchKey = networkName ? `${config2.prefixes[prefix]}_${getNetworkEnvKey(networkName)}` : config2.prefixes[prefix];
    const value = getEnvVar(searchKey);
    const friendlyName = `${String(prefix)}(${shorten(value)})`;
    return [value, friendlyName];
  }
  return { getEnvAddress };
}

// src/utils/getTrezorDeployEnabled.ts
var getTrezorDeployEnabled = () => getEnvVar("TREZOR_DEPLOY_ENABLED", "false") === "true";

// src/utils/createWalletGetter.ts
var baseAccountTypePrefixes = {
  proxyDeployer: "PROXY_DEPLOYER",
  deployer: "DEPLOYER"
};
function createWalletGetter(config2) {
  function getWallet2(chainType, accountType, walletType) {
    const prefix = config2.accountTypePrefixes[accountType];
    if (!prefix) {
      throw new Error(`Unknown account type: ${String(accountType)}`);
    }
    const walletKey = walletType === "privateKey" ? "PRIVATE_KEY" : "ADDRESS";
    const envKey = `${chainType.toUpperCase()}_${prefix}_${walletKey}`;
    const walletValue = process.env[envKey];
    if (!walletValue) {
      warn(`Missing env variable: ${envKey}`, "getWallet");
    }
    return walletValue;
  }
  return { getWallet: getWallet2 };
}
var { getWallet } = createWalletGetter({
  accountTypePrefixes: baseAccountTypePrefixes
});

// src/utils/ethersSignerCallContract.ts
var ethersSignerCallContract = async (hre, contract, abi, functionName, ...functionArgs) => {
  const [ethersSigner] = await hre.ethers.getSigners();
  const ethersContract = new hre.ethers.Contract(contract, abi, ethersSigner);
  const unsignedTx = await ethersContract[functionName].populateTransaction(...functionArgs);
  log(
    `Size: ${(unsignedTx.data.length - 2) / 2}, Input data: ${unsignedTx.data}, Address: ${unsignedTx.to}`,
    functionName,
    hre.network.name
  );
  return (await ethersSigner.sendTransaction(unsignedTx)).hash;
};

// src/utils/compileContracts.ts
var import_child_process = require("child_process");
function compileContracts({ quiet = true, force = false }) {
  const packageManager = process.env["PACKAGE_MANAGER"] || "yarn";
  const command = `${packageManager} compile`;
  const args = [];
  if (quiet) args.push("--quiet");
  if (force) args.push("--force");
  (0, import_child_process.execSync)(`${command} ${args.join(" ")}`, { stdio: "inherit" });
}

// src/utils/localhostViemChain.ts
var import_viem2 = require("viem");
var localhostViemChain = (0, import_viem2.defineChain)({
  id: Number(process.env.LOCALHOST_FORK_CHAIN_ID),
  name: "localhost",
  nativeCurrency: {
    decimals: 18,
    name: "eth",
    symbol: "eth"
  },
  rpcUrls: {
    default: { http: [process.env.LOCALHOST_RPC_URL ?? "http://127.0.0.1:8545"] }
  },
  testnet: true
});
var hardhatViemChain = (0, import_viem2.defineChain)({
  id: Number(process.env.HARDHAT_CHAIN_ID),
  name: "hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "eth",
    symbol: "eth"
  },
  rpcUrls: {
    default: { http: [process.env.HARDHAT_RPC_URL ?? "http://127.0.0.1:8545"] }
  },
  testnet: true
});

// src/utils/extractProxyAdminAddress.ts
var import_ethers = require("ethers");
function extractProxyAdminAddress(receipt) {
  if (!receipt) return import_ethers.ethers.ZeroAddress;
  const adminChangedTopic = import_ethers.ethers.id("AdminChanged(address,address)");
  const adminChangedLog = receipt.logs.find((log2) => log2.topics[0] === adminChangedTopic);
  if (!adminChangedLog) return import_ethers.ethers.ZeroAddress;
  try {
    const abiCoder = import_ethers.ethers.AbiCoder.defaultAbiCoder();
    const [, newAdmin] = abiCoder.decode(["address", "address"], adminChangedLog.data);
    return newAdmin;
  } catch {
    return import_ethers.ethers.ZeroAddress;
  }
}

// src/utils/createEnvUpdater.ts
var import_fs = require("fs");
var import_path = __toESM(require("path"));
function createEnvUpdater(config2) {
  function updateEnvVariable(key, newValue, envFileName) {
    const filePath = import_path.default.join(config2.basePath, `.env.${envFileName}`);
    if (!(0, import_fs.existsSync)(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const envContents = (0, import_fs.readFileSync)(filePath, "utf8");
    let lines = envContents.split(/\r?\n/);
    const keyExists = lines.some((line) => line.startsWith(`${key}=`));
    if (!keyExists) {
      log_default(
        `Key ${key} not found in .env file. Adding to ${filePath}`,
        "updateEnvVariable"
      );
      lines.push(`${key}=${newValue}`);
    } else {
      lines = lines.map((line) => {
        const [currentKey] = line.split("=");
        if (currentKey === key) {
          return `${key}=${newValue}`;
        }
        return line;
      });
    }
    (0, import_fs.writeFileSync)(filePath, lines.join("\n"));
    process.env[key] = newValue;
  }
  function updateEnvAddress(prefix, newValue, envFileName, networkPostfix) {
    const searchKey = networkPostfix ? `${config2.prefixes[prefix]}_${getNetworkEnvKey(networkPostfix)}` : String(config2.prefixes[prefix]);
    updateEnvVariable(searchKey, newValue, envFileName);
  }
  return { updateEnvVariable, updateEnvAddress };
}

// src/utils/getActualGasData.ts
async function getActualGasData(publicClient) {
  const block = await publicClient.getBlock();
  const isEIP1559 = !!block.baseFeePerGas;
  let gasPrice = 0n;
  let maxPriorityFeePerGas = 0n;
  try {
    if (isEIP1559) {
      const { maxFeePerGas } = await publicClient.estimateFeesPerGas();
      gasPrice = maxFeePerGas;
      maxPriorityFeePerGas = await publicClient.estimateMaxPriorityFeePerGas();
    } else {
      gasPrice = await publicClient.getGasPrice();
    }
  } catch (error) {
    console.error("Error getting actual gas data:", error);
    return {
      gasPrice: "0",
      maxFeePerGas: "0",
      maxPriorityFeePerGas: "0"
    };
  }
  const gasDataLegacy = {
    gasPrice: gasPrice.toString()
  };
  const gasDataEIP1559 = {
    maxFeePerGas: gasPrice.toString(),
    maxPriorityFeePerGas: maxPriorityFeePerGas.toString()
  };
  const gasData = isEIP1559 ? gasDataEIP1559 : gasDataLegacy;
  return gasData;
}

// src/utils/getViemClients.ts
var import_viem3 = require("viem");
var import_accounts = require("viem/accounts");

// src/constants/conceroNetworks.ts
var import_chains_mainnet = __toESM(require("@concero/concero-networks/output/chains.mainnet.json"));
var import_chains_testnet = __toESM(require("@concero/concero-networks/output/chains.testnet.json"));
var mainnetProxyDeployerPK = getWallet("mainnet", "proxyDeployer", "privateKey");
var testnetProxyDeployerPK = getWallet("testnet", "proxyDeployer", "privateKey");
var mainnetDeployerPK = getWallet("mainnet", "deployer", "privateKey");
var testnetDeployerPK = getWallet("testnet", "deployer", "privateKey");
var testnetAccounts = [testnetDeployerPK, testnetProxyDeployerPK];
function createExtendedNetworks(chains, networkType, accounts) {
  const validAccounts = accounts.filter((acc) => !!acc);
  return Object.fromEntries(
    Object.values(chains).map((chain) => {
      const chainDefinition = {
        id: parseInt(chain.id),
        name: chain.name,
        rpcUrls: chain.rpcUrls,
        isTestnet: chain.isTestnet ?? false,
        ...chain.blockExplorers?.[0] && {
          blockExplorer: {
            name: chain.blockExplorers[0].name,
            url: chain.blockExplorers[0].url
          }
        }
      };
      const viemChain = createViemChain(chainDefinition);
      return [
        chain.name,
        {
          name: chain.name,
          chainId: parseInt(chain.id),
          type: networkType,
          url: chain.rpcUrls[0] || "",
          rpcUrls: chain.rpcUrls,
          saveDeployments: false,
          accounts: validAccounts,
          chainSelector: BigInt(chain.chainSelector),
          confirmations: 1,
          viemChain
        }
      ];
    })
  );
}
var testnetNetworks = createExtendedNetworks(
  import_chains_testnet.default,
  networkTypes.testnet,
  testnetAccounts
);
var mainnetNetworks = createExtendedNetworks(
  import_chains_mainnet.default,
  networkTypes.mainnet,
  [mainnetDeployerPK, mainnetProxyDeployerPK]
);
var conceroNetworks = {
  ...testnetNetworks,
  ...mainnetNetworks
};

// src/utils/getViemClients.ts
function getClients(viemChain, url, account = (0, import_accounts.privateKeyToAccount)(
  `0x${process.env.TESTNET_DEPLOYER_PRIVATE_KEY}`
)) {
  const publicClient = (0, import_viem3.createPublicClient)({
    transport: (0, import_viem3.http)(url),
    chain: viemChain
  });
  const walletClient = (0, import_viem3.createWalletClient)({
    transport: (0, import_viem3.http)(url),
    chain: viemChain,
    account
  });
  return { walletClient, publicClient, account };
}
function getTestClient(account) {
  const testClient = (0, import_viem3.createTestClient)({
    chain: localhostViemChain,
    mode: "hardhat",
    transport: (0, import_viem3.http)(),
    account
  }).extend(import_viem3.publicActions).extend(import_viem3.walletActions);
  return testClient;
}
function getFallbackClients(chain, account) {
  if (!account) {
    switch (chain.type) {
      case "mainnet":
        account = (0, import_accounts.privateKeyToAccount)(
          `0x${process.env.MAINNET_DEPLOYER_PRIVATE_KEY}`
        );
        break;
      case "testnet":
        account = (0, import_accounts.privateKeyToAccount)(
          `0x${process.env.TESTNET_DEPLOYER_PRIVATE_KEY}`,
          {
            nonceManager: import_viem3.nonceManager
          }
        );
        break;
      case "localhost":
        account = (0, import_accounts.privateKeyToAccount)(
          `0x${process.env.LOCALHOST_DEPLOYER_PRIVATE_KEY}`
        );
        break;
      default:
        throw new Error(`Unsupported chain type: ${chain.type}`);
    }
  }
  const { viemChain, name } = chain;
  if (!conceroNetworks[name].rpcUrls.length) {
    throw new Error(`No URLs configured for chain: ${name}`);
  }
  const transport = (0, import_viem3.fallback)(
    conceroNetworks[name].rpcUrls.map((url) => (0, import_viem3.http)(url)),
    {
      retryCount: 3
    }
  );
  const publicClient = (0, import_viem3.createPublicClient)({ transport, chain: viemChain });
  const walletClient = (0, import_viem3.createWalletClient)({
    transport,
    chain: viemChain,
    account
  });
  return { walletClient, publicClient, account };
}
function getViemAccount(chainType, accountType) {
  const privateKey = `0x${getWallet(chainType, accountType, "privateKey")}`;
  return (0, import_accounts.privateKeyToAccount)(privateKey, {
    nonceManager: import_viem3.nonceManager
  });
}
function createViemAccountGetter(config2) {
  function getViemAccount2(chainType, accountType) {
    const privateKey = `0x${config2.getWallet(chainType, accountType, "privateKey")}`;
    return (0, import_accounts.privateKeyToAccount)(privateKey, {
      nonceManager: import_viem3.nonceManager
    });
  }
  return { getViemAccount: getViemAccount2 };
}

// src/utils/getGasParameters.ts
var NETWORK_MINIMUMS = {
  polygon: {
    minTipCap: BigInt(3e10),
    // 30 gwei
    minBaseFee: BigInt(3e10)
    // 30 gwei
  }
  // Add other networks as needed
};
async function getGasParameters(chain, priorityMultiplier = 1, maxFeeMultiplier = 1) {
  const { publicClient } = getFallbackClients(chain);
  try {
    const block = await publicClient.getBlock();
    const baseFee = block.baseFeePerGas ?? BigInt(0);
    const networkMinimums = getNetworkMinimums(chain);
    const suggestedPriorityFee = await getSuggestedPriorityFee(publicClient, chain);
    const calculatedPriorityFee = calculatePriorityFee(
      suggestedPriorityFee,
      priorityMultiplier
    );
    const priorityFee = calculatedPriorityFee > networkMinimums.minTipCap ? calculatedPriorityFee : networkMinimums.minTipCap;
    const calculatedMaxFee = calculateMaxFee(baseFee, priorityFee, maxFeeMultiplier);
    const minRequiredMaxFee = networkMinimums.minBaseFee + priorityFee;
    const maxFeePerGas = calculatedMaxFee > minRequiredMaxFee ? calculatedMaxFee : minRequiredMaxFee;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas: priorityFee
    };
  } catch (error) {
    const networkMinimums = getNetworkMinimums(chain);
    const gasPrice = await publicClient.getGasPrice();
    const priorityFee = networkMinimums.minTipCap;
    return {
      maxFeePerGas: gasPrice > networkMinimums.minBaseFee + priorityFee ? gasPrice : networkMinimums.minBaseFee + priorityFee,
      maxPriorityFeePerGas: priorityFee
    };
  }
}
function getNetworkMinimums(chain) {
  const isPolygon = chain.chainId === 137 || chain.name.toLowerCase().includes("polygon");
  if (isPolygon) {
    return NETWORK_MINIMUMS.polygon;
  }
  return {
    minTipCap: BigInt(15e8),
    // 1.5 gwei
    minBaseFee: BigInt(1e9)
    // 1 gwei
  };
}
async function getSuggestedPriorityFee(publicClient, chain) {
  try {
    const isPolygon = chain.chainId === 137 || chain.name.toLowerCase().includes("polygon");
    const blocksToAnalyze = isPolygon ? 5 : 10;
    const blocks = await Promise.all(
      Array.from(
        { length: blocksToAnalyze },
        (_, i) => publicClient.getBlock({ blockNumber: BigInt(-1 - i) })
      )
    );
    const priorityFees = blocks.map((block) => block.baseFeePerGas ?? BigInt(0)).sort((a, b) => a < b ? -1 : 1);
    const index = isPolygon ? Math.floor(priorityFees.length * 0.75) : Math.floor(priorityFees.length * 0.5);
    return priorityFees[index];
  } catch {
    return getNetworkMinimums(chain).minTipCap;
  }
}
function calculatePriorityFee(basePriorityFee, multiplier) {
  return BigInt(Math.ceil(Number(basePriorityFee) * multiplier));
}
function calculateMaxFee(baseFee, priorityFee, multiplier) {
  return BigInt(Math.ceil(Number(baseFee) * multiplier)) + priorityFee;
}

// src/constants/config.ts
var config = {
  DEFAULT_BLOCK_CONFIRMATIONS: 2
};

// src/trezor/trezorDeployContract.ts
var import_viem5 = require("viem");

// src/trezor/trezorSendTx.ts
var import_connect2 = __toESM(require("@trezor/connect"));
var import_viem4 = require("viem");

// src/trezor/initTrezorOnce.ts
var import_connect = __toESM(require("@trezor/connect"));
var isTrezorInitialized = false;
async function initTrezorOnce() {
  if (isTrezorInitialized) return;
  await import_connect.default.init({
    manifest: {
      email: "nikita@concero.io",
      appUrl: "https://concero.io",
      appName: "concero"
    }
  });
  isTrezorInitialized = true;
}

// src/trezor/trezorSendTx.ts
var defaultPath = "m/44'/60'/0'/0/0";
function normalizeHex(hex, name) {
  if (!hex.startsWith("0x")) hex = `0x${hex}`;
  if (!(0, import_viem4.isHex)(hex)) throw new Error(`${name} must be 0x-prefixed hex`);
  return hex;
}
function yParityFromV(v) {
  if (v === 0n || v === 1n) return Number(v);
  if (v === 27n || v === 28n) return Number(v - 27n);
  return Number((v - 35n) % 2n);
}
async function trezorSendTx(viemParams, txParams, trezorPrams = {
  path: defaultPath,
  showFromAddressOnTrezor: false,
  forceLegacy: false
}) {
  await initTrezorOnce();
  const { publicClient } = viemParams;
  const { to = null, value = 0n, data = "0x" } = txParams;
  const { path: path2, showFromAddressOnTrezor, forceLegacy } = trezorPrams;
  const chainId = publicClient.chain?.id ?? await publicClient.getChainId();
  const addrRes = await import_connect2.default.ethereumGetAddress({
    path: path2,
    showOnTrezor: showFromAddressOnTrezor
  });
  if (!addrRes.success) throw new Error(addrRes.payload.error);
  const from = addrRes.payload.address;
  log(`Deploy from ${from}`, "trezorSendTx");
  const normData = normalizeHex(data, "data");
  const nonce = txParams.nonce ?? await publicClient.getTransactionCount({
    address: from,
    blockTag: "pending"
  });
  const gas = txParams.gas ?? await publicClient.estimateGas({
    account: from,
    to: to ?? void 0,
    value,
    data: normData === "0x" ? void 0 : normData
  });
  let gasPrice = txParams.gasPrice;
  let maxFeePerGas = txParams.maxFeePerGas;
  let maxPriorityFeePerGas = txParams.maxPriorityFeePerGas;
  if (!forceLegacy && gasPrice == null && (maxFeePerGas == null || maxPriorityFeePerGas == null)) {
    const fees = await publicClient.estimateFeesPerGas();
    if ("maxFeePerGas" in fees && "maxPriorityFeePerGas" in fees) {
      maxFeePerGas = fees.maxFeePerGas;
      maxPriorityFeePerGas = fees.maxPriorityFeePerGas;
    } else if ("gasPrice" in fees) {
      gasPrice = fees.gasPrice;
    }
  }
  const useEip1559 = !forceLegacy && maxFeePerGas != null && maxPriorityFeePerGas != null;
  if (!useEip1559 && gasPrice == null) {
    gasPrice = await publicClient.getGasPrice();
  }
  const txForTrezor = {
    to,
    value: (0, import_viem4.toHex)(value),
    data: normData,
    chainId,
    nonce: (0, import_viem4.toHex)(nonce),
    gasLimit: (0, import_viem4.toHex)(gas)
  };
  if (useEip1559) {
    txForTrezor.maxFeePerGas = (0, import_viem4.toHex)(maxFeePerGas);
    txForTrezor.maxPriorityFeePerGas = (0, import_viem4.toHex)(maxPriorityFeePerGas);
  } else {
    txForTrezor.gasPrice = (0, import_viem4.toHex)(gasPrice);
  }
  const signRes = await import_connect2.default.ethereumSignTransaction({
    path: path2,
    transaction: txForTrezor
  });
  if (!signRes.success) throw new Error(signRes.payload.error);
  const r = normalizeHex(signRes.payload.r, "r");
  const s = normalizeHex(signRes.payload.s, "s");
  const vBig = BigInt(signRes.payload.v);
  const txSerializable = {
    chainId,
    nonce,
    gas,
    to: to ?? void 0,
    value,
    data: normData
  };
  if (useEip1559) {
    txSerializable.maxFeePerGas = maxFeePerGas;
    txSerializable.maxPriorityFeePerGas = maxPriorityFeePerGas;
    const serializedTransaction = (0, import_viem4.serializeTransaction)(txSerializable, {
      r,
      s,
      yParity: yParityFromV(vBig)
    });
    return await publicClient.sendRawTransaction({ serializedTransaction });
  } else {
    txSerializable.gasPrice = gasPrice;
    const serializedTransaction = (0, import_viem4.serializeTransaction)(txSerializable, {
      r,
      s,
      v: vBig
    });
    return await publicClient.sendRawTransaction({ serializedTransaction });
  }
}

// src/trezor/trezorDeployContract.ts
async function trezorDeployContract(viemParams, deployParams, trezorParams) {
  const { publicClient } = viemParams;
  const { abi, bytecode, args, value = 0n, ...overrides } = deployParams;
  const data = (0, import_viem5.encodeDeployData)({ abi, bytecode, args });
  const hash = await trezorSendTx(
    { publicClient },
    { data, value, ...overrides },
    trezorParams
  );
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  if (!receipt.contractAddress)
    throw new Error("No contractAddress in receipt");
  return { hash, contractAddress: receipt.contractAddress };
}

// src/trezor/trezorWriteContract.ts
var import_viem6 = require("viem");
async function trezorWriteContract(viemParams, writeContractParams, trezorParams) {
  const {
    address,
    abi,
    functionName,
    args,
    value = 0n,
    ...overrides
  } = writeContractParams;
  const data = (0, import_viem6.encodeFunctionData)({ abi, functionName, args });
  return trezorSendTx(
    viemParams,
    {
      to: address,
      data,
      value,
      ...overrides
    },
    trezorParams
  );
}

// src/deploy/GenericDeploy.ts
var genericDeploy = async ({ hre, contractName, txParams }, ...contractConstructorArgs) => {
  const [deployer] = await hre.ethers.getSigners();
  const chain = conceroNetworks[hre.network.name];
  const isTrezorDeployEnabled = getTrezorDeployEnabled();
  log(`isTrezorDeployEnabled: ${isTrezorDeployEnabled}`, "genericDeploy");
  const contractFactory = await hre.ethers.getContractFactory(contractName, {
    libraries: txParams?.libraries
  });
  const deployOverrides = txParams?.gasLimit ? { gasLimit: txParams.gasLimit } : {};
  let deploymentAddress;
  let receipt;
  if (isTrezorDeployEnabled) {
    const { publicClient } = getFallbackClients(chain);
    const tx = await trezorDeployContract(
      { publicClient },
      {
        args: contractConstructorArgs,
        abi: hre.artifacts.readArtifactSync(contractName).abi,
        bytecode: contractFactory.bytecode,
        gas: deployOverrides.gasLimit
      }
    );
    deploymentAddress = tx.contractAddress;
    receipt = await publicClient.waitForTransactionReceipt({ hash: tx.hash });
  } else {
    log(`Deploy ${contractName} from address: ${await deployer.getAddress()}`, "genericDeploy", chain.name);
    const contract = await contractFactory.deploy(...contractConstructorArgs, deployOverrides);
    receipt = await contract.deploymentTransaction()?.wait();
    deploymentAddress = await contract.getAddress();
  }
  if (hre.tenderly) {
    try {
      await hre.tenderly.verify({
        name: contractName,
        address: deploymentAddress
      });
    } catch (e) {
      console.error(JSON.stringify(e));
    }
  }
  log(`Deployed at: ${deploymentAddress}`, `deploy ${contractName}`, chain.name);
  return {
    address: deploymentAddress,
    chainName: chain.name,
    chainType: chain.type,
    chainId: chain.chainId,
    receipt
  };
};

// src/tokens/TokenSender.ts
var import_viem7 = require("viem");
var TokenSender = class {
  walletClient;
  publicClient;
  constructor(walletClient, publicClient) {
    this.walletClient = walletClient;
    this.publicClient = publicClient;
  }
  async sendToken(tokenAddress, amount, recipient) {
    const [tokenDecimals, tokenSymbol, tokenBalance] = await Promise.all([
      this.publicClient.readContract({
        address: tokenAddress,
        abi: import_viem7.erc20Abi,
        functionName: "decimals",
        args: []
      }),
      this.publicClient.readContract({
        address: tokenAddress,
        abi: import_viem7.erc20Abi,
        functionName: "symbol",
        args: []
      }),
      this.publicClient.readContract({
        address: tokenAddress,
        abi: import_viem7.erc20Abi,
        functionName: "balanceOf",
        args: [this.walletClient.account?.address]
      })
    ]);
    console.log(
      `Current ${tokenSymbol} balance ${(0, import_viem7.formatUnits)(tokenBalance, tokenDecimals)}`
    );
    if ((0, import_viem7.parseUnits)(amount, tokenDecimals) > tokenBalance) {
      throw new Error(
        `Insufficient balance. Required: ${amount}, available: ${(0, import_viem7.formatUnits)(tokenBalance, tokenDecimals)}`
      );
    }
    const txHash = await this.walletClient.writeContract({
      address: tokenAddress,
      abi: import_viem7.erc20Abi,
      functionName: "transfer",
      args: [recipient, (0, import_viem7.parseUnits)(amount, tokenDecimals)],
      chain: this.walletClient.chain,
      account: this.walletClient.account
    });
    const { status } = await this.publicClient.waitForTransactionReceipt({
      hash: txHash
    });
    if (status !== "success") {
      throw new Error(`Error sending token. Hash: ${txHash}`);
    }
    console.log(`Token successfully sent. Hash: ${txHash}`);
    return txHash;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TokenSender,
  baseAccountTypePrefixes,
  compileContracts,
  conceroNetworks,
  config,
  createEnvAddressGetter,
  createEnvUpdater,
  createViemAccountGetter,
  createViemChain,
  createWalletGetter,
  err,
  ethersSignerCallContract,
  extractProxyAdminAddress,
  formatGas,
  genericDeploy,
  getActualGasData,
  getClients,
  getEnvVar,
  getFallbackClients,
  getGasParameters,
  getNetworkEnvKey,
  getNetworkKey,
  getTestClient,
  getTrezorDeployEnabled,
  getViemAccount,
  getWallet,
  localhostViemChain,
  log,
  mainnetNetworks,
  networkTypes,
  shorten,
  testnetNetworks,
  trezorDeployContract,
  trezorSendTx,
  trezorWriteContract,
  warn
});
//# sourceMappingURL=index.cjs.js.map
