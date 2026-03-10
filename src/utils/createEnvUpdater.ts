import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { getNetworkEnvKey } from "../networks/getNetworkEnvKey";
import log from "./log";

export interface EnvUpdaterConfig<TPrefixes extends Record<string, string>> {
	prefixes: TPrefixes;
	basePath: string;
}

export function createEnvUpdater<
	TPrefixes extends Record<string, string>,
	TEnvFileName extends string,
>(config: EnvUpdaterConfig<TPrefixes>) {
	function updateEnvVariable(
		key: string,
		newValue: string,
		envFileName: TEnvFileName,
	): void {
		const filePath = path.join(config.basePath, `.env.${envFileName}`);

		if (!existsSync(filePath)) {
			throw new Error(`File not found: ${filePath}`);
		}

		const envContents = readFileSync(filePath, "utf8");
		let lines = envContents.split(/\r?\n/);

		const keyExists = lines.some(line => line.startsWith(`${key}=`));

		if (!keyExists) {
			log(
				`Key ${key} not found in .env file. Adding to ${filePath}`,
				"updateEnvVariable",
			);
			lines.push(`${key}=${newValue}`);
		} else {
			lines = lines.map(line => {
				const [currentKey] = line.split("=");
				if (currentKey === key) {
					return `${key}=${newValue}`;
				}
				return line;
			});
		}

		writeFileSync(filePath, lines.join("\n"));
		process.env[key] = newValue;
	}

	function updateEnvAddress(
		prefix: keyof TPrefixes,
		newValue: string,
		envFileName: TEnvFileName,
		networkPostfix?: string,
	): void {
		const searchKey = networkPostfix
			? `${config.prefixes[prefix]}_${getNetworkEnvKey(networkPostfix)}`
			: String(config.prefixes[prefix]);

		updateEnvVariable(searchKey, newValue, envFileName);
	}

	return { updateEnvVariable, updateEnvAddress };
}
