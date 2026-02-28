import en from "./en";
import ru from "./ru";
import ja from "./ja";

export const resources = {
  en: { translation: en },
  ru: { translation: ru },
  ja: { translation: ja },
} as const;

export type Language = keyof typeof resources;
