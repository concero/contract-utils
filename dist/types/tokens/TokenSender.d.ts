import { Address, Hash, PublicClient, WalletClient } from 'viem';
export declare class TokenSender {
    private walletClient;
    private publicClient;
    constructor(walletClient: WalletClient, publicClient: PublicClient);
    sendToken(tokenAddress: Address, amount: bigint, recipient: Address): Promise<Hash>;
}
