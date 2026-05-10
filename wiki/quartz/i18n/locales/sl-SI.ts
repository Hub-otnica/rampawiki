import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Brez naslova",
    description: "Opis ni na voljo",
  },
  components: {
    callout: {
      note: "Opomba",
      abstract: "Povzetek",
      info: "Info",
      todo: "Naloga",
      tip: "Namig",
      success: "Uspeh",
      question: "Vprasanje",
      warning: "Opozorilo",
      failure: "Napaka",
      danger: "Nevarnost",
      bug: "Hrosc",
      example: "Primer",
      quote: "Citat",
    },
    backlinks: {
      title: "Povratne povezave",
      noBacklinksFound: "Ni povratnih povezav",
    },
    themeToggle: {
      lightMode: "Svetli nacin",
      darkMode: "Temni nacin",
    },
    readerMode: {
      title: "Bralni nacin",
    },
    explorer: {
      title: "Raziskovalec",
    },
    footer: {
      createdWith: "Ustvarjeno z",
    },
    graph: {
      title: "Graf povezav",
    },
    recentNotes: {
      title: "Nedavni zapiski",
      seeRemainingMore: ({ remaining }) => `Poglej se ${remaining} vec ->`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Vkljucen del zapisa ${targetSlug}`,
      linkToOriginal: "Odpri izvirnik",
    },
    search: {
      title: "Iskanje",
      searchBarPlaceholder: "Poisci zapisek, pojem ali delavnico",
    },
    tableOfContents: {
      title: "Kazalo",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} min branja`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Nedavni zapiski",
      lastFewNotes: ({ count }) => `Zadnjih ${count} zapiskov`,
    },
    error: {
      title: "Ni najdeno",
      notFound: "Ta stran je zasebna ali pa ne obstaja.",
      home: "Nazaj na zacetek",
    },
    folderContent: {
      folder: "Mapa",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 vsebina v tej mapi." : `${count} vsebin v tej mapi.`,
    },
    tagContent: {
      tag: "Oznaka",
      tagIndex: "Kazalo oznak",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 vsebina s to oznako." : `${count} vsebin s to oznako.`,
      showingFirst: ({ count }) => `Prikazanih prvih ${count} oznak.`,
      totalTags: ({ count }) => `Skupno najdenih oznak: ${count}.`,
    },
  },
} as const satisfies Translation
