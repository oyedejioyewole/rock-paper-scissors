export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@kevinmarrec/nuxt-pwa",
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
        {
          rel: "preconnect",
          href: "https://api.fonts.coollabs.io",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://api.fonts.coollabs.io/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap",
        },
        {
          rel: "preload",
          href: "/images/bg-triangle.svg",
          as: "image",
        },
        {
          rel: "preload",
          href: "/images/icon-paper.svg",
          as: "image",
        },
        {
          rel: "preload",
          href: "/images/icon-rock.svg",
          as: "image",
        },
        {
          rel: "preload",
          href: "/images/icon-scissors.svg",
          as: "image",
        },
        {
          rel: "preload",
          href: "/images/icon-lizard.svg",
          as: "image",
        },
        {
          rel: "preload",
          href: "/images/icon-spock.svg",
          as: "image",
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
});
