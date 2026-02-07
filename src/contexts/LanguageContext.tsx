import React, { createContext, useContext, useState, useEffect } from "react";
import {
  translations,
  getStoredLocale,
  setStoredLocale,
  type Locale,
} from "@/i18n/translations";

type LanguageContextType = {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "es";
    return getStoredLocale();
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    setStoredLocale(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] ?? translations.es[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
