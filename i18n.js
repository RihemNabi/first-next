// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./public/locales/en/translation.json";
import frTranslations from "./public/locales/fr/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
