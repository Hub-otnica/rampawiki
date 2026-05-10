import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const isStandaloneWiki = process.env.STANDALONE_WIKI === "true"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: isStandaloneWiki ? [] : [Component.RampaHomeLink()],
  afterBody: [],
  footer: Component.Footer({
    links: isStandaloneWiki
      ? {
          "Baza znanja": "/",
        }
      : {
          "Nazaj na Rampo": "/",
          "Baza znanja": "/knowledge/index.html",
        },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.15,
        repelForce: 0.7,
        centerForce: 0.35,
        linkDistance: 38,
        fontSize: 0.8,
        showTags: false,
        enableRadial: true,
      },
      globalGraph: {
        scale: 0.9,
        repelForce: 0.6,
        centerForce: 0.25,
        linkDistance: 42,
        fontSize: 0.75,
        showTags: false,
        enableRadial: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
