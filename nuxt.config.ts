export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@kevinmarrec/nuxt-pwa",
    "nuxt-fonty",
  ],
  ssr: false,
  app: {
    head: {
      title: "Rock, paper, scissors - OyedejiOyewole",
      meta: [
        {
          name: "description",
          content:
            "Frontend Mentor - Rock, paper, scissors challenge solved by OyewoleOyedeji",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          sizes: "32x32",
          href: "/favicon.svg",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  pwa: {
    meta: {
      theme_color: "#182043",
    },
    manifest: {
      name: "Rock, paper, scissors - OyewoleOyedeji",
      short_name: "Rock, paper, scissors",
      description:
        "Frontend Mentor - Rock, paper, scissors challenge solved by OyewoleOyedeji",
    },
    icon: {
      fileName: "favicon.svg",
    },
  },
  fonty: {
    autoImport: true,
  },
});
