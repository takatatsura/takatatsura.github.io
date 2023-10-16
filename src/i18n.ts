import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import pt from "./locales/pt.json";

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages: {
    en,
    pt,
  },
});
