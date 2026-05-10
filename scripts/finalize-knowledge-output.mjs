import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
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
  const rawHtml = await readFile(htmlFilePath, "utf8");
  const aliasHtml = rewriteRelativeUrlsForNestedAlias(rawHtml);

  await mkdir(aliasDir, { recursive: true });
  await writeFile(aliasIndex, aliasHtml, "utf8");
}

function isRelativeUrl(value) {
  return (
    value &&
    !value.startsWith("#") &&
    !value.startsWith("/") &&
    !value.startsWith("//") &&
    !/^[a-z][a-z0-9+.-]*:/i.test(value)
  );
}

function nestRelativeUrl(value) {
  return isRelativeUrl(value) ? `../${value}` : value;
}

function hasFileExtension(value) {
  const pathPart = value.split("#", 1)[0].split("?", 1)[0];
  const lastSegment = pathPart.split("/").pop() ?? "";

  return /\.[A-Za-z0-9]+$/.test(lastSegment);
}

function isPrettyInternalPageUrl(value) {
  return isRelativeUrl(value) && !value.endsWith("/") && !hasFileExtension(value);
}

function normalizePrettyInternalPageUrl(value) {
  return isPrettyInternalPageUrl(value) ? `${value}/` : value;
}

function rewriteInternalLinksToPrettyUrls(html) {
  return html
    .replace(/\bhref=(")([^"]+)(")/g, (_match, openQuote, value, closeQuote) => {
      return `href=${openQuote}${normalizePrettyInternalPageUrl(value)}${closeQuote}`;
    })
    .replace(/\bhref=(')([^']+)(')/g, (_match, openQuote, value, closeQuote) => {
      return `href=${openQuote}${normalizePrettyInternalPageUrl(value)}${closeQuote}`;
    });
}

function rewriteRelativeUrlsForNestedAlias(html) {
  return html
    .replace(/\b(href|src)=(")([^"]+)(")/g, (_match, attr, openQuote, value, closeQuote) => {
      return `${attr}=${openQuote}${nestRelativeUrl(value)}${closeQuote}`;
    })
    .replace(/\b(href|src)=(')([^']+)(')/g, (_match, attr, openQuote, value, closeQuote) => {
      return `${attr}=${openQuote}${nestRelativeUrl(value)}${closeQuote}`;
    })
    .replace(/\bfetch\((")([^"]+)(")\)/g, (_match, openQuote, value, closeQuote) => {
      return `fetch(${openQuote}${nestRelativeUrl(value)}${closeQuote})`;
    })
    .replace(/\bfetch\((')([^']+)(')\)/g, (_match, openQuote, value, closeQuote) => {
      return `fetch(${openQuote}${nestRelativeUrl(value)}${closeQuote})`;
    });
}

async function main() {
  const htmlFiles = await collectHtmlFiles(outputDir);

  for (const htmlFile of htmlFiles) {
    const rawHtml = await readFile(htmlFile, "utf8");
    const normalizedHtml = rewriteInternalLinksToPrettyUrls(rawHtml);

    if (normalizedHtml !== rawHtml) {
      await writeFile(htmlFile, normalizedHtml, "utf8");
    }

    await createPrettyUrlAlias(htmlFile);
  }

  console.log(`Created pretty URL aliases for ${htmlFiles.length} HTML files.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
