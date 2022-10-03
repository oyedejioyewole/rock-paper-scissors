// https://v3.nuxtjs.org/api/configuration/nuxt.config

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
      title: "Home",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          sizes: "32x32",
          href: "/images/favicon.svg",
        },
        {
          rel: "preconnect",
          href: "https://api.fonts.coollabs.io",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://api.fonts.coollabs.io/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css",
        },
      ],
    },
  },
  pwa: {
    meta: {
      name: "Home",
      description:
        "Frontend Mentor - Rock, paper, scissors challenge solved by OyewoleOyedeji",
      theme_color: "#182043",
    },
    manifest: {
      name: "Rock, paper, scissors - OyewoleOyedeji",
      short_name: "Rock, paper, scissors",
      description:
        "Frontend Mentor - Rock, paper, scissors challenge solved by OyewoleOyedeji",
    },
  },
});
