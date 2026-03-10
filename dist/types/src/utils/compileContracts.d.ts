interface HardhatCompileParams {
    concurrency?: number;
    force?: boolean;
    noSizeContracts?: boolean;
    noTypechain?: boolean;
    quiet?: boolean;
}
export declare function compileContracts({ quiet, force }: HardhatCompileParams): void;
export {};
