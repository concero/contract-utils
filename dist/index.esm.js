// src/types/networkTypes.ts
var networkTypes = {
  mainnet: "mainnet",
  testnet: "testnet",
  localhost: "localhost"
};

// src/utils/createViemChain.ts
import { defineChain } from "viem";
function createViemChain(chainDefinition) {
  return defineChain({
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
import process2 from "process";

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
  const value = process2.env[key];
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

// src/utils/getWallet.ts
function getWallet(chainType, accountType, walletType) {
  let prefix;
  let walletKey;
  switch (accountType) {
    case "proxyDeployer":
      prefix = "PROXY_DEPLOYER";
      break;
    case "deployer":
      prefix = "DEPLOYER";
      break;
    case "operator":
      prefix = "OPERATOR";
      break;
    default:
      throw new Error(`Unknown account type: ${accountType}`);
  }
  switch (walletType) {
    case "privateKey":
      walletKey = "PRIVATE_KEY";
      break;
    case "address":
      walletKey = "ADDRESS";
      break;
    default:
      throw new Error(`Unknown wallet type: ${walletType}`);
  }
  const envKey = `${chainType.toUpperCase()}_${prefix}_${walletKey}`;
  const walletValue = process.env[envKey];
  if (!walletValue) {
    warn(`Missing env variable: ${envKey}`, "getEnvVar");
  }
  return walletValue;
}

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
import { execSync } from "child_process";
function compileContracts({ quiet = true, force = false }) {
  const packageManager = process.env["PACKAGE_MANAGER"] || "yarn";
  const command = `${packageManager} compile`;
  const args = [];
  if (quiet) args.push("--quiet");
  if (force) args.push("--force");
  execSync(`${command} ${args.join(" ")}`, { stdio: "inherit" });
}

// src/utils/localhostViemChain.ts
import { defineChain as defineChain2 } from "viem";
var localhostViemChain = defineChain2({
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
var hardhatViemChain = defineChain2({
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
import { ethers } from "ethers";
function extractProxyAdminAddress(receipt) {
  if (!receipt) return ethers.ZeroAddress;
  const adminChangedTopic = ethers.id("AdminChanged(address,address)");
  const adminChangedLog = receipt.logs.find((log2) => log2.topics[0] === adminChangedTopic);
  if (!adminChangedLog) return ethers.ZeroAddress;
  try {
    const abiCoder = ethers.AbiCoder.defaultAbiCoder();
    const [, newAdmin] = abiCoder.decode(["address", "address"], adminChangedLog.data);
    return newAdmin;
  } catch {
    return ethers.ZeroAddress;
  }
}

// src/utils/createEnvUpdater.ts
import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";
function createEnvUpdater(config2) {
  function updateEnvVariable(key, newValue, envFileName) {
    const filePath = path.join(config2.basePath, `.env.${envFileName}`);
    if (!existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const envContents = readFileSync(filePath, "utf8");
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
    writeFileSync(filePath, lines.join("\n"));
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
import {
  createPublicClient,
  createTestClient,
  createWalletClient,
  fallback,
  http,
  publicActions,
  walletActions,
  nonceManager
} from "viem";
import { privateKeyToAccount } from "viem/accounts";

// src/constants/conceroNetworks.ts
import mainnetChains from "@concero/concero-networks/output/chains.mainnet.json";
import testnetChains from "@concero/concero-networks/output/chains.testnet.json";
var mainnetProxyDeployerPK = getWallet(
  "mainnet",
  "proxyDeployer",
  "privateKey"
);
var testnetProxyDeployerPK = getWallet(
  "testnet",
  "proxyDeployer",
  "privateKey"
);
var mainnetDeployerPK = getWallet("mainnet", "deployer", "privateKey");
var testnetDeployerPK = getWallet("testnet", "deployer", "privateKey");
var trezorDeployEnabled = getTrezorDeployEnabled();
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
          ...!trezorDeployEnabled && { accounts: validAccounts },
          chainSelector: BigInt(chain.chainSelector),
          confirmations: 1,
          viemChain,
          ...trezorDeployEnabled && {
            trezorDerivationPaths: [
              [44, 60, 0, 0, 0],
              [44, 60, 0, 0, 1]
            ],
            trezorInsecureDerivation: true
          }
        }
      ];
    })
  );
}
var testnetNetworks = createExtendedNetworks(
  testnetChains,
  networkTypes.testnet,
  testnetAccounts
);
var mainnetNetworks = createExtendedNetworks(
  mainnetChains,
  networkTypes.mainnet,
  [mainnetDeployerPK, mainnetProxyDeployerPK]
);
var conceroNetworks = {
  ...testnetNetworks,
  ...mainnetNetworks
};

// src/utils/getViemClients.ts
function getClients(viemChain, url, account = privateKeyToAccount(
  `0x${process.env.TESTNET_DEPLOYER_PRIVATE_KEY}`
)) {
  const publicClient = createPublicClient({ transport: http(url), chain: viemChain });
  const walletClient = createWalletClient({ transport: http(url), chain: viemChain, account });
  return { walletClient, publicClient, account };
}
function getTestClient(account) {
  const testClient = createTestClient({
    chain: localhostViemChain,
    mode: "hardhat",
    transport: http(),
    account
  }).extend(publicActions).extend(walletActions);
  return testClient;
}
function getFallbackClients(chain, account) {
  if (!account) {
    switch (chain.type) {
      case "mainnet":
        account = privateKeyToAccount(`0x${process.env.MAINNET_DEPLOYER_PRIVATE_KEY}`);
        break;
      case "testnet":
        account = privateKeyToAccount(`0x${process.env.TESTNET_DEPLOYER_PRIVATE_KEY}`, {
          nonceManager
        });
        break;
      case "localhost":
        account = privateKeyToAccount(`0x${process.env.LOCALHOST_DEPLOYER_PRIVATE_KEY}`);
        break;
      default:
        throw new Error(`Unsupported chain type: ${chain.type}`);
    }
  }
  const { viemChain, name } = chain;
  if (!conceroNetworks[name].rpcUrls.length) {
    throw new Error(`No URLs configured for chain: ${name}`);
  }
  const transport = fallback(
    conceroNetworks[name].rpcUrls.map(
      (url) => http(url, {
        timeout: 1e4,
        retryCount: 1,
        retryDelay: 250,
        onFetchResponse: async (response) => {
          if (response.status >= 400) {
            throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
          }
        }
      })
    )
  );
  const publicClient = createPublicClient({ transport, chain: viemChain });
  const walletClient = createWalletClient({ transport, chain: viemChain, account });
  return { walletClient, publicClient, account };
}
function getViemAccount(chainType, accountType) {
  const privateKey = `0x${getWallet(chainType, accountType, "privateKey")}`;
  return privateKeyToAccount(privateKey, {
    nonceManager
  });
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

// src/deploy/GenericDeploy.ts
var genericDeploy = async ({ hre, contractName, txParams }, ...contractConstructorArgs) => {
  const [deployer] = await hre.ethers.getSigners();
  const chain = conceroNetworks[hre.network.name];
  log(
    `Deploy ${contractName} from address: ${await deployer.getAddress()}`,
    "contract deploy",
    chain.name
  );
  const contractFactory = await hre.ethers.getContractFactory(contractName, { libraries: txParams?.libraries });
  const deployOverrides = txParams?.gasLimit ? { gasLimit: txParams.gasLimit } : {};
  const deployTx = contractFactory.getDeployTransaction(
    ...contractConstructorArgs,
    deployOverrides
  );
  const isTrezorDeployEnabled = getTrezorDeployEnabled();
  if (deployTx.data && isTrezorDeployEnabled) {
    log(
      `${contractName} input data: ${deployTx.data} 
 size: ${(deployTx.data.length - 2) / 2}`,
      "bytecode",
      chain.name
    );
  }
  const contract = await contractFactory.deploy(...contractConstructorArgs, deployOverrides);
  const receipt = await contract.deploymentTransaction()?.wait();
  const deploymentAddress = await contract.getAddress();
  if (hre.tenderly) {
    await hre.tenderly.verify({ name: contractName, address: deploymentAddress });
  }
  log(
    `Deployed at: ${deploymentAddress}`,
    `deploy ${contractName}`,
    chain.name
  );
  return {
    hash: contract.deploymentTransaction()?.hash,
    address: deploymentAddress,
    chainName: chain.name,
    chainType: chain.type,
    proxyAdminAddress: extractProxyAdminAddress(receipt)
  };
};

// src/tokens/TokenSender.ts
import {
  erc20Abi,
  formatUnits,
  parseUnits
} from "viem";
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
        abi: erc20Abi,
        functionName: "decimals",
        args: []
      }),
      this.publicClient.readContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: "symbol",
        args: []
      }),
      this.publicClient.readContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: "balanceOf",
        args: [this.walletClient.account?.address]
      })
    ]);
    console.log(
      `Current ${tokenSymbol} balance ${formatUnits(tokenBalance, tokenDecimals)}`
    );
    if (parseUnits(amount, tokenDecimals) > tokenBalance) {
      throw new Error(
        `Insufficient balance. Required: ${amount}, available: ${formatUnits(tokenBalance, tokenDecimals)}`
      );
    }
    const txHash = await this.walletClient.writeContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: "transfer",
      args: [recipient, parseUnits(amount, tokenDecimals)],
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
export {
  TokenSender,
  compileContracts,
  conceroNetworks,
  config,
  createEnvAddressGetter,
  createEnvUpdater,
  createViemChain,
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
  warn
};
//# sourceMappingURL=index.esm.js.map
