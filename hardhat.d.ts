import 'hardhat/types/runtime';

declare module 'hardhat/types/runtime' {
	interface HardhatRuntimeEnvironment {
		tenderly?: {
			verify(params: { name: string; address: string }): Promise<void>;
		};
	}
}
