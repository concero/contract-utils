import {
	Address,
	erc20Abi,
	formatUnits,
	Hash,
	parseUnits,
	PublicClient,
	WalletClient,
} from 'viem';

export class TokenSender {
	private walletClient: WalletClient;
	private publicClient: PublicClient;

	constructor(walletClient: WalletClient, publicClient: PublicClient) {
		this.walletClient = walletClient;
		this.publicClient = publicClient;
	}

	public async sendToken(
		tokenAddress: Address,
		amount: string,
		recipient: Address
	): Promise<Hash> {
		const [tokenDecimals, tokenSymbol, tokenBalance] = await Promise.all([
			this.publicClient.readContract({
				address: tokenAddress,
				abi: erc20Abi,
				functionName: 'decimals',
				args: [],
			}),
			this.publicClient.readContract({
				address: tokenAddress,
				abi: erc20Abi,
				functionName: 'symbol',
				args: [],
			}),
			this.publicClient.readContract({
				address: tokenAddress,
				abi: erc20Abi,
				functionName: 'balanceOf',
				args: [this.walletClient.account?.address!],
			}),
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
			functionName: 'transfer',
			args: [recipient, parseUnits(amount, tokenDecimals)],
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
