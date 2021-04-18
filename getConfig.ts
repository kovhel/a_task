import {Config} from "./types";
import * as fs from "fs";

export function getConfig(fileName: string): Config {
    const data = fs.readFileSync(fileName);
    return JSON.parse(data.toString()) as Config;
}
