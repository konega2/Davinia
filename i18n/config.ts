export const locales = [
  "es",
  "en",
  "fr",
  "it",
  "de",
  "nl",
  "pt",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
