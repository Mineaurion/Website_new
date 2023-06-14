// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap",
        },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  css: [
    // CSS file in the project
    "@/assets/css/app.css",
    // SCSS file in the project
    "@/node_modules/css-reset-and-normalize/css/reset-and-normalize.min.css",
  ],
  modules: [
    // Simple usage
    "@nuxtjs/eslint-module",
    // With options
  ],
  eslint: {
    emitError: true,
  },
  devServer: {
    port: 3000,
    url: "http://localhost:3000",
  },
});
