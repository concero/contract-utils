import { Chain, type TestClient, type PublicClient, type WalletClient } from "viem";
import { type PrivateKeyAccount } from "viem/accounts";
import { type ConceroNetwork, type NetworkType } from "../types";
declare function getClients(viemChain: Chain, url: string | undefined, account?: PrivateKeyAccount): {
    walletClient: WalletClient;
    publicClient: PublicClient;
    account: PrivateKeyAccount;
};
export type ExtendedTestClient = TestClient & WalletClient & PublicClient;
declare function getTestClient(account: PrivateKeyAccount): ExtendedTestClient;
declare function getFallbackClients(chain: ConceroNetwork, account?: PrivateKeyAccount): {
    walletClient: WalletClient;
    publicClient: PublicClient;
    account: PrivateKeyAccount;
};
declare function getViemAccount(chainType: NetworkType, accountType: "proxyDeployer" | "deployer"): {
    address: import("viem").Address;
    nonceManager?: import("viem").NonceManager | undefined;
    sign: (parameters: {
        hash: import("viem").Hash;
    }) => Promise<import("viem").Hex>;
    signAuthorization: (parameters: import("viem/_types/types/authorization").AuthorizationRequest) => Promise<import("viem/accounts").SignAuthorizationReturnType>;
    signMessage: ({ message }: {
        message: import("viem").SignableMessage;
    }) => Promise<import("viem").Hex>;
    signTransaction: <serializer extends import("viem").SerializeTransactionFn<import("viem").TransactionSerializable> = import("viem").SerializeTransactionFn<import("viem").TransactionSerializable>, transaction extends Parameters<serializer>[0] = Parameters<serializer>[0]>(transaction: transaction, options?: {
        serializer?: serializer | undefined;
    } | undefined) => Promise<import("viem").IsNarrowable<import("viem").TransactionSerialized<import("viem").GetTransactionType<transaction>>, import("viem").Hex> extends true ? import("viem").TransactionSerialized<import("viem").GetTransactionType<transaction>> : import("viem").Hex>;
    signTypedData: <const typedData extends import("viem").TypedData | Record<string, unknown>, primaryType extends keyof typedData | "EIP712Domain" = keyof typedData>(parameters: import("viem").TypedDataDefinition<typedData, primaryType>) => Promise<import("viem").Hex>;
    publicKey: import("viem").Hex;
    source: "privateKey";
    type: "local";
};
export { getClients, getFallbackClients, getTestClient, getViemAccount };
