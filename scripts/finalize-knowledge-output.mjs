import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const outputDir = path.resolve(rootDir, process.argv[2] ?? path.join("public", "knowledge"));

async function collectHtmlFiles(dir, htmlFiles = []) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await collectHtmlFiles(entryPath, htmlFiles);
      continue;
    }

    if (path.extname(entry.name) === ".html") {
      htmlFiles.push(entryPath);
    }
  }

  return htmlFiles;
}

async function createPrettyUrlAlias(htmlFilePath) {
  const fileName = path.basename(htmlFilePath);

  if (fileName === "index.html" || fileName === "404.html") {
    return;
  }

  const parentDir = path.dirname(htmlFilePath);
  const baseName = path.basename(htmlFilePath, ".html");
  const aliasDir = path.join(parentDir, baseName);
  const aliasIndex = path.join(aliasDir, "index.html");

  await mkdir(aliasDir, { recursive: true });
  await copyFile(htmlFilePath, aliasIndex);
}

async function main() {
  const htmlFiles = await collectHtmlFiles(outputDir);

  for (const htmlFile of htmlFiles) {
    await createPrettyUrlAlias(htmlFile);
  }

  console.log(`Created pretty URL aliases for ${htmlFiles.length} HTML files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
