export declare const testnetNetworks: {
    arbitrumSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Arbiscan";
                    readonly url: "https://sepolia.arbiscan.io";
                    readonly apiUrl: "https://api-sepolia.arbiscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 81930;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 421614;
            name: "Arbitrum Sepolia";
            nativeCurrency: {
                readonly name: "Arbitrum Sepolia Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia-rollup.arbitrum.io/rpc"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    baseSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Basescan";
                    readonly url: "https://sepolia.basescan.org";
                    readonly apiUrl: "https://api-sepolia.basescan.org/api";
                };
            };
            contracts: {
                readonly disputeGameFactory: {
                    readonly 11155111: {
                        readonly address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1";
                    };
                };
                readonly l2OutputOracle: {
                    readonly 11155111: {
                        readonly address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254";
                    };
                };
                readonly portal: {
                    readonly 11155111: {
                        readonly address: "0x49f53e41452c74589e85ca1677426ba426459e85";
                        readonly blockCreated: 4446677;
                    };
                };
                readonly l1StandardBridge: {
                    readonly 11155111: {
                        readonly address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120";
                        readonly blockCreated: 4446677;
                    };
                };
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 1059647;
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 84532;
            name: "Base Sepolia";
            nativeCurrency: {
                readonly name: "Sepolia Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia.base.org"];
                };
            };
            sourceId: 11155111;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        mixHash: import("viem").Hash;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        uncles: import("viem").Hash[];
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransaction) => ({
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                    } | {
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: import("viem").Hash;
                        blockNumber: bigint;
                        contractAddress: import("abitype").Address | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: import("abitype").Address;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false>[];
                        logsBloom: import("viem").Hex;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: import("abitype").Address | null;
                        transactionHash: import("viem").Hash;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    } & {};
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
            readonly network: "base-sepolia";
        };
    };
    astarShibuya: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers?: {
                [key: string]: {
                    name: string;
                    url: string;
                    apiUrl?: string | undefined;
                };
                default: {
                    name: string;
                    url: string;
                    apiUrl?: string | undefined;
                };
            } | undefined | undefined;
            contracts?: {
                [x: string]: import("viem").ChainContract | {
                    [sourceId: number]: import("viem").ChainContract | undefined;
                } | undefined;
                ensRegistry?: import("viem").ChainContract | undefined;
                ensUniversalResolver?: import("viem").ChainContract | undefined;
                multicall3?: import("viem").ChainContract | undefined;
                universalSignatureVerifier?: import("viem").ChainContract | undefined;
            } | undefined;
            ensTlds?: readonly string[] | undefined;
            id: 81;
            name: "Astar Shibuya";
            nativeCurrency: {
                readonly name: "SBY";
                readonly symbol: "SBY";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://evm.shibuya.astar.network"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            readonly network: "astar-shibuya";
        };
    };
    roninSaigon: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Saigon Explorer";
                    readonly url: "https://saigon-app.roninchain.com";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 18736871;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 2021;
            name: "Saigon Testnet";
            nativeCurrency: {
                readonly name: "RON";
                readonly symbol: "RON";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://saigon-testnet.roninchain.com/rpc"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    megaethTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "MegaETH Testnet Explorer";
                    readonly url: "https://www.megaexplorer.xyz/";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 6342;
            name: "MegaETH Testnet";
            nativeCurrency: {
                readonly name: "MegaETH Testnet Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://carrot.megaeth.com/rpc"];
                    readonly webSocket: readonly ["wss://carrot.megaeth.com/ws"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    sonicBlaze: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Sonic Blaze Testnet Explorer";
                    readonly url: "https://testnet.sonicscan.org";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 1100;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 57054;
            name: "Sonic Blaze Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Sonic";
                readonly symbol: "S";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.blaze.soniclabs.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    monadTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Monad Testnet explorer";
                    readonly url: "https://testnet.monadexplorer.com";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 251449;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 10143;
            name: "Monad Testnet";
            nativeCurrency: {
                readonly name: "Testnet MON Token";
                readonly symbol: "MON";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://testnet-rpc.monad.xyz"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    sepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Etherscan";
                    readonly url: "https://sepolia.etherscan.io";
                    readonly apiUrl: "https://api-sepolia.etherscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 751532;
                };
                readonly ensRegistry: {
                    readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
                };
                readonly ensUniversalResolver: {
                    readonly address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC";
                    readonly blockCreated: 5317080;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 11155111;
            name: "Sepolia";
            nativeCurrency: {
                readonly name: "Sepolia Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia.drpc.org"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    lineaSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Etherscan";
                    readonly url: "https://sepolia.lineascan.build";
                    readonly apiUrl: "https://api-sepolia.lineascan.build/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 227427;
                };
                readonly ensRegistry: {
                    readonly address: "0x5B2636F0f2137B4aE722C01dd5122D7d3e9541f7";
                    readonly blockCreated: 2395094;
                };
                readonly ensUniversalResolver: {
                    readonly address: "0x72560a31B3DAEE82B984a7F51c6b3b1bb7CC9F50";
                    readonly blockCreated: 2395255;
                };
            };
            ensTlds: readonly [".linea.eth"];
            id: 59141;
            name: "Linea Sepolia Testnet";
            nativeCurrency: {
                readonly name: "Linea Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.sepolia.linea.build"];
                    readonly webSocket: readonly ["wss://rpc.sepolia.linea.build"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees: {
                readonly estimateFeesPerGas: ({ client, multiply, request, type, }: Parameters<import("viem").ChainEstimateFeesPerGasFn>[0]) => ReturnType<import("viem").ChainEstimateFeesPerGasFn>;
                readonly maxPriorityFeePerGas: ({ block, client, request }: import("viem").ChainFeesFnParameters<import("viem").ChainFormatters | undefined>) => Promise<bigint | null>;
            };
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    bnbTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "BscScan";
                    readonly url: "https://testnet.bscscan.com";
                    readonly apiUrl: "https://api-testnet.bscscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 17422483;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 97;
            name: "Binance Smart Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "BNB";
                readonly symbol: "tBNB";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    soneiumMinato: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Blockscout";
                    readonly url: "https://soneium-minato.blockscout.com";
                    readonly apiUrl: "https://soneium-minato.blockscout.com/api";
                };
            };
            contracts: {
                readonly disputeGameFactory: {
                    readonly 11155111: {
                        readonly address: "0xB3Ad2c38E6e0640d7ce6aA952AB3A60E81bf7a01";
                    };
                };
                readonly l2OutputOracle: {
                    readonly 11155111: {
                        readonly address: "0x710e5286C746eC38beeB7538d0146f60D27be343";
                    };
                };
                readonly portal: {
                    readonly 11155111: {
                        readonly address: "0x65ea1489741A5D72fFdD8e6485B216bBdcC15Af3";
                        readonly blockCreated: 6466136;
                    };
                };
                readonly l1StandardBridge: {
                    readonly 11155111: {
                        readonly address: "0x5f5a404A5edabcDD80DB05E8e54A78c9EBF000C2";
                        readonly blockCreated: 6466136;
                    };
                };
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 1;
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 1946;
            name: "Soneium Minato Testnet";
            nativeCurrency: {
                readonly name: "Sepolia Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.minato.soneium.org"];
                };
            };
            sourceId: 11155111;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        mixHash: import("viem").Hash;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        uncles: import("viem").Hash[];
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransaction) => ({
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                    } | {
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: import("viem").Hash;
                        blockNumber: bigint;
                        contractAddress: import("abitype").Address | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: import("abitype").Address;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false>[];
                        logsBloom: import("viem").Hex;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: import("abitype").Address | null;
                        transactionHash: import("viem").Hash;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    } & {};
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
        };
    };
    apechainCurtis: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers?: {
                [key: string]: {
                    name: string;
                    url: string;
                    apiUrl?: string | undefined;
                };
                default: {
                    name: string;
                    url: string;
                    apiUrl?: string | undefined;
                };
            } | undefined | undefined;
            contracts?: {
                [x: string]: import("viem").ChainContract | {
                    [sourceId: number]: import("viem").ChainContract | undefined;
                } | undefined;
                ensRegistry?: import("viem").ChainContract | undefined;
                ensUniversalResolver?: import("viem").ChainContract | undefined;
                multicall3?: import("viem").ChainContract | undefined;
                universalSignatureVerifier?: import("viem").ChainContract | undefined;
            } | undefined;
            ensTlds?: readonly string[] | undefined;
            id: 33111;
            name: "apechainCurtis";
            nativeCurrency: {
                readonly name: "APE";
                readonly symbol: "APE";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.curtis.apechain.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            readonly network: "apechainCurtis";
        };
    };
    avalancheFuji: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "SnowTrace";
                    readonly url: "https://testnet.snowtrace.io";
                    readonly apiUrl: "https://api-testnet.snowtrace.io";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 7096959;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 43113;
            name: "Avalanche Fuji";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Avalanche Fuji";
                readonly symbol: "AVAX";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://api.avax-test.network/ext/bc/C/rpc"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    optimismSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Blockscout";
                    readonly url: "https://optimism-sepolia.blockscout.com";
                    readonly apiUrl: "https://optimism-sepolia.blockscout.com/api";
                };
            };
            contracts: {
                readonly disputeGameFactory: {
                    readonly 11155111: {
                        readonly address: "0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1";
                    };
                };
                readonly l2OutputOracle: {
                    readonly 11155111: {
                        readonly address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F";
                    };
                };
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 1620204;
                };
                readonly portal: {
                    readonly 11155111: {
                        readonly address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC";
                    };
                };
                readonly l1StandardBridge: {
                    readonly 11155111: {
                        readonly address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1";
                    };
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 11155420;
            name: "OP Sepolia";
            nativeCurrency: {
                readonly name: "Sepolia Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia.optimism.io"];
                };
            };
            sourceId: 11155111;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        mixHash: import("viem").Hash;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        uncles: import("viem").Hash[];
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransaction) => ({
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                    } | {
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: import("viem").Hash;
                        blockNumber: bigint;
                        contractAddress: import("abitype").Address | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: import("abitype").Address;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false>[];
                        logsBloom: import("viem").Hex;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: import("abitype").Address | null;
                        transactionHash: import("viem").Hash;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    } & {};
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
        };
    };
    polygonAmoy: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "PolygonScan";
                    readonly url: "https://amoy.polygonscan.com";
                    readonly apiUrl: "https://api-amoy.polygonscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 3127388;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 80002;
            name: "Polygon Amoy";
            nativeCurrency: {
                readonly name: "POL";
                readonly symbol: "POL";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc-amoy.polygon.technology"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    bitlayerTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "bitlayer testnet scan";
                    readonly url: "https://testnet.btrscan.com";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0x5B256fE9e993902eCe49D138a5b1162cBb529474";
                    readonly blockCreated: 4135671;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 200810;
            name: "Bitlayer Testnet";
            nativeCurrency: {
                readonly name: "BTC";
                readonly symbol: "BTC";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://testnet-rpc.bitlayer.org"];
                    readonly webSocket: readonly ["wss://testnet-ws.bitlayer.org"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    blastSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Blastscan";
                    readonly url: "https://sepolia.blastscan.io";
                    readonly apiUrl: "https://api-sepolia.blastscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 756690;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 168587773;
            name: "Blast Sepolia";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia.blast.io"];
                };
            };
            sourceId: 11155111;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    botanixTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Botanix Testnet Explorer";
                    readonly url: "https://testnet.botanixscan.io";
                };
            };
            contracts?: {
                [x: string]: import("viem").ChainContract | {
                    [sourceId: number]: import("viem").ChainContract | undefined;
                } | undefined;
                ensRegistry?: import("viem").ChainContract | undefined;
                ensUniversalResolver?: import("viem").ChainContract | undefined;
                multicall3?: import("viem").ChainContract | undefined;
                universalSignatureVerifier?: import("viem").ChainContract | undefined;
            } | undefined;
            ensTlds?: readonly string[] | undefined;
            id: 3636;
            name: "Botanix Testnet";
            nativeCurrency: {
                readonly name: "Botanix";
                readonly symbol: "BTC";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://node.botanixlabs.dev"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    celoAlfajores: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Celo Alfajores Explorer";
                    readonly url: "https://celo-alfajores.blockscout.com";
                    readonly apiUrl: "https://celo-alfajores.blockscout.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 14569001;
                };
                readonly portal: {
                    readonly 17000: {
                        readonly address: "0x82527353927d8D069b3B452904c942dA149BA381";
                        readonly blockCreated: 2411324;
                    };
                };
                readonly disputeGameFactory: {
                    readonly 17000: {
                        readonly address: "0xE28AAdcd9883746c0e5068F58f9ea06027b214cb";
                        readonly blockCreated: 2411324;
                    };
                };
                readonly l2OutputOracle: {
                    readonly 17000: {
                        readonly address: "0x4a2635e9e4f6e45817b1D402ac4904c1d1752438";
                        readonly blockCreated: 2411324;
                    };
                };
                readonly l1StandardBridge: {
                    readonly 17000: {
                        readonly address: "0xD1B0E0581973c9eB7f886967A606b9441A897037";
                        readonly blockCreated: 2411324;
                    };
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 44787;
            name: "Alfajores";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "CELO";
                readonly symbol: "A-CELO";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://alfajores-forno.celo-testnet.org"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees: import("viem").ChainFees<{
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").CeloRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint | undefined;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint | undefined;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        nonce: bigint | null | undefined;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").CeloTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                        mixHash?: undefined | undefined;
                        randomness?: {
                            committed: import("viem").Hex;
                            revealed: import("viem").Hex;
                        } | undefined | undefined;
                        uncles?: undefined | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").CeloRpcTransaction) => ({
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        chainId: number;
                        feeCurrency: import("abitype").Address | null;
                        gatewayFee: bigint | null;
                        gatewayFeeRecipient: import("abitype").Address | null;
                        type: "cip42";
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        chainId: number;
                        feeCurrency: import("abitype").Address | null;
                        type: "cip64";
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                        accessList?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: undefined;
                        feeCurrency?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionRequest: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").CeloTransactionRequest) => ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        type?: "0x0" | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        blobs?: undefined;
                        accessList?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        type?: "0x1" | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        type?: "0x2" | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        type?: "0x3" | undefined;
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        value?: `0x${string}` | undefined;
                        to: `0x${string}` | null;
                        gasPrice?: undefined | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        maxFeePerBlobGas: `0x${string}`;
                        accessList?: import("viem").AccessList | undefined;
                        blobs: readonly import("viem").Hex[] | readonly import("viem").ByteArray[];
                        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
                        kzg?: import("viem").Kzg | undefined;
                        sidecars?: readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
                        authorizationList?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        type?: "0x4" | undefined;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        value?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        authorizationList?: import("viem").RpcAuthorizationList | undefined;
                        blobs?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        type?: "0x7b" | undefined;
                        value?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        feeCurrency?: `0x${string}` | undefined;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        blobs?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                    }) & {};
                    type: "transactionRequest";
                };
            }>;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").CeloRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint | undefined;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint | undefined;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        nonce: bigint | null | undefined;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").CeloTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                        mixHash?: undefined | undefined;
                        randomness?: {
                            committed: import("viem").Hex;
                            revealed: import("viem").Hex;
                        } | undefined | undefined;
                        uncles?: undefined | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").CeloRpcTransaction) => ({
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        feeCurrency: import("abitype").Address | null;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        chainId: number;
                        feeCurrency: import("abitype").Address | null;
                        gatewayFee: bigint | null;
                        gatewayFeeRecipient: import("abitype").Address | null;
                        type: "cip42";
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        accessList: import("viem").AccessList;
                        chainId: number;
                        feeCurrency: import("abitype").Address | null;
                        type: "cip64";
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        mint?: undefined;
                        isSystemTx?: undefined;
                        sourceHash?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                        accessList?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        chainId?: undefined;
                        feeCurrency?: undefined;
                        gatewayFee?: undefined;
                        gatewayFeeRecipient?: undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionRequest: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").CeloTransactionRequest) => ({
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        type?: "0x0" | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        blobs?: undefined;
                        accessList?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        type?: "0x1" | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: `0x${string}` | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        type?: "0x2" | undefined;
                        value?: `0x${string}` | undefined;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        blobs?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        type?: "0x3" | undefined;
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        value?: `0x${string}` | undefined;
                        to: `0x${string}` | null;
                        gasPrice?: undefined | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        maxFeePerBlobGas: `0x${string}`;
                        accessList?: import("viem").AccessList | undefined;
                        blobs: readonly import("viem").Hex[] | readonly import("viem").ByteArray[];
                        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
                        kzg?: import("viem").Kzg | undefined;
                        sidecars?: readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
                        authorizationList?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        type?: "0x4" | undefined;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        value?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        authorizationList?: import("viem").RpcAuthorizationList | undefined;
                        blobs?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                        feeCurrency?: `0x${string}` | undefined;
                    } | {
                        data?: `0x${string}` | undefined;
                        from?: `0x${string}` | undefined;
                        gas?: `0x${string}` | undefined;
                        nonce?: `0x${string}` | undefined;
                        to?: `0x${string}` | null | undefined;
                        type?: "0x7b" | undefined;
                        value?: `0x${string}` | undefined;
                        accessList?: import("viem").AccessList | undefined;
                        feeCurrency?: `0x${string}` | undefined;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: `0x${string}` | undefined;
                        maxPriorityFeePerGas?: `0x${string}` | undefined;
                        blobs?: undefined;
                        authorizationList?: undefined;
                        blobVersionedHashes?: undefined;
                        kzg?: undefined;
                        sidecars?: undefined;
                    }) & {};
                    type: "transactionRequest";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionCelo;
            };
        };
    };
    coreTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers?: {
                [key: string]: {
                    name: string;
                    url: string;
                    apiUrl?: string | undefined;
                };
                default: {
                    name: string;
                    url: string;
                    apiUrl?: string | undefined;
                };
            } | undefined | undefined;
            contracts?: {
                [x: string]: import("viem").ChainContract | {
                    [sourceId: number]: import("viem").ChainContract | undefined;
                } | undefined;
                ensRegistry?: import("viem").ChainContract | undefined;
                ensUniversalResolver?: import("viem").ChainContract | undefined;
                multicall3?: import("viem").ChainContract | undefined;
                universalSignatureVerifier?: import("viem").ChainContract | undefined;
            } | undefined;
            ensTlds?: readonly string[] | undefined;
            id: 1114;
            name: "Core testnet";
            nativeCurrency: {
                readonly name: "ETH";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.test2.btcs.network"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
            readonly network: "core-testnet";
        };
    };
    cronosTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Cronos Explorer";
                    readonly url: "https://cronos.org/explorer/testnet3";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 10191251;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 338;
            name: "Cronos Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "CRO";
                readonly symbol: "tCRO";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://evm-t3.cronos.org"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    gnosisChiado: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Blockscout";
                    readonly url: "https://blockscout.chiadochain.net";
                    readonly apiUrl: "https://blockscout.chiadochain.net/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 4967313;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 10200;
            name: "Gnosis Chiado";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Gnosis";
                readonly symbol: "xDAI";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.chiadochain.net"];
                    readonly webSocket: readonly ["wss://rpc.chiadochain.net/wss"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    hashkeyTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "HashKey Chain Explorer";
                    readonly url: "https://hashkeychain-testnet-explorer.alt.technology";
                };
            };
            contracts?: {
                [x: string]: import("viem").ChainContract | {
                    [sourceId: number]: import("viem").ChainContract | undefined;
                } | undefined;
                ensRegistry?: import("viem").ChainContract | undefined;
                ensUniversalResolver?: import("viem").ChainContract | undefined;
                multicall3?: import("viem").ChainContract | undefined;
                universalSignatureVerifier?: import("viem").ChainContract | undefined;
            } | undefined;
            ensTlds?: readonly string[] | undefined;
            id: 133;
            name: "HashKey Chain Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "HashKey EcoPoints";
                readonly symbol: "HSK";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://hashkeychain-testnet.alt.technology"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    inkSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Blockscout";
                    readonly url: "https://explorer-sepolia.inkonchain.com/";
                    readonly apiUrl: "https://explorer-sepolia.inkonchain.com/api/v2";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 0;
                };
                readonly disputeGameFactory: {
                    readonly 11155111: {
                        readonly address: "0x860e626c700af381133d9f4af31412a2d1db3d5d";
                    };
                };
                readonly portal: {
                    readonly 11155111: {
                        readonly address: "0x5c1d29c6c9c8b0800692acc95d700bcb4966a1d7";
                    };
                };
                readonly l1StandardBridge: {
                    readonly 11155111: {
                        readonly address: "0x33f60714bbd74d62b66d79213c348614de51901c";
                    };
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 763373;
            name: "Ink Sepolia";
            nativeCurrency: {
                readonly name: "Sepolia Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc-gel-sepolia.inkonchain.com"];
                };
            };
            sourceId: 11155111;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        mixHash: import("viem").Hash;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        uncles: import("viem").Hash[];
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransaction) => ({
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                    } | {
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: import("viem").Hash;
                        blockNumber: bigint;
                        contractAddress: import("abitype").Address | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: import("abitype").Address;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false>[];
                        logsBloom: import("viem").Hex;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: import("abitype").Address | null;
                        transactionHash: import("viem").Hash;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    } & {};
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
        };
    };
    mantleSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Mantle Testnet Explorer";
                    readonly url: "https://explorer.sepolia.mantle.xyz/";
                    readonly apiUrl: "https://explorer.sepolia.mantle.xyz/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 4584012;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 5003;
            name: "Mantle Sepolia Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "MNT";
                readonly symbol: "MNT";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://rpc.sepolia.mantle.xyz"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    scrollSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Scrollscan";
                    readonly url: "https://sepolia.scrollscan.com";
                    readonly apiUrl: "https://api-sepolia.scrollscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 9473;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 534351;
            name: "Scroll Sepolia";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia-rpc.scroll.io"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    seiTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Seitrace";
                    readonly url: "https://seitrace.com";
                };
            };
            contracts?: {
                [x: string]: import("viem").ChainContract | {
                    [sourceId: number]: import("viem").ChainContract | undefined;
                } | undefined;
                ensRegistry?: import("viem").ChainContract | undefined;
                ensUniversalResolver?: import("viem").ChainContract | undefined;
                multicall3?: import("viem").ChainContract | undefined;
                universalSignatureVerifier?: import("viem").ChainContract | undefined;
            } | undefined;
            ensTlds?: readonly string[] | undefined;
            id: 1328;
            name: "Sei Testnet";
            nativeCurrency: {
                readonly name: "Sei";
                readonly symbol: "SEI";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://evm-rpc-testnet.sei-apis.com"];
                    readonly webSocket: readonly ["wss://evm-ws-testnet.sei-apis.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    shibariumPuppynet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Blockscout";
                    readonly url: "https://puppyscan.shib.io";
                    readonly apiUrl: "https://puppyscan.shib.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xA4029b74FBA366c926eDFA7Dd10B21C621170a4c";
                    readonly blockCreated: 3035769;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 157;
            name: "Puppynet Shibarium";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Bone";
                readonly symbol: "BONE";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://puppynet.shibrpc.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    unichainSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Uniscan";
                    readonly url: "https://sepolia.uniscan.xyz";
                    readonly apiUrl: "https://api-sepolia.uniscan.xyz/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 0;
                };
                readonly portal: {
                    readonly 11155111: {
                        readonly address: "0x0d83dab629f0e0F9d36c0Cbc89B69a489f0751bD";
                    };
                };
                readonly l1StandardBridge: {
                    readonly 11155111: {
                        readonly address: "0xea58fcA6849d79EAd1f26608855c2D6407d54Ce2";
                    };
                };
                readonly disputeGameFactory: {
                    readonly 11155111: {
                        readonly address: "0xeff73e5aa3B9AEC32c659Aa3E00444d20a84394b";
                    };
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 1301;
            name: "Unichain Sepolia";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia.unichain.org"];
                };
            };
            sourceId: 11155111;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        mixHash: import("viem").Hash;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        uncles: import("viem").Hash[];
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransaction) => ({
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                    } | {
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: import("viem").Hash;
                        blockNumber: bigint;
                        contractAddress: import("abitype").Address | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: import("abitype").Address;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false>[];
                        logsBloom: import("viem").Hex;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: import("abitype").Address | null;
                        transactionHash: import("viem").Hash;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    } & {};
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
        };
    };
    xlayerSepolia: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "OKLink";
                    readonly url: "https://www.oklink.com/xlayer-test";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 624344;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 195;
            name: "X1 Testnet";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "OKB";
                readonly symbol: "OKB";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://xlayertestrpc.okx.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    zircuitTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Zircuit Testnet Explorer";
                    readonly url: "https://explorer.testnet.zircuit.com";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
                    readonly blockCreated: 6040287;
                };
                readonly l2OutputOracle: {
                    readonly 11155111: {
                        readonly address: "0x740C2dac453aEf7140809F80b72bf0e647af8148";
                    };
                };
                readonly portal: {
                    readonly 11155111: {
                        readonly address: "0x787f1C8c5924178689E0560a43D848bF8E54b23e";
                    };
                };
                readonly l1StandardBridge: {
                    readonly 11155111: {
                        readonly address: "0x0545c5fe980098C16fcD0eCB5E79753afa6d9af9";
                    };
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 48899;
            name: "Zircuit Testnet";
            nativeCurrency: {
                readonly name: "ETH";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://testnet.zircuit.com", "https://zircuit1-testnet.p2pify.com", "https://zircuit1-testnet.liquify.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        mixHash: import("viem").Hash;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        uncles: import("viem").Hash[];
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransaction) => ({
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                    } | {
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: import("viem").Hash;
                        blockNumber: bigint;
                        contractAddress: import("abitype").Address | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: import("abitype").Address;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false>[];
                        logsBloom: import("viem").Hex;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: import("abitype").Address | null;
                        transactionHash: import("viem").Hash;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    } & {};
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
        };
    };
    modeTestnet: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Blockscout";
                    readonly url: "https://sepolia.explorer.mode.network";
                    readonly apiUrl: "https://sepolia.explorer.mode.network/api";
                };
            };
            contracts: {
                readonly l2OutputOracle: {
                    readonly 11155111: {
                        readonly address: "0x2634BD65ba27AB63811c74A63118ACb312701Bfa";
                        readonly blockCreated: 3778393;
                    };
                };
                readonly portal: {
                    readonly 11155111: {
                        readonly address: "0x320e1580effF37E008F1C92700d1eBa47c1B23fD";
                        readonly blockCreated: 3778395;
                    };
                };
                readonly l1StandardBridge: {
                    readonly 11155111: {
                        readonly address: "0xbC5C679879B2965296756CD959C3C739769995E2";
                        readonly blockCreated: 3778392;
                    };
                };
                readonly multicall3: {
                    readonly address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF";
                    readonly blockCreated: 3019007;
                };
                readonly gasPriceOracle: {
                    readonly address: "0x420000000000000000000000000000000000000F";
                };
                readonly l1Block: {
                    readonly address: "0x4200000000000000000000000000000000000015";
                };
                readonly l2CrossDomainMessenger: {
                    readonly address: "0x4200000000000000000000000000000000000007";
                };
                readonly l2Erc721Bridge: {
                    readonly address: "0x4200000000000000000000000000000000000014";
                };
                readonly l2StandardBridge: {
                    readonly address: "0x4200000000000000000000000000000000000010";
                };
                readonly l2ToL1MessagePasser: {
                    readonly address: "0x4200000000000000000000000000000000000016";
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 919;
            name: "Mode Testnet";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://sepolia.mode.network"];
                };
            };
            sourceId: 11155111;
            testnet: true;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters: {
                readonly block: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcBlock) => {
                        baseFeePerGas: bigint | null;
                        blobGasUsed: bigint;
                        difficulty: bigint;
                        excessBlobGas: bigint;
                        extraData: import("viem").Hex;
                        gasLimit: bigint;
                        gasUsed: bigint;
                        hash: `0x${string}` | null;
                        logsBloom: `0x${string}` | null;
                        miner: import("abitype").Address;
                        mixHash: import("viem").Hash;
                        nonce: `0x${string}` | null;
                        number: bigint | null;
                        parentBeaconBlockRoot?: `0x${string}` | undefined;
                        parentHash: import("viem").Hash;
                        receiptsRoot: import("viem").Hex;
                        sealFields: import("viem").Hex[];
                        sha3Uncles: import("viem").Hash;
                        size: bigint;
                        stateRoot: import("viem").Hash;
                        timestamp: bigint;
                        totalDifficulty: bigint | null;
                        transactions: `0x${string}`[] | import("viem/chains").OpStackTransaction<boolean>[];
                        transactionsRoot: import("viem").Hash;
                        uncles: import("viem").Hash[];
                        withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
                        withdrawalsRoot?: `0x${string}` | undefined;
                    } & {};
                    type: "block";
                };
                readonly transaction: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransaction) => ({
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: boolean;
                        mint?: bigint | undefined | undefined;
                        sourceHash: import("viem").Hex;
                        type: "deposit";
                    } | {
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        v: bigint;
                        to: import("abitype").Address | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        nonce: number;
                        value: bigint;
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        accessList?: undefined | undefined;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId?: number | undefined;
                        yParity?: undefined | undefined;
                        type: "legacy";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip2930";
                        gasPrice: bigint;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas?: undefined | undefined;
                        maxPriorityFeePerGas?: undefined | undefined;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip1559";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList?: undefined | undefined;
                        blobVersionedHashes: readonly import("viem").Hex[];
                        chainId: number;
                        type: "eip4844";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas: bigint;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    } | {
                        blockHash: `0x${string}` | null;
                        blockNumber: bigint | null;
                        from: import("abitype").Address;
                        gas: bigint;
                        hash: import("viem").Hash;
                        input: import("viem").Hex;
                        nonce: number;
                        r: import("viem").Hex;
                        s: import("viem").Hex;
                        to: import("abitype").Address | null;
                        transactionIndex: number | null;
                        typeHex: import("viem").Hex | null;
                        v: bigint;
                        value: bigint;
                        yParity: number;
                        accessList: import("viem").AccessList;
                        authorizationList: import("viem").SignedAuthorizationList;
                        blobVersionedHashes?: undefined | undefined;
                        chainId: number;
                        type: "eip7702";
                        gasPrice?: undefined | undefined;
                        maxFeePerBlobGas?: undefined | undefined;
                        maxFeePerGas: bigint;
                        maxPriorityFeePerGas: bigint;
                        isSystemTx?: undefined | undefined;
                        mint?: undefined | undefined;
                        sourceHash?: undefined | undefined;
                    }) & {};
                    type: "transaction";
                };
                readonly transactionReceipt: {
                    exclude: [] | undefined;
                    format: (args: import("viem/chains").OpStackRpcTransactionReceipt) => {
                        blobGasPrice?: bigint | undefined;
                        blobGasUsed?: bigint | undefined;
                        blockHash: import("viem").Hash;
                        blockNumber: bigint;
                        contractAddress: import("abitype").Address | null | undefined;
                        cumulativeGasUsed: bigint;
                        effectiveGasPrice: bigint;
                        from: import("abitype").Address;
                        gasUsed: bigint;
                        logs: import("viem").Log<bigint, number, false>[];
                        logsBloom: import("viem").Hex;
                        root?: `0x${string}` | undefined;
                        status: "success" | "reverted";
                        to: import("abitype").Address | null;
                        transactionHash: import("viem").Hash;
                        transactionIndex: number;
                        type: import("viem").TransactionType;
                        l1GasPrice: bigint | null;
                        l1GasUsed: bigint | null;
                        l1Fee: bigint | null;
                        l1FeeScalar: number | null;
                    } & {};
                    type: "transactionReceipt";
                };
            };
            serializers: {
                readonly transaction: typeof import("viem/chains").serializeTransactionOpStack;
            };
        };
    };
};
export type ConceroTestnetNetworkNames = keyof typeof testnetNetworks;
