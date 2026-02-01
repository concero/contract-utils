import type { Address, Hash, Hex, PublicClient } from 'viem';
export interface ITrezorViemParams {
    publicClient: PublicClient;
}
export interface ITrezorParams {
    path: string | number[];
    showFromAddressOnTrezor?: boolean;
    forceLegacy?: boolean;
}
export interface ITrezorTxParams {
    to?: Address;
    value?: bigint;
    data?: Hex;
    gas?: bigint;
    nonce?: number;
    gasPrice?: bigint;
    maxFeePerGas?: bigint;
    maxPriorityFeePerGas?: bigint;
}
export declare function trezorSendTx(viemParams: ITrezorViemParams, txParams: ITrezorTxParams, trezorPrams?: ITrezorParams): Promise<Hash>;
