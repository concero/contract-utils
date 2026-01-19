var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/viem/_esm/errors/version.js
var version;
var init_version = __esm({
  "node_modules/viem/_esm/errors/version.js"() {
    version = "2.24.2";
  }
});

// node_modules/viem/_esm/errors/base.js
function walk(err2, fn) {
  if (fn?.(err2))
    return err2;
  if (err2 && typeof err2 === "object" && "cause" in err2 && err2.cause !== void 0)
    return walk(err2.cause, fn);
  return fn ? null : err2;
}
var errorConfig, BaseError;
var init_base = __esm({
  "node_modules/viem/_esm/errors/base.js"() {
    init_version();
    errorConfig = {
      getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
      version: `viem@${version}`
    };
    BaseError = class _BaseError extends Error {
      constructor(shortMessage, args = {}) {
        const details = (() => {
          if (args.cause instanceof _BaseError)
            return args.cause.details;
          if (args.cause?.message)
            return args.cause.message;
          return args.details;
        })();
        const docsPath = (() => {
          if (args.cause instanceof _BaseError)
            return args.cause.docsPath || args.docsPath;
          return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
        const message = [
          shortMessage || "An error occurred.",
          "",
          ...args.metaMessages ? [...args.metaMessages, ""] : [],
          ...docsUrl ? [`Docs: ${docsUrl}`] : [],
          ...details ? [`Details: ${details}`] : [],
          ...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
        ].join("\n");
        super(message, args.cause ? { cause: args.cause } : void 0);
        Object.defineProperty(this, "details", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "docsPath", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "version", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "BaseError"
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version;
      }
      walk(fn) {
        return walk(this, fn);
      }
    };
  }
});

// node_modules/viem/_esm/utils/unit/formatUnits.js
function formatUnits(value, decimals) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
var init_formatUnits = __esm({
  "node_modules/viem/_esm/utils/unit/formatUnits.js"() {
  }
});

// node_modules/viem/_esm/constants/abis.js
var universalResolverErrors, universalResolverResolveAbi, universalResolverReverseAbi, erc20Abi;
var init_abis = __esm({
  "node_modules/viem/_esm/constants/abis.js"() {
    universalResolverErrors = [
      {
        inputs: [],
        name: "ResolverNotFound",
        type: "error"
      },
      {
        inputs: [],
        name: "ResolverWildcardNotSupported",
        type: "error"
      },
      {
        inputs: [],
        name: "ResolverNotContract",
        type: "error"
      },
      {
        inputs: [
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "ResolverError",
        type: "error"
      },
      {
        inputs: [
          {
            components: [
              {
                name: "status",
                type: "uint16"
              },
              {
                name: "message",
                type: "string"
              }
            ],
            name: "errors",
            type: "tuple[]"
          }
        ],
        name: "HttpError",
        type: "error"
      }
    ];
    universalResolverResolveAbi = [
      ...universalResolverErrors,
      {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes" },
          { name: "data", type: "bytes" }
        ],
        outputs: [
          { name: "", type: "bytes" },
          { name: "address", type: "address" }
        ]
      },
      {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [
          { name: "name", type: "bytes" },
          { name: "data", type: "bytes" },
          { name: "gateways", type: "string[]" }
        ],
        outputs: [
          { name: "", type: "bytes" },
          { name: "address", type: "address" }
        ]
      }
    ];
    universalResolverReverseAbi = [
      ...universalResolverErrors,
      {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{ type: "bytes", name: "reverseName" }],
        outputs: [
          { type: "string", name: "resolvedName" },
          { type: "address", name: "resolvedAddress" },
          { type: "address", name: "reverseResolver" },
          { type: "address", name: "resolver" }
        ]
      },
      {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [
          { type: "bytes", name: "reverseName" },
          { type: "string[]", name: "gateways" }
        ],
        outputs: [
          { type: "string", name: "resolvedName" },
          { type: "address", name: "resolvedAddress" },
          { type: "address", name: "reverseResolver" },
          { type: "address", name: "resolver" }
        ]
      }
    ];
    erc20Abi = [
      {
        type: "event",
        name: "Approval",
        inputs: [
          {
            indexed: true,
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            name: "spender",
            type: "address"
          },
          {
            indexed: false,
            name: "value",
            type: "uint256"
          }
        ]
      },
      {
        type: "event",
        name: "Transfer",
        inputs: [
          {
            indexed: true,
            name: "from",
            type: "address"
          },
          {
            indexed: true,
            name: "to",
            type: "address"
          },
          {
            indexed: false,
            name: "value",
            type: "uint256"
          }
        ]
      },
      {
        type: "function",
        name: "allowance",
        stateMutability: "view",
        inputs: [
          {
            name: "owner",
            type: "address"
          },
          {
            name: "spender",
            type: "address"
          }
        ],
        outputs: [
          {
            type: "uint256"
          }
        ]
      },
      {
        type: "function",
        name: "approve",
        stateMutability: "nonpayable",
        inputs: [
          {
            name: "spender",
            type: "address"
          },
          {
            name: "amount",
            type: "uint256"
          }
        ],
        outputs: [
          {
            type: "bool"
          }
        ]
      },
      {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [
          {
            name: "account",
            type: "address"
          }
        ],
        outputs: [
          {
            type: "uint256"
          }
        ]
      },
      {
        type: "function",
        name: "decimals",
        stateMutability: "view",
        inputs: [],
        outputs: [
          {
            type: "uint8"
          }
        ]
      },
      {
        type: "function",
        name: "name",
        stateMutability: "view",
        inputs: [],
        outputs: [
          {
            type: "string"
          }
        ]
      },
      {
        type: "function",
        name: "symbol",
        stateMutability: "view",
        inputs: [],
        outputs: [
          {
            type: "string"
          }
        ]
      },
      {
        type: "function",
        name: "totalSupply",
        stateMutability: "view",
        inputs: [],
        outputs: [
          {
            type: "uint256"
          }
        ]
      },
      {
        type: "function",
        name: "transfer",
        stateMutability: "nonpayable",
        inputs: [
          {
            name: "recipient",
            type: "address"
          },
          {
            name: "amount",
            type: "uint256"
          }
        ],
        outputs: [
          {
            type: "bool"
          }
        ]
      },
      {
        type: "function",
        name: "transferFrom",
        stateMutability: "nonpayable",
        inputs: [
          {
            name: "sender",
            type: "address"
          },
          {
            name: "recipient",
            type: "address"
          },
          {
            name: "amount",
            type: "uint256"
          }
        ],
        outputs: [
          {
            type: "bool"
          }
        ]
      }
    ];
  }
});

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

// node_modules/@concero/concero-networks/output/chains.mainnet.json
var chains_mainnet_default = {
  "1": {
    id: "1",
    chainSelector: 1,
    name: "ethereum",
    rpcUrls: [
      "https://cloudflare-eth.com",
      "https://eth1.lava.build",
      "https://mainnet.gateway.tenderly.co",
      "https://eth.drpc.org",
      "https://gateway.tenderly.co/public/mainnet",
      "https://go.getblock.io/aefd01aa907c4805ba3c00a9e5b48c6b",
      "https://0xrpc.io/eth",
      "https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
      "https://rpc.eth.gateway.fm",
      "https://1rpc.io/eth",
      "https://eth-mainnet.public.blastapi.io",
      "https://ethereum-rpc.publicnode.com",
      "https://rpc.mevblocker.io/fast",
      "https://eth.meowrpc.com",
      "https://eth.api.pocket.network",
      "https://ethereum-public.nodies.app",
      "https://rpc.flashbots.net/fast",
      "https://ethereum-json-rpc.stakely.io",
      "https://eth.llamarpc.com",
      "https://eth.rpc.blxrbdn.com",
      "https://ethereum.public.blockpi.network/v1/rpc/public",
      "https://ethereum-mainnet.gateway.tatum.io",
      "https://eth.blockrazor.xyz",
      "https://api-ethereum-mainnet-reth.n.dwellir.com/2ccf18bf-2916-4198-8856-42172854353c",
      "https://eth.merkle.io",
      "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
      "https://rpc.flashbots.net",
      "https://rpc.mevblocker.io/fullprivacy",
      "https://rpc.mevblocker.io/noreverts",
      "https://rpc.fullsend.to",
      "https://eth.api.onfinality.io/public",
      "https://public-eth.nownodes.io",
      "https://openapi.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet",
      "https://core.gashawk.io/rpc",
      "https://rpc.mevblocker.io",
      "https://ethereum.rpc.subquery.network/public"
    ],
    nativeCurrency: {
      name: "Ethereum",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Etherscan",
        url: "https://etherscan.io",
        apiUrl: "https://api.etherscan.io/api"
      }
    ],
    finalityConfirmations: 75,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "10": {
    id: "10",
    chainSelector: 10,
    name: "optimism",
    rpcUrls: [
      "https://optimism.drpc.org",
      "https://go.getblock.io/e8a75f8dcf614861becfbcb185be6eb4",
      "https://gateway.tenderly.co/public/optimism",
      "https://mainnet.optimism.io",
      "https://1rpc.io/op",
      "https://optimism.gateway.tenderly.co",
      "https://api-optimism-mainnet-archive.n.dwellir.com/2ccf18bf-2916-4198-8856-42172854353c",
      "https://optimism-rpc.publicnode.com",
      "https://optimism-public.nodies.app",
      "https://public-op-mainnet.fastnode.io",
      "https://optimism-mainnet.gateway.tatum.io",
      "https://optimism.api.onfinality.io/public",
      "https://optimism.public.blockpi.network/v1/rpc/public",
      "https://optimism.rpc.subquery.network/public"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Optimism Explorer",
        url: "https://optimistic.etherscan.io",
        apiUrl: "https://api-optimistic.etherscan.io/api"
      }
    ],
    finalityConfirmations: 50,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "137": {
    id: "137",
    chainSelector: 137,
    name: "polygon",
    rpcUrls: [
      "https://polygon.drpc.org",
      "https://gateway.tenderly.co/public/polygon",
      "https://polygon.lava.build",
      "https://go.getblock.io/02667b699f05444ab2c64f9bff28f027",
      "https://polygon-mainnet.gateway.tatum.io",
      "https://polygon-rpc.com",
      "https://1rpc.io/matic",
      "https://polygon.meowrpc.com",
      "https://polygon-bor-rpc.publicnode.com",
      "https://polygon-public.nodies.app",
      "https://polygon.gateway.tenderly.co",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://polygon-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
      "https://polygon.rpc.subquery.network/public",
      "https://polygon.api.onfinality.io/public",
      "https://poly.api.pocket.network"
    ],
    nativeCurrency: {
      name: "POL",
      decimals: 18,
      symbol: "POL"
    },
    blockExplorers: [
      {
        name: "PolygonScan",
        url: "https://polygonscan.com",
        apiUrl: "https://api.polygonscan.com/api"
      }
    ],
    finalityConfirmations: 128,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "8453": {
    id: "8453",
    chainSelector: 8453,
    name: "base",
    rpcUrls: [
      "https://base.drpc.org",
      "https://base.lava.build",
      "https://mainnet.base.org",
      "https://gateway.tenderly.co/public/base",
      "https://base.meowrpc.com",
      "https://base.gateway.tenderly.co",
      "https://developer-access-mainnet.base.org",
      "https://1rpc.io/base",
      "https://base-rpc.publicnode.com",
      "https://base-public.nodies.app",
      "https://base.public.blockpi.network/v1/rpc/public",
      "https://base-mainnet.public.blastapi.io",
      "https://base.api.onfinality.io/public",
      "https://base.rpc.blxrbdn.com",
      "https://base.api.pocket.network",
      "https://base.llamarpc.com",
      "https://api-base-mainnet-archive.n.dwellir.com/2ccf18bf-2916-4198-8856-42172854353c",
      "https://base.rpc.subquery.network/public"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Basescan",
        url: "https://basescan.org",
        apiUrl: "https://api.basescan.org/api"
      }
    ],
    finalityConfirmations: 50,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "42161": {
    id: "42161",
    chainSelector: 42161,
    name: "arbitrum",
    rpcUrls: [
      "https://arbitrum.drpc.org",
      "https://api-arbitrum-mainnet-archive.n.dwellir.com/2ccf18bf-2916-4198-8856-42172854353c",
      "https://arb1.lava.build",
      "https://1rpc.io/arb",
      "https://arbitrum-one-rpc.publicnode.com",
      "https://arbitrum-one-public.nodies.app",
      "https://arbitrum.gateway.tenderly.co",
      "https://arbitrum-one.public.blastapi.io",
      "https://arbitrum.api.onfinality.io/public",
      "https://arbitrum.meowrpc.com",
      "https://arbitrum.public.blockpi.network/v1/rpc/public",
      "https://arb1.arbitrum.io/rpc",
      "https://public-arb-mainnet.fastnode.io",
      "https://arbitrum.rpc.subquery.network/public"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Arbiscan",
        url: "https://arbiscan.io",
        apiUrl: "https://api.arbiscan.io/api"
      }
    ],
    finalityConfirmations: 4080,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "43114": {
    id: "43114",
    chainSelector: 43114,
    name: "avalanche",
    rpcUrls: [
      "https://api.avax.network/ext/bc/C/rpc",
      "https://avalanche-mainnet.gateway.tenderly.co",
      "https://avalanche.drpc.org",
      "https://avax.api.pocket.network",
      "https://avalanche-c-chain-rpc.publicnode.com",
      "https://1rpc.io/avax/c",
      "https://avalanche-public.nodies.app/ext/bc/C/rpc",
      "https://avax.meowrpc.com",
      "https://avalanche.api.onfinality.io/public/ext/bc/C/rpc",
      "https://spectrum-01.simplystaking.xyz/avalanche-mn-rpc/ext/bc/C/rpc"
    ],
    nativeCurrency: {
      name: "Avalanche",
      decimals: 18,
      symbol: "AVAX"
    },
    blockExplorers: [
      {
        name: "SnowTrace",
        url: "https://snowtrace.io",
        apiUrl: "https://api.snowtrace.io/api"
      }
    ],
    finalityConfirmations: 1,
    minBlockConfirmations: 1,
    deployments: {}
  }
};

// node_modules/@concero/concero-networks/output/chains.testnet.json
var chains_testnet_default = {
  "81": {
    id: "81",
    isTestnet: true,
    chainSelector: 81,
    name: "astarShibuya",
    rpcUrls: [
      "https://evm.shibuya.astar.network",
      "https://evm.shibuya.astar.network",
      "https://shibuya.public.blastapi.io",
      "https://shibuya-rpc.dwellir.com"
    ],
    nativeCurrency: {
      name: "Astar",
      decimals: 18,
      symbol: "ASTR"
    },
    blockExplorers: [
      {
        name: "Subscan",
        url: "https://shibuya.subscan.io",
        apiUrl: "https://shibuya.subscan.io/api"
      }
    ],
    finalityConfirmations: 6,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "97": {
    id: "97",
    isTestnet: true,
    chainSelector: 97,
    name: "bnbTestnet",
    rpcUrls: [
      "https://bsc-testnet.drpc.org",
      "https://bsc-testnet-rpc.publicnode.com",
      "https://data-seed-prebsc-2-s2.bnbchain.org:8545",
      "https://data-seed-prebsc-1-s2.bnbchain.org:8545",
      "https://data-seed-prebsc-2-s3.bnbchain.org:8545",
      "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      "https://data-seed-prebsc-2-s1.bnbchain.org:8545",
      "https://data-seed-prebsc-1-s3.bnbchain.org:8545",
      "https://bnb-testnet.api.onfinality.io/public"
    ],
    nativeCurrency: {
      name: "BNB",
      decimals: 18,
      symbol: "tBNB"
    },
    blockExplorers: [
      {
        name: "BscScan",
        url: "https://testnet.bscscan.com",
        apiUrl: "https://api-testnet.bscscan.com/api"
      }
    ],
    finalityConfirmations: 7,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xf6BBdC1fD89E554639D7A683909338802B05F160",
      relayerLib: "0x3a4EA7fd0CeA70a4B2Cf72c5AC966225C98eE48d",
      validatorLib: "0xAEBaacfa9CaC6B8486Ae77843728c863c909E7d0"
    }
  },
  "133": {
    id: "133",
    isTestnet: true,
    chainSelector: 133,
    name: "hashkeyTestnet",
    rpcUrls: [],
    nativeCurrency: {
      name: "HashKey EcoPoints",
      decimals: 18,
      symbol: "HSK"
    },
    blockExplorers: [
      {
        name: "Hashkey Explorer",
        url: "https://testnet.hashkeyscan.io",
        apiUrl: "https://testnet.hashkeyscan.io/api"
      }
    ],
    finalityConfirmations: 1800,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "157": {
    id: "157",
    isTestnet: true,
    chainSelector: 157,
    name: "shibariumPuppynet",
    rpcUrls: [
      "https://puppynet.shibrpc.com"
    ],
    nativeCurrency: {
      name: "Bone",
      decimals: 18,
      symbol: "BONE"
    },
    blockExplorers: [
      {
        name: "Puppyscan",
        url: "https://puppyscan.shib.io",
        apiUrl: "https://puppyscan.shib.io/api"
      }
    ],
    finalityConfirmations: 60,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xea73Bc856EdD980912Fb8FE4CFC7bba52D980F6A",
      relayerLib: "0x9900a9E38E8695eE9109962b9f4671cF977c265a",
      validatorLib: "0x39f311124745064935cB196AeE2a950cbbC11336"
    }
  },
  "195": {
    id: "195",
    isTestnet: true,
    chainSelector: 195,
    name: "xlayerSepolia",
    rpcUrls: [],
    nativeCurrency: {
      name: "OKB",
      decimals: 18,
      symbol: "OKB"
    },
    blockExplorers: [
      {
        name: "X Layer Explorer",
        url: "https://testnet-explorer.xlayer.tech",
        apiUrl: "https://testnet-explorer.xlayer.tech/api"
      }
    ],
    finalityConfirmations: 3600,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "296": {
    id: "296",
    isTestnet: true,
    chainSelector: 296,
    name: "hederaTestnet",
    rpcUrls: [
      "https://testnet.hashio.io/api",
      "https://296.rpc.thirdweb.com"
    ],
    nativeCurrency: {
      name: "HBAR",
      decimals: 18,
      symbol: "HBAR"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "300": {
    id: "300",
    isTestnet: true,
    chainSelector: 300,
    name: "zksyncSepolia",
    rpcUrls: [
      "https://zksync-sepolia.drpc.org",
      "https://rpc.ankr.com/zksync_era_sepolia",
      "https://sepolia.era.zksync.dev"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    finalityConfirmations: 1200,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xBd5EC2962802123f6D8d0092dC485C98e23D1394",
      relayerLib: "0x06942a1E6A73069a58306d9E154051b85b32D071",
      validatorLib: "0xe277f7afA46291d4c729a184D51D78ae598d54b1"
    }
  },
  "338": {
    id: "338",
    isTestnet: true,
    chainSelector: 338,
    name: "cronosTestnet",
    rpcUrls: [
      "https://cro-testnet.gateway.tatum.io",
      "https://cronos-testnet.drpc.org",
      "https://evm-t3.cronos.org"
    ],
    nativeCurrency: {
      name: "CRO",
      decimals: 18,
      symbol: "tCRO"
    },
    blockExplorers: [
      {
        name: "Cronos Explorer",
        url: "https://testnet.cronoscan.com",
        apiUrl: "https://api-testnet.cronoscan.com/api"
      }
    ],
    finalityConfirmations: 2,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "545": {
    id: "545",
    isTestnet: true,
    chainSelector: 545,
    name: "flowTestnet",
    rpcUrls: [
      "https://testnet.evm.nodes.onflow.org"
    ],
    nativeCurrency: {
      name: "Flow",
      decimals: 18,
      symbol: "FLOW"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xf6BBdC1fD89E554639D7A683909338802B05F160",
      relayerLib: "0x3a4EA7fd0CeA70a4B2Cf72c5AC966225C98eE48d",
      validatorLib: "0xAEBaacfa9CaC6B8486Ae77843728c863c909E7d0"
    }
  },
  "919": {
    id: "919",
    isTestnet: true,
    chainSelector: 919,
    name: "modeTestnet",
    rpcUrls: [
      "https://mode-testnet.drpc.org",
      "https://sepolia.mode.network"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Mode Explorer",
        url: "https://sepolia.explorer.mode.network",
        apiUrl: "https://sepolia.explorer.mode.network/api"
      }
    ],
    finalityConfirmations: 1110,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "943": {
    id: "943",
    isTestnet: true,
    chainSelector: 943,
    name: "pulsechainTestnet",
    rpcUrls: [
      "https://pulsechain-testnet-rpc.publicnode.com",
      "https://rpc-testnet-pulsechain.g4mm4.io",
      "https://rpc.v4.testnet.pulsechain.com"
    ],
    nativeCurrency: {
      name: "V4 Pulse",
      decimals: 18,
      symbol: "v4PLS"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xea73Bc856EdD980912Fb8FE4CFC7bba52D980F6A",
      relayerLib: "0x9900a9E38E8695eE9109962b9f4671cF977c265a",
      validatorLib: "0x39f311124745064935cB196AeE2a950cbbC11336"
    }
  },
  "1001": {
    id: "1001",
    isTestnet: true,
    chainSelector: 1001,
    name: "kaiaKairos",
    rpcUrls: [
      "https://klaytn-baobab.drpc.org",
      "https://kaia-kairos.blockpi.network/v1/rpc/public",
      "https://rpc.ankr.com/kaia_testnet",
      "https://public-en-kairos.node.kaia.io"
    ],
    nativeCurrency: {
      name: "KAIA",
      decimals: 18,
      symbol: "KAIA"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1112": {
    id: "1112",
    isTestnet: true,
    chainSelector: 1112,
    name: "wemixTestnet",
    rpcUrls: [
      "https://wemix-testnet.drpc.org",
      "https://api.test.wemix.com"
    ],
    nativeCurrency: {
      name: "WEMIX",
      decimals: 18,
      symbol: "tWEMIX"
    },
    blockExplorers: [],
    finalityConfirmations: 2,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1114": {
    id: "1114",
    isTestnet: true,
    chainSelector: 1114,
    name: "coreTestnet",
    rpcUrls: [
      "https://rpc.test2.btcs.network"
    ],
    nativeCurrency: {
      name: "tCORE2",
      decimals: 18,
      symbol: "tCORE2"
    },
    blockExplorers: [
      {
        name: "CoreScan",
        url: "https://scan.test.btcs.network",
        apiUrl: "https://scan.test.btcs.network/api"
      }
    ],
    finalityConfirmations: 7,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x5E3607995Cc65dB53A5A20725237eDb9f91d5CE5",
      relayerLib: "0x54B8d67AA64CF8A59F604cA6e98c643C64920b03",
      validatorLib: "0x6EDCB27Aaf312938FA3C1C631C18A0635bD34E1a"
    }
  },
  "1123": {
    id: "1123",
    isTestnet: true,
    finalityTagEnabled: true,
    chainSelector: 1123,
    name: "b2Testnet",
    rpcUrls: [
      "https://rpc.ankr.com/b2_testnet"
    ],
    nativeCurrency: {
      name: "Bitcoin",
      decimals: 18,
      symbol: "BTC"
    },
    blockExplorers: [],
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1174": {
    id: "1174",
    isTestnet: true,
    chainSelector: 1174,
    name: "litheumTestnet",
    rpcUrls: [
      "https://testnet.litheum.com"
    ],
    nativeCurrency: {
      name: "LTH",
      decimals: 18,
      symbol: "LTH"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1270": {
    id: "1270",
    isTestnet: true,
    chainSelector: 1270,
    name: "irysTestnet",
    rpcUrls: [
      "https://testnet-rpc.irys.xyz/v1/execution-rpc",
      "testnet-rpc.irys.xyz"
    ],
    nativeCurrency: {
      name: "mIRYS",
      decimals: 18,
      symbol: "mIRYS"
    },
    blockExplorers: [],
    finalityConfirmations: 6,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1301": {
    id: "1301",
    isTestnet: true,
    chainSelector: 1301,
    name: "unichainSepolia",
    rpcUrls: [
      "https://unichain-sepolia.drpc.org",
      "https://unichain-sepolia-rpc.publicnode.com",
      "https://unichain-sepolia.api.onfinality.io/public",
      "https://sepolia.unichain.org"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Unichain Explorer",
        url: "https://sepolia-explorer.unichain.network",
        apiUrl: "https://sepolia-explorer.unichain.network/api"
      }
    ],
    finalityConfirmations: 1440,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x5E3607995Cc65dB53A5A20725237eDb9f91d5CE5",
      relayerLib: "0x54B8d67AA64CF8A59F604cA6e98c643C64920b03",
      validatorLib: "0x6EDCB27Aaf312938FA3C1C631C18A0635bD34E1a"
    }
  },
  "1328": {
    id: "1328",
    isTestnet: true,
    chainSelector: 1328,
    name: "seiTestnet",
    rpcUrls: [
      "https://sei-testnet.drpc.org",
      "https://sei-testnet-public.nodies.app",
      "https://evm-rpc-testnet.sei-apis.com"
    ],
    nativeCurrency: {
      name: "Sei",
      decimals: 18,
      symbol: "SEI"
    },
    blockExplorers: [
      {
        name: "Sei Explorer",
        url: "https://seitrace.com",
        apiUrl: "https://seitrace.com/api"
      }
    ],
    finalityConfirmations: 3,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x122947C8c3529DCa006aeE65832D3C3fED6bf3C0",
      relayerLib: "0xe965dEBDfa6365CFb9e643ccdCBADE424a2eC381",
      validatorLib: "0xB708D151D18e5aB3506934B39375D00EE1e0C882"
    }
  },
  "1946": {
    id: "1946",
    isTestnet: true,
    chainSelector: 1946,
    name: "soneiumMinato",
    rpcUrls: [
      "https://soneium-minato.drpc.org",
      "https://rpc.minato.soneium.org"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Soneium Explorer",
        url: "https://minato-explorer.soneium.com",
        apiUrl: "https://minato-explorer.soneium.com/api"
      }
    ],
    finalityConfirmations: 810,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "2021": {
    id: "2021",
    isTestnet: true,
    chainSelector: 2021,
    name: "roninSaigon",
    rpcUrls: [
      "https://saigon-testnet.roninchain.com/rpc",
      "https://saigon-testnet.roninchain.com/rpc"
    ],
    nativeCurrency: {
      name: "RON",
      decimals: 18,
      symbol: "RON"
    },
    blockExplorers: [
      {
        name: "Ronin Explorer",
        url: "https://saigon-explorer.roninchain.com",
        apiUrl: "https://saigon-explorer.roninchain.com/api"
      }
    ],
    finalityConfirmations: 4,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xea73Bc856EdD980912Fb8FE4CFC7bba52D980F6A",
      relayerLib: "0x9900a9E38E8695eE9109962b9f4671cF977c265a",
      validatorLib: "0x39f311124745064935cB196AeE2a950cbbC11336"
    }
  },
  "2221": {
    id: "2221",
    isTestnet: true,
    chainSelector: 2221,
    name: "kavaTestnet",
    rpcUrls: [
      "https://kava-testnet.drpc.org",
      "https://evm.testnet.kava.io"
    ],
    nativeCurrency: {
      name: "Kava",
      decimals: 18,
      symbol: "KAVA"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "2522": {
    id: "2522",
    isTestnet: true,
    chainSelector: 2522,
    name: "fraxtalHolesky",
    rpcUrls: [],
    nativeCurrency: {
      name: "FRAX",
      decimals: 18,
      symbol: "FRAX"
    },
    blockExplorers: [],
    finalityConfirmations: 900,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "2810": {
    id: "2810",
    isTestnet: true,
    chainSelector: 2810,
    name: "morphHolesky",
    rpcUrls: [],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "3636": {
    id: "3636",
    isTestnet: true,
    chainSelector: 3636,
    name: "botanixTestnet",
    rpcUrls: [
      "https://rpc.ankr.com/botanix_testnet",
      "https://node.botanixlabs.dev"
    ],
    nativeCurrency: {
      name: "Botanix",
      decimals: 18,
      symbol: "BTC"
    },
    blockExplorers: [
      {
        name: "Botanix Explorer",
        url: "https://testnet-explorer.botanixlabs.xyz",
        apiUrl: "https://testnet-explorer.botanixlabs.xyz/api"
      }
    ],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "4801": {
    id: "4801",
    isTestnet: true,
    chainSelector: 4801,
    name: "worldchainTestnet",
    rpcUrls: [
      "https://worldchain-sepolia.drpc.org",
      "https://worldchain-sepolia.g.alchemy.com/public",
      "https://worldchain-sepolia.gateway.tenderly.co",
      "https://4801.rpc.thirdweb.com"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    finalityConfirmations: 1200,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xea73Bc856EdD980912Fb8FE4CFC7bba52D980F6A",
      relayerLib: "0x9900a9E38E8695eE9109962b9f4671cF977c265a",
      validatorLib: "0x39f311124745064935cB196AeE2a950cbbC11336"
    }
  },
  "5003": {
    id: "5003",
    isTestnet: true,
    chainSelector: 5003,
    name: "mantleSepolia",
    rpcUrls: [
      "https://mantle-sepolia.drpc.org",
      "https://rpc.sepolia.mantle.xyz"
    ],
    nativeCurrency: {
      name: "MNT",
      decimals: 18,
      symbol: "MNT"
    },
    blockExplorers: [
      {
        name: "Mantle Explorer",
        url: "https://explorer.sepolia.mantle.xyz",
        apiUrl: "https://explorer.sepolia.mantle.xyz/api"
      }
    ],
    finalityConfirmations: 840,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "5124": {
    id: "5124",
    isTestnet: true,
    chainSelector: 5124,
    name: "seismicDevnet",
    rpcUrls: [
      "https://node-2.seismicdev.net/rpc"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "5611": {
    id: "5611",
    isTestnet: true,
    chainSelector: 5611,
    name: "opbnbTestnet",
    rpcUrls: [
      "https://opbnb-testnet.drpc.org",
      "https://opbnb-testnet-rpc.publicnode.com",
      "https://opbnb-testnet-rpc.bnbchain.org",
      "https://opbnb-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5",
      "https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3"
    ],
    nativeCurrency: {
      name: "tBNB",
      decimals: 18,
      symbol: "tBNB"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "6342": {
    id: "6342",
    isTestnet: true,
    chainSelector: 6342,
    name: "megaethTestnet",
    rpcUrls: [],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "MegaEth Explorer",
        url: "https://explorer-testnet.megaeth.io",
        apiUrl: "https://explorer-testnet.megaeth.io/api"
      }
    ],
    finalityConfirmations: 900,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "8408": {
    id: "8408",
    isTestnet: true,
    chainSelector: 8408,
    name: "zenchainTestnet",
    rpcUrls: [
      "https://zenchain-testnet.api.onfinality.io/public"
    ],
    nativeCurrency: {
      name: "ZTC",
      decimals: 18,
      symbol: "ZTC"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "10143": {
    id: "10143",
    isTestnet: true,
    chainSelector: 10143,
    name: "monadTestnet",
    rpcUrls: [
      "https://monad-testnet.drpc.org",
      "https://rpc.ankr.com/monad_testnet",
      "https://testnet-rpc.monad.xyz",
      "https://rpc-testnet.monadinfra.com",
      "https://monad-testnet.api.onfinality.io/public"
    ],
    nativeCurrency: {
      name: "Testnet MON Token",
      decimals: 18,
      symbol: "MON"
    },
    blockExplorers: [
      {
        name: "Monad Explorer",
        url: "https://explorer.testnet.monad.xyz",
        apiUrl: "https://explorer.testnet.monad.xyz/api"
      }
    ],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x3E2Ee768D9fADdd3673a69ED4d0D1d9147FA1054",
      relayerLib: "0x9900a9E38E8695eE9109962b9f4671cF977c265a",
      validatorLib: "0x39f311124745064935cB196AeE2a950cbbC11336"
    }
  },
  "10200": {
    id: "10200",
    isTestnet: true,
    chainSelector: 10200,
    name: "gnosisChiado",
    rpcUrls: [
      "https://gnosis-chiado.drpc.org",
      "https://rpc.chiadochain.net",
      "https://gnosis-chiado-rpc.publicnode.com",
      "https://rpc.chiado.gnosis.gateway.fm"
    ],
    nativeCurrency: {
      name: "Gnosis",
      decimals: 18,
      symbol: "xDAI"
    },
    blockExplorers: [
      {
        name: "Blockscout",
        url: "https://gnosis-chiado.blockscout.com",
        apiUrl: "https://gnosis-chiado.blockscout.com/api"
      }
    ],
    finalityConfirmations: 35,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x5E3607995Cc65dB53A5A20725237eDb9f91d5CE5",
      relayerLib: "0x54B8d67AA64CF8A59F604cA6e98c643C64920b03",
      validatorLib: "0x6EDCB27Aaf312938FA3C1C631C18A0635bD34E1a"
    }
  },
  "11124": {
    id: "11124",
    isTestnet: true,
    finalityTagEnabled: true,
    chainSelector: 11124,
    name: "abstractSepolia",
    rpcUrls: [
      "https://abstract-sepolia.drpc.org",
      "https://api.testnet.abs.xyz"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    minBlockConfirmations: 1,
    deployments: {}
  },
  "18880": {
    id: "18880",
    isTestnet: true,
    chainSelector: 18880,
    name: "expchainTestnet",
    rpcUrls: [
      "https://rpc1-testnet.expchain.ai",
      "https://expchain.polyhedra.network/rpc1-testnet",
      "https://expchain.polyhedra.network/rpc0-testnet",
      "https://expchain.polyhedra.network/rpc0-testnet",
      "https://expchain.polyhedra.network/rpc1-testnet"
    ],
    nativeCurrency: {
      name: "tZKJ",
      decimals: 18,
      symbol: "tZKJ"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "23295": {
    id: "23295",
    isTestnet: true,
    chainSelector: 23295,
    name: "oasissapphireTestnet",
    rpcUrls: [
      "https://testnet.sapphire.oasis.io"
    ],
    nativeCurrency: {
      name: "Sapphire Test Rose",
      decimals: 18,
      symbol: "TEST"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xcc9D0438ac3b90fB8291f4f3C1c420E215f36585",
      relayerLib: "0x8510C780097cA53aeF8e3527a5107C4629b21f0C",
      validatorLib: "0xb31EED4695De3eCE4381a40fA638d9a63904882b"
    }
  },
  "33111": {
    id: "33111",
    isTestnet: true,
    finalityTagEnabled: true,
    chainSelector: 33111,
    name: "apechainCurtis",
    rpcUrls: [
      "https://apechain-curtis.drpc.org",
      "https://curtis.rpc.caldera.xyz/http",
      "https://rpc.curtis.apechain.com"
    ],
    nativeCurrency: {
      name: "APE",
      decimals: 18,
      symbol: "APE"
    },
    blockExplorers: [
      {
        name: "Apechain Explorer",
        url: "https://curtis-explorer.apechain.io",
        apiUrl: "https://curtis-explorer.apechain.io/api"
      }
    ],
    minBlockConfirmations: 1,
    deployments: {}
  },
  "37111": {
    id: "37111",
    isTestnet: true,
    chainSelector: 37111,
    name: "lensSepolia",
    rpcUrls: [
      "https://rpc.testnet.lens.dev",
      "https://lens-testnet.drpc.org"
    ],
    nativeCurrency: {
      name: "GRASS",
      decimals: 18,
      symbol: "GRASS"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "43113": {
    id: "43113",
    isTestnet: true,
    finalityTagEnabled: true,
    chainSelector: 43113,
    name: "avalancheFuji",
    rpcUrls: [
      "https://api.avax-test.network/ext/bc/C/rpc",
      "https://avalanche-fuji.drpc.org",
      "https://avalanche-fuji-c-chain-rpc.publicnode.com"
    ],
    nativeCurrency: {
      name: "Avalanche Fuji",
      decimals: 18,
      symbol: "AVAX"
    },
    blockExplorers: [
      {
        name: "Snowtrace",
        url: "https://testnet.snowtrace.io",
        apiUrl: "https://api-testnet.snowtrace.io/api"
      }
    ],
    minBlockConfirmations: 1,
    deployments: {
      router: "0xe965dEBDfa6365CFb9e643ccdCBADE424a2eC381",
      relayerLib: "0x6EDCB27Aaf312938FA3C1C631C18A0635bD34E1a",
      validatorLib: "0x246892c38a2314c30E56490ADf1bcf3470DCAE6A"
    }
  },
  "44787": {
    id: "44787",
    isTestnet: true,
    chainSelector: 44787,
    name: "celoAlfajores",
    rpcUrls: [],
    nativeCurrency: {
      name: "CELO",
      decimals: 18,
      symbol: "A-CELO"
    },
    blockExplorers: [
      {
        name: "Celoscan",
        url: "https://alfajores.celoscan.io",
        apiUrl: "https://api-alfajores.celoscan.io/api"
      }
    ],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "48899": {
    id: "48899",
    isTestnet: true,
    chainSelector: 48899,
    name: "zircuitTestnet",
    rpcUrls: [
      "https://testnet.zircuit.com",
      "https://zircuit1-testnet.p2pify.com"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Zircuit Explorer",
        url: "https://explorer.zircuit.com",
        apiUrl: "https://explorer.zircuit.com/api"
      }
    ],
    finalityConfirmations: 630,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "57054": {
    id: "57054",
    isTestnet: true,
    chainSelector: 57054,
    name: "sonicBlaze",
    rpcUrls: [
      "https://sonic-testnet.drpc.org",
      "https://sonic-blaze-rpc.publicnode.com",
      "https://rpc.blaze.soniclabs.com"
    ],
    nativeCurrency: {
      name: "S",
      decimals: 18,
      symbol: "S"
    },
    blockExplorers: [
      {
        name: "Sonic Explorer",
        url: "https://explorer-testnet.sonic.guru",
        apiUrl: "https://explorer-testnet.sonic.guru/api"
      }
    ],
    finalityConfirmations: 10,
    minBlockConfirmations: 1,
    deployments: {
      router: "0xAEBaacfa9CaC6B8486Ae77843728c863c909E7d0",
      relayerLib: "0x13187bb1d2f100F84770a848A1374bf745Ea4cF6",
      validatorLib: "0x90D7e742746Abf405036aA21981C835F3E842DA4"
    }
  },
  "59141": {
    id: "59141",
    isTestnet: true,
    chainSelector: 59141,
    name: "lineaSepolia",
    rpcUrls: [
      "https://linea-sepolia.drpc.org",
      "https://linea-sepolia-rpc.publicnode.com",
      "https://rpc.sepolia.linea.build"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Linea Explorer",
        url: "https://sepolia.lineascan.build",
        apiUrl: "https://api-sepolia.lineascan.build/api"
      }
    ],
    finalityConfirmations: 600,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "59902": {
    id: "59902",
    isTestnet: true,
    chainSelector: 59902,
    name: "metisSepolia",
    rpcUrls: [
      "https://metis-sepolia.gateway.tenderly.co",
      "https://metis-sepolia-rpc.publicnode.com",
      "https://sepolia.metisdevops.link"
    ],
    nativeCurrency: {
      name: "tMETIS",
      decimals: 18,
      symbol: "tMETIS"
    },
    blockExplorers: [],
    finalityConfirmations: 360,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "80002": {
    id: "80002",
    isTestnet: true,
    chainSelector: 80002,
    name: "polygonAmoy",
    rpcUrls: [
      "https://rpc-amoy.polygon.technology",
      "https://polygon-amoy.gateway.tenderly.co",
      "https://polygon-amoy.drpc.org",
      "https://polygon-amoy-public.nodies.app",
      "https://polygon-amoy-bor-rpc.publicnode.com",
      "https://polygon-amoy.api.onfinality.io/public"
    ],
    nativeCurrency: {
      name: "POL",
      decimals: 18,
      symbol: "POL"
    },
    blockExplorers: [
      {
        name: "PolygonScan",
        url: "https://amoy.polygonscan.com",
        apiUrl: "https://api-amoy.polygonscan.com/api"
      }
    ],
    finalityConfirmations: 500,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x6FF322BC8da39bC87A056d4052aa763f7BDeE836",
      relayerLib: "0x81365cc081dF5fdF6cbD47a34fF4acBcA2B35F0d",
      validatorLib: "0x99542DdB261186F818974e579e4aBF3BFb44819e"
    }
  },
  "80069": {
    id: "80069",
    isTestnet: true,
    chainSelector: 80069,
    name: "berachainBepolia",
    rpcUrls: [
      "https://bepolia.rpc.berachain.com"
    ],
    nativeCurrency: {
      name: "BERA Token",
      decimals: 18,
      symbol: "BERA"
    },
    blockExplorers: [],
    finalityConfirmations: 1,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x5E3607995Cc65dB53A5A20725237eDb9f91d5CE5",
      relayerLib: "0x54B8d67AA64CF8A59F604cA6e98c643C64920b03",
      validatorLib: "0x6EDCB27Aaf312938FA3C1C631C18A0635bD34E1a"
    }
  },
  "84532": {
    id: "84532",
    isTestnet: true,
    finalityTagEnabled: true,
    chainSelector: 84532,
    name: "baseSepolia",
    rpcUrls: [
      "https://base-sepolia.gateway.tenderly.co",
      "https://sepolia.base.org",
      "https://base-sepolia.drpc.org",
      "https://base-sepolia-rpc.publicnode.com",
      "https://base-sepolia-public.nodies.app",
      "https://base-sepolia.api.onfinality.io/public"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "BaseScan",
        url: "https://sepolia.basescan.org",
        apiUrl: "https://api-sepolia.basescan.org/api"
      },
      {
        name: "Blockscout",
        url: "https://base-sepolia.blockscout.com",
        apiUrl: "https://base-sepolia.blockscout.com/api"
      }
    ],
    minBlockConfirmations: 1,
    deployments: {
      router: "0xE3d861a49bc5903499fB5Bb411B83d980422c31B",
      relayerLib: "0x429E6875Ba6A13cc015e9Eba594e8b42936244C4",
      validatorLib: "0x67BE79Df5A37d2a89384D32C2A066d2a7354eD2B"
    }
  },
  "167009": {
    id: "167009",
    isTestnet: true,
    chainSelector: 167009,
    name: "taikoTestnet",
    rpcUrls: [],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    finalityConfirmations: 20,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "200810": {
    id: "200810",
    isTestnet: true,
    chainSelector: 200810,
    name: "bitlayerTestnet",
    rpcUrls: [
      "https://rpc.ankr.com/bitlayer_testnet",
      "https://testnet-rpc.bitlayer.org",
      "https://testnet-rpc.bitlayer-rpc.com"
    ],
    nativeCurrency: {
      name: "Bitcoin",
      decimals: 18,
      symbol: "BTC"
    },
    blockExplorers: [
      {
        name: "Bitlayer Explorer",
        url: "https://testnet-explorer.bitlayer.org",
        apiUrl: "https://testnet-explorer.bitlayer.org/api"
      }
    ],
    finalityConfirmations: 21,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "344100": {
    id: "3441006",
    isTestnet: true,
    chainSelector: 344100,
    name: "mantapacificSepolia",
    rpcUrls: [
      "https://manta-pacific-sepolia.drpc.org",
      "https://manta-sepolia.rpc.caldera.xyz/http",
      "https://pacific-rpc.sepolia-testnet.manta.network/http"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "421614": {
    id: "421614",
    isTestnet: true,
    finalityTagEnabled: true,
    chainSelector: 421614,
    name: "arbitrumSepolia",
    rpcUrls: [
      "https://arbitrum-sepolia.gateway.tenderly.co",
      "https://arbitrum-sepolia.drpc.org",
      "https://arbitrum-sepolia-testnet.api.pocket.network",
      "https://arbitrum-sepolia-rpc.publicnode.com",
      "https://sepolia-rollup.arbitrum.io/rpc",
      "https://arbitrum-sepolia.api.onfinality.io/public"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Arbiscan",
        url: "https://sepolia.arbiscan.io",
        apiUrl: "https://api-sepolia.arbiscan.io/api"
      }
    ],
    minBlockConfirmations: 1,
    deployments: {
      router: "0x6c99cC0FCC985fF175787BD2565AfD15781C99d0",
      relayerLib: "0x622b5FeBf5Fd44Ab2E7636398F2621FC4E956304",
      validatorLib: "0x7F445E3DE6B46cD36887B9f136DBe13298517C1F"
    }
  },
  "534351": {
    id: "534351",
    isTestnet: true,
    chainSelector: 534351,
    name: "scrollSepolia",
    rpcUrls: [
      "https://scroll-sepolia.drpc.org",
      "https://scroll-sepolia-rpc.publicnode.com",
      "https://sepolia-rpc.scroll.io",
      "https://scroll-sepolia-public.nodies.app"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Scrollscan",
        url: "https://sepolia.scrollscan.com",
        apiUrl: "https://api-sepolia.scrollscan.com/api"
      }
    ],
    finalityConfirmations: 720,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x5E3607995Cc65dB53A5A20725237eDb9f91d5CE5",
      relayerLib: "0x54B8d67AA64CF8A59F604cA6e98c643C64920b03",
      validatorLib: "0x6EDCB27Aaf312938FA3C1C631C18A0635bD34E1a"
    }
  },
  "688689": {
    id: "688689",
    isTestnet: true,
    chainSelector: 688689,
    name: "pharosTestnet",
    rpcUrls: [
      "https://atlantic.dplabs-internal.com"
    ],
    nativeCurrency: {
      name: "PHRS",
      decimals: 18,
      symbol: "PHRS"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "763373": {
    id: "763373",
    isTestnet: true,
    chainSelector: 763373,
    name: "inkSepolia",
    rpcUrls: [
      "https://rpc-gel-sepolia.inkonchain.com",
      "https://ink-sepolia.drpc.org"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Ink Explorer",
        url: "https://sepolia.inkscan.io",
        apiUrl: "https://sepolia.inkscan.io/api"
      }
    ],
    finalityConfirmations: 3600,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "808813": {
    id: "808813",
    isTestnet: true,
    chainSelector: 808813,
    name: "bobSepolia",
    rpcUrls: [
      "https://bob-testnet.drpc.org",
      "https://bob-sepolia.rpc.gobob.xyz"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    finalityConfirmations: 3600,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1000101": {
    id: "1000101",
    isTestnet: true,
    chainSelector: 1000101,
    name: "xomarketTestnet",
    rpcUrls: [
      "https://dev-testnet-rpc.xo.market",
      "https://testnet-rpc-1.xo.market"
    ],
    nativeCurrency: {
      name: "XO",
      decimals: 18,
      symbol: "XO"
    },
    blockExplorers: [],
    finalityConfirmations: 2,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1234200": {
    id: "123420001114",
    isTestnet: true,
    chainSelector: 1234200,
    name: "campv2Testnet",
    rpcUrls: [
      "https://rpc.basecamp.t.raas.gelato.cloud"
    ],
    nativeCurrency: {
      name: "Camp",
      decimals: 18,
      symbol: "CAMP"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1313161": {
    id: "1313161555",
    isTestnet: true,
    finalityTagEnabled: true,
    chainSelector: 1313161,
    name: "auroraTestnet",
    rpcUrls: [
      "https://aurora-testnet.drpc.org",
      "https://testnet.aurora.dev"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    minBlockConfirmations: 1,
    deployments: {}
  },
  "1685877": {
    id: "168587773",
    isTestnet: true,
    chainSelector: 1685877,
    name: "blastSepolia",
    rpcUrls: [
      "https://blast-sepolia.drpc.org",
      "https://blast-testnet-public.nodies.app",
      "https://sepolia.blast.io"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Blastscan",
        url: "https://sepolia.blastscan.io",
        apiUrl: "https://api-sepolia.blastscan.io/api"
      }
    ],
    finalityConfirmations: 600,
    minBlockConfirmations: 1,
    deployments: {}
  },
  "11155111": {
    id: "11155111",
    isTestnet: true,
    finalityTagEnabled: true,
    chainSelector: 11155111,
    name: "ethereumSepolia",
    rpcUrls: [
      "https://gateway.tenderly.co/public/sepolia",
      "https://sepolia.gateway.tenderly.co",
      "https://sepolia.drpc.org",
      "https://1rpc.io/sepolia",
      "https://ethereum-sepolia-public.nodies.app",
      "https://0xrpc.io/sep",
      "https://ethereum-sepolia-rpc.publicnode.com",
      "https://eth-sepolia.api.onfinality.io/public",
      "https://eth-sepolia-testnet.api.pocket.network",
      "https://ethereum-sepolia.rpc.subquery.network/public"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Etherscan",
        url: "https://sepolia.etherscan.io",
        apiUrl: "https://api-sepolia.etherscan.io/api"
      }
    ],
    minBlockConfirmations: 1,
    deployments: {
      router: "0x3E0aAA63fFb51169B9aE9b7Dc3616b43362124D6",
      relayerLib: "0x8338A0B9c83C0d7E67C267432DF4C8b7cA98e11C",
      validatorLib: "0x1A808aa4F1E874763E114AB4fD170460D84A8D54"
    }
  },
  "11155420": {
    id: "11155420",
    isTestnet: true,
    chainSelector: 11155420,
    name: "optimismSepolia",
    rpcUrls: [
      "https://sepolia.optimism.io",
      "https://optimism-sepolia.gateway.tenderly.co",
      "https://optimism-sepolia.drpc.org",
      "https://optimism-sepolia-public.nodies.app",
      "https://optimism-sepolia.api.onfinality.io/public"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [
      {
        name: "Optimism Explorer",
        url: "https://sepolia-optimism.etherscan.io",
        apiUrl: "https://api-sepolia-optimism.etherscan.io/api"
      }
    ],
    finalityConfirmations: 600,
    minBlockConfirmations: 1,
    deployments: {
      router: "0x25c2037546Bf5B525DfAfe85A662DB519c07bDdB",
      relayerLib: "0x6E0b96885Ab0A58e82f2D1ce4df29AF6F5a40089",
      validatorLib: "0x0C12fAdDb045bB71C256E36662D56b4b22f1bD58"
    }
  },
  "11155931": {
    id: "11155931",
    isTestnet: true,
    chainSelector: 11155931,
    name: "riseTestnet",
    rpcUrls: [
      "https://testnet.riselabs.xyz"
    ],
    nativeCurrency: {
      name: "ETH",
      decimals: 18,
      symbol: "ETH"
    },
    blockExplorers: [],
    finalityConfirmations: 0,
    minBlockConfirmations: 1,
    deployments: {}
  }
};

// node_modules/viem/_esm/utils/chain/defineChain.js
function defineChain(chain) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...chain
  };
}

// node_modules/viem/_esm/errors/unit.js
init_base();
var InvalidDecimalNumberError = class extends BaseError {
  constructor({ value }) {
    super(`Number \`${value}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError"
    });
  }
};

// node_modules/viem/_esm/utils/unit/parseUnits.js
function parseUnits(value, decimals) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(value))
    throw new InvalidDecimalNumberError({ value });
  let [integer, fraction = "0"] = value.split(".");
  const negative = integer.startsWith("-");
  if (negative)
    integer = integer.slice(1);
  fraction = fraction.replace(/(0+)$/, "");
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer = `${BigInt(integer) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals)
    ];
    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else
      fraction = `${left}${rounded}`;
    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer = `${BigInt(integer) + 1n}`;
    }
    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }
  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}

// node_modules/viem/_esm/index.js
init_abis();
init_formatUnits();

// src/utils/createViemChain.ts
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
var log_default = log;

// src/utils/getEnvVar.ts
function getEnvVar(key) {
  const value = process2.env[key];
  if (value === void 0 || value === "") {
    warn(`Missing env variable: ${key}`, "getEnvVar");
    return void 0;
  }
  return value;
}

// src/utils/getTrezorDeployEnabled.ts
var getTrezorDeployEnabled = () => getEnvVar("TREZOR_DEPLOY_ENABLED") === "true";

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
    case "priceFeedProxyDeployer":
      prefix = "PRICE_FEED_PROXY_DEPLOYER";
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

// src/utils/updateEnvVariable.ts
import { readFileSync, writeFileSync } from "fs";
import path from "path";

// src/constants/deploymentVariables.ts
var envPrefixes = {
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
  relayerLibProxyAdmin: "CONCERO_RELAYER_LIB_PROXY_ADMIN"
};

// src/utils/updateEnvVariable.ts
function updateEnvVariable(key, newValue, envFileName) {
  const filePath = path.join(__dirname, `../.env.${envFileName}`);
  if (!filePath) throw new Error(`File not found: ${filePath}`);
  const envContents = readFileSync(filePath, "utf8");
  let lines = envContents.split(/\r?\n/);
  if (!lines.some((line) => line.startsWith(`${key}=`))) {
    log_default(`Key ${key} not found in .env file. Adding to ${filePath}`, "updateEnvVariable");
    lines.push(`${key}=${newValue}`);
  }
  const newLines = lines.map((line) => {
    let [currentKey, currentValue] = line.split("=");
    if (currentKey === key) {
      return `${key}=${newValue}`;
    }
    return line;
  });
  writeFileSync(filePath, newLines.join("\n"));
  process.env[key] = newValue;
}
function updateEnvAddress(prefix, newValue, envFileName, networkPostfix) {
  const searchKey = networkPostfix ? `${envPrefixes[prefix]}_${getNetworkEnvKey(networkPostfix)}` : envPrefixes[prefix];
  updateEnvVariable(searchKey, newValue, envFileName);
}

// src/constants/conceroNetworks.ts
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
var networkTypes2 = {
  mainnet: "mainnet",
  testnet: "testnet",
  localhost: "localhost"
};
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
  chains_testnet_default,
  networkTypes2.testnet,
  testnetAccounts
);
var mainnetNetworks = createExtendedNetworks(
  chains_mainnet_default,
  networkTypes2.mainnet,
  [mainnetDeployerPK, mainnetProxyDeployerPK]
);
var conceroNetworks = {
  ...testnetNetworks,
  ...mainnetNetworks
};

// src/deploy/GenericDeploy.ts
var genericDeploy = async ({ hre, contractName, contractPrefix, txParams }, ...contractConstructorArgs) => {
  const [deployer] = await hre.ethers.getSigners();
  const chain = conceroNetworks[hre.network.name];
  log(
    `Deploy ${contractName} from address: ${await deployer.getAddress()}`,
    "contract deploy",
    chain.name
  );
  const contractFactory = await hre.ethers.getContractFactory(contractName);
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
  await contract.deploymentTransaction()?.wait();
  const deploymentAddress = await contract.getAddress();
  if (hre.tenderly) {
    await hre.tenderly.verify({ name: contractName, address: deploymentAddress });
  }
  log(
    `Deployed at: ${deploymentAddress}`,
    `deploy ${contractName}`,
    chain.name
  );
  updateEnvAddress(
    contractPrefix,
    deploymentAddress,
    `deployments.${chain.type}`,
    chain.name
  );
  return contract.deploymentTransaction()?.hash;
};

// src/tokens/TokenSender.ts
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

// src/deploy/getActualGasData.ts
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

// src/deploy/hardhatDeployWrapper.ts
async function hardhatDeployWrapper(contractName, {
  hre,
  args,
  publicClient,
  proxy = false,
  gasLimit,
  log: log2 = false,
  libraries,
  skipIfAlreadyDeployed = false
}) {
  let actualDeployer;
  if (proxy) {
    const { proxyDeployer } = await hre.getNamedAccounts();
    actualDeployer = proxyDeployer;
  } else {
    const { deployer } = await hre.getNamedAccounts();
    actualDeployer = deployer;
  }
  const { deploy } = hre.deployments;
  const nonce = await publicClient.getTransactionCount({
    address: actualDeployer
  });
  const gasData = await getActualGasData(publicClient);
  const waitConfirmations = hre.network.name.startsWith("ethereum") ? 1 : 3;
  if (log2) {
    console.log(
      `\x1B[34m[hardhatDeployWrapper]\x1B[0m\x1B[35m[args]\x1B[0m`,
      {
        from: actualDeployer,
        args,
        nonce,
        gasLimit: gasLimit ? gasLimit : "auto",
        gasData,
        waitConfirmations
      }
    );
  }
  let deployment;
  try {
    console.log("Starting deployment of:", contractName);
    deployment = await deploy(contractName, {
      from: actualDeployer,
      args,
      log: true,
      autoMine: true,
      nonce,
      waitConfirmations,
      ...gasLimit ? { gasLimit } : {},
      ...gasData,
      ...libraries ? { libraries } : {},
      skipIfAlreadyDeployed
    });
  } catch (error) {
    console.error("Error deploying contract:", error);
    throw error;
  }
  return deployment;
}
export {
  TokenSender,
  config,
  genericDeploy,
  getNetworkEnvKey,
  getNetworkKey,
  hardhatDeployWrapper,
  networkTypes
};
//# sourceMappingURL=index.esm.js.map
