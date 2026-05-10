import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const baseUrl = process.env.QUARTZ_BASE_URL || "localhost:5173/knowledge"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Rampa baza znanja",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "sl-SI",
    baseUrl,
    ignorePatterns: ["private", "templates", ".obsidian", "**/.gitkeep"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Sans",
        body: "IBM Plex Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fffaf5",
          lightgray: "#e2e8f0",
          gray: "#94a3b8",
          darkgray: "#475569",
          dark: "#0f172a",
          secondary: "#e11d48",
          tertiary: "#0ea5e9",
          highlight: "rgba(14, 165, 233, 0.12)",
          textHighlight: "#fde68a88",
        },
        darkMode: {
          light: "#111827",
          lightgray: "#334155",
          gray: "#64748b",
          darkgray: "#cbd5e1",
          dark: "#f8fafc",
          secondary: "#fb7185",
          tertiary: "#38bdf8",
          highlight: "rgba(56, 189, 248, 0.18)",
          textHighlight: "#facc1588",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: false,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
