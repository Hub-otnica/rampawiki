import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const vaultDir = path.join(rootDir, "knowledge");
const contentDir = path.join(rootDir, "wiki", "content");

const publishedSections = [
  "00_Zacetek",
  "Delavnice",
  "Koncepti",
  "Materiali",
  "Metode",
  "Orodja",
  "Projekti",
  "Umetniki",
  "Zemljevidi",
];

const excludedMarkdownPaths = new Set([
  path.join("00_Zacetek", "Domov.md"),
  path.join("00_Zacetek", "Oznake in cssclasses.md"),
]);

const localFileLinkPattern = /\[([^\]]+)\]\((\/home\/[^)]+)\)/g;
const excludedWikiLinkLinePatterns = [
  /^\s*-\s*\[\[Oznake in cssclasses\]\]\s*$/gm,
  /^\s*-\s*\[\[Domov\]\]\s*$/gm,
];

function shouldExcludeMarkdownPath(relativePath) {
  return excludedMarkdownPaths.has(relativePath);
}

function sanitizeFrontmatter(markdown) {
  if (!markdown.startsWith("---\n")) {
    return markdown;
  }

  const closingIndex = markdown.indexOf("\n---\n", 4);

  if (closingIndex === -1) {
    return markdown;
  }

  const frontmatter = markdown.slice(4, closingIndex);
  const body = markdown.slice(closingIndex + 5);
  const nextFrontmatter = frontmatter.replace(/^oznake:/m, "tags:");

  return `---\n${nextFrontmatter}\n---${body}`;
}

function sanitizeMarkdown(markdown) {
  const withoutLocalFileLinks = markdown.replace(localFileLinkPattern, (_, label) => label);
  const withoutExcludedLinkLines = excludedWikiLinkLinePatterns.reduce(
    (value, pattern) => value.replace(pattern, ""),
    withoutLocalFileLinks,
  );

  return sanitizeFrontmatter(withoutExcludedLinkLines);
}

async function copyMarkdownTree(relativeDir) {
  const sourceDir = path.join(vaultDir, relativeDir);
  const targetDir = path.join(contentDir, relativeDir);

  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === ".gitkeep") {
      continue;
    }

    const entryRelativePath = path.join(relativeDir, entry.name);
    const sourcePath = path.join(vaultDir, entryRelativePath);
    const targetPath = path.join(contentDir, entryRelativePath);

    if (entry.isDirectory()) {
      await copyMarkdownTree(entryRelativePath);
      continue;
    }

    if (path.extname(entry.name) !== ".md") {
      continue;
    }

    if (shouldExcludeMarkdownPath(entryRelativePath)) {
      continue;
    }

    const rawMarkdown = await readFile(sourcePath, "utf8");
    const sanitizedMarkdown = sanitizeMarkdown(rawMarkdown);
    await writeFile(targetPath, sanitizedMarkdown, "utf8");
  }
}

async function collectNoteCount(relativeDir) {
  const sourceDir = path.join(vaultDir, relativeDir);
  const entries = await readdir(sourceDir, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    if (entry.isDirectory()) {
      count += await collectNoteCount(path.join(relativeDir, entry.name));
      continue;
    }

    if (path.extname(entry.name) === ".md" && !shouldExcludeMarkdownPath(path.join(relativeDir, entry.name))) {
      count += 1;
    }
  }

  return count;
}

async function ensureVaultExists() {
  const vaultStats = await stat(vaultDir);

  if (!vaultStats.isDirectory()) {
    throw new Error("The knowledge directory exists but is not a folder.");
  }
}

async function writeIndexPage(totalNotes) {
  const indexMarkdown = `---
title: Rampa baza znanja
description: Objavljena verzija Obsidian baze znanja za delavnice, metode, koncepte, materiale in referencne projekte.
---

# Rampa baza znanja

To je spletna objava baze znanja, ki jo urejamo v Obsidianu in povezujemo prek notranjih povezav.

## Zacni tukaj

- [[00_Zacetek/Pregled baze znanja|Pregled baze znanja]]
- [[Zemljevid delavnic]]
- [[Zemljevid metod]]
- [[Zemljevid konceptov]]
- [[Zemljevid umetnikov]]
- [[Zemljevid orodij]]
- [[Zemljevid materialov]]

## Kaj je vkljuceno v objavo

- ${totalNotes} markdown zapiskov iz javnega dela vaulta
- povezave med delavnicami, koncepti, umetniki, orodji in materiali
- lokalni in globalni graf povezav za hitro raziskovanje

## Trenutno ni vkljuceno

- surovi PDF-ji in druge priponke iz mape \`Viri\`
- predloge, Obsidian nastavitve in delovne datoteke za urejanje

## Kako brati bazo

- odpri zemljevide za pregled po sklopih
- v posameznem zapisku uporabi graf na desni za sorodne teme
- prek iskanja najdi delavnice, materiale ali umetniske reference
`;

  await writeFile(path.join(contentDir, "index.md"), indexMarkdown, "utf8");
}

async function main() {
  await ensureVaultExists();
  await rm(contentDir, { recursive: true, force: true });
  await mkdir(contentDir, { recursive: true });

  let totalNotes = 0;

  for (const section of publishedSections) {
    await copyMarkdownTree(section);
    totalNotes += await collectNoteCount(section);
  }

  await writeIndexPage(totalNotes);

  console.log(`Prepared Quartz content with ${totalNotes} notes.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
