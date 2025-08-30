import { Address, erc20Abi, Hash, PublicClient, WalletClient } from 'viem';

export class TokenSender {
	private walletClient: WalletClient;
	private publicClient: PublicClient;

	constructor(walletClient: WalletClient, publicClient: PublicClient) {
		this.walletClient = walletClient;
		this.publicClient = publicClient;
	}

	public async sendToken(
		tokenAddress: Address,
		amount: bigint,
		recipient: Address
	): Promise<Hash> {
		const txHash = await this.walletClient.writeContract({
			address: tokenAddress,
			abi: erc20Abi,
			functionName: 'transfer',
			args: [recipient, amount],
			chain: this.walletClient.chain,
			account: this.walletClient.account!,
		});

		const { status } = await this.publicClient.waitForTransactionReceipt({
			hash: txHash,
		});

		if (status !== 'success') {
			throw new Error('Error sending token');
		}

		return txHash;
	}
}
