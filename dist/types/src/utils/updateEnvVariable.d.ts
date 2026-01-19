import { ConceroNetworkNames } from "../../types/ConceroNetwork";
import { EnvFileName, EnvPrefixes } from "../../types/deploymentVariables";
export type ContractPrefix = keyof EnvPrefixes;
export declare function updateEnvVariable(key: string, newValue: string, envFileName: EnvFileName): void;
export declare function updateEnvAddress(prefix: ContractPrefix, newValue: string, envFileName: EnvFileName, networkPostfix?: ConceroNetworkNames | string): void;
export default updateEnvVariable;
