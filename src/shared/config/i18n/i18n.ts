import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources, type Language } from "./locales";

export const languages = Object.keys(resources) as Language[];
export const defaultLanguage: Language = "en";
export const languageStorageKey = "lng";

const storedLanguage = localStorage.getItem(languageStorageKey);
const initialLanguage =
  storedLanguage && storedLanguage in resources
    ? (storedLanguage as Language)
    : defaultLanguage;

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(languageStorageKey, lng);
});

export { i18n };
