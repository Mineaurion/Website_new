import { Icon } from "@iconify/vue";

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Icon", Icon);
});
