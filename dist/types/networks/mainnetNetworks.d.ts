export declare const mainnetNetworks: {
    ethereum: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Etherscan";
                    readonly url: "https://etherscan.io";
                    readonly apiUrl: "https://api.etherscan.io/api";
                };
            };
            contracts: {
                readonly ensRegistry: {
                    readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
                };
                readonly ensUniversalResolver: {
                    readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                    readonly blockCreated: 19258213;
                };
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 14353601;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 1;
            name: "Ethereum";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://eth.merkle.io"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    base: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Basescan";
                    readonly url: "https://basescan.org";
                    readonly apiUrl: "https://api.basescan.org/api";
                };
            };
            contracts: {
                readonly disputeGameFactory: {
                    readonly 1: {
                        readonly address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e";
                    };
                };
                readonly l2OutputOracle: {
                    readonly 1: {
                        readonly address: "0x56315b90c40730925ec5485cf004d835058518A0";
                    };
                };
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 5022;
                };
                readonly portal: {
                    readonly 1: {
                        readonly address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e";
                        readonly blockCreated: 17482143;
                    };
                };
                readonly l1StandardBridge: {
                    readonly 1: {
                        readonly address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35";
                        readonly blockCreated: 17482143;
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
            id: 8453;
            name: "Base";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://mainnet.base.org"];
                };
            };
            sourceId: 1;
            testnet?: boolean | undefined | undefined;
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
    arbitrum: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Arbiscan";
                    readonly url: "https://arbiscan.io";
                    readonly apiUrl: "https://api.arbiscan.io/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 7654707;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 42161;
            name: "Arbitrum One";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://arb1.arbitrum.io/rpc"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    polygon: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "PolygonScan";
                    readonly url: "https://polygonscan.com";
                    readonly apiUrl: "https://api.polygonscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 25770160;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 137;
            name: "Polygon";
            nativeCurrency: {
                readonly name: "POL";
                readonly symbol: "POL";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://polygon-rpc.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    avalanche: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "SnowTrace";
                    readonly url: "https://snowtrace.io";
                    readonly apiUrl: "https://api.snowtrace.io";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 11907934;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 43114;
            name: "Avalanche";
            nativeCurrency: {
                readonly decimals: 18;
                readonly name: "Avalanche";
                readonly symbol: "AVAX";
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://api.avax.network/ext/bc/C/rpc"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
    optimism: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "Optimism Explorer";
                    readonly url: "https://optimistic.etherscan.io";
                    readonly apiUrl: "https://api-optimistic.etherscan.io/api";
                };
            };
            contracts: {
                readonly disputeGameFactory: {
                    readonly 1: {
                        readonly address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9";
                    };
                };
                readonly l2OutputOracle: {
                    readonly 1: {
                        readonly address: "0xdfe97868233d1aa22e815a266982f2cf17685a27";
                    };
                };
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 4286263;
                };
                readonly portal: {
                    readonly 1: {
                        readonly address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed";
                    };
                };
                readonly l1StandardBridge: {
                    readonly 1: {
                        readonly address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1";
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
            id: 10;
            name: "OP Mainnet";
            nativeCurrency: {
                readonly name: "Ether";
                readonly symbol: "ETH";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://mainnet.optimism.io"];
                };
            };
            sourceId: 1;
            testnet?: boolean | undefined | undefined;
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
    polygonZkEvm: {
        name: string;
        type: import("./networkTypes").NetworkType;
        chainId: number;
        chainSelector: number;
        confirmations: number;
        viemChain: {
            blockExplorers: {
                readonly default: {
                    readonly name: "PolygonScan";
                    readonly url: "https://polygonscan.com";
                    readonly apiUrl: "https://api.polygonscan.com/api";
                };
            };
            contracts: {
                readonly multicall3: {
                    readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                    readonly blockCreated: 25770160;
                };
            };
            ensTlds?: readonly string[] | undefined;
            id: 137;
            name: "Polygon";
            nativeCurrency: {
                readonly name: "POL";
                readonly symbol: "POL";
                readonly decimals: 18;
            };
            rpcUrls: {
                readonly default: {
                    readonly http: readonly ["https://polygon-rpc.com"];
                };
            };
            sourceId?: number | undefined | undefined;
            testnet?: boolean | undefined | undefined;
            custom?: Record<string, unknown> | undefined;
            fees?: import("viem").ChainFees<undefined> | undefined;
            formatters?: undefined;
            serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
        };
    };
};
export type ConceroMainnetNetworkNames = keyof typeof mainnetNetworks;
