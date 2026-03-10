import { Address } from 'viem';
import { ITrezorParams } from './trezorSendTx';
export declare const getTrezorAddress: (path?: ITrezorParams["path"]) => Promise<Address>;
