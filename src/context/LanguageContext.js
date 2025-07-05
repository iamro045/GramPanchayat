import { createContext, useState, useContext } from "react";
import translations from "../locales/lang.json";

const LanguageContext = createContext();

export const useLang = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang(prev => (prev === "en" ? "mr" : "en"));
  };

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
