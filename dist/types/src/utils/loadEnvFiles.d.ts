export interface DotEnvLoaderConfig {
    baseFiles: string[];
    stageFiles?: string[];
    deploymentFiles?: string[];
}
export declare function createDotEnvLoader(config: DotEnvLoaderConfig): (basePath?: string) => void;
