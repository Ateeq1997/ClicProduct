import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import it from "./locales/it.json";

const savedLang = localStorage.getItem("lang") || "en"; // get saved language if exists

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      it: { translation: it },
    },
    lng: savedLang,      // use saved language or default to English
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
