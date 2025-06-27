import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../i18n/locales/en/translation.json";
import az from "../i18n/locales/az/translation.json";
import ru from "../i18n/locales/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": { translation: en },
    "az-AZ": { translation: az },
    "ru-RU": { translation: ru },
  },
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
