export interface EnvUpdaterConfig<TPrefixes extends Record<string, string>> {
    prefixes: TPrefixes;
    basePath: string;
}
export declare function createEnvUpdater<TPrefixes extends Record<string, string>, TEnvFileName extends string>(config: EnvUpdaterConfig<TPrefixes>): {
    updateEnvVariable: (key: string, newValue: string, envFileName: TEnvFileName) => void;
    updateEnvAddress: (prefix: keyof TPrefixes, newValue: string, envFileName: TEnvFileName, networkPostfix?: string) => void;
};
