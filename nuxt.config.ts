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
  meta: {
    title: "Rock, Paper, Scissors - OyewoleOyedeji",
    meta: [
      {
        name: "title",
        content: "Rock, Paper, Scissors - OyewoleOyedeji",
      },
      {
        name: "description",
        content:
          "Frontend Mentor - Rock, paper, scissors challenge solved by OyewoleOyedeji",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/favicon-32x32.png",
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
});
