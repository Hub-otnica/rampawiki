import { rm } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "dist-wiki");

function runCommand(command, args, env = process.env) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDir,
      stdio: "inherit",
      shell: false,
      env,
    });

    child.on("exit", (code, signal) => {
      if (signal) {
        reject(new Error(`${command} ${args.join(" ")} exited with signal ${signal}`));
        return;
      }

      if (code && code !== 0) {
        reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
        return;
      }

      resolve();
    });
  });
}

async function main() {
  await runCommand("node", ["scripts/prepare-knowledge-wiki.mjs"]);
  await rm(outputDir, { recursive: true, force: true });
  await runCommand("npm", ["--prefix", "wiki", "run", "quartz", "--", "build", "-o", "../dist-wiki"], {
    ...process.env,
    QUARTZ_BASE_URL: process.env.QUARTZ_BASE_URL || "localhost:8081",
    STANDALONE_WIKI: "true",
  });
  await runCommand("node", ["scripts/finalize-knowledge-output.mjs", "dist-wiki"]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
