import { getInput, setFailed, setOutput } from "@actions/core";
import { readFile } from "node:fs/promises";

async function main(): Promise<void> {
  const path = getInput("path");
  const content = await readFile(path, "utf8");
  const obj = JSON.parse(content) as { version: string };
  if (typeof obj.version !== "string") {
    throw new Error(`Version is not a string in ${path}`);
  }
  setOutput("version", obj.version);
}

try {
  main();
} catch (error) {
  setFailed((error as Error).message);
}
