import React, { createContext, useState } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState("en");

  const value: LanguageContextType = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

// import { createContext, useEffect, useState } from "react";
// type LangContextType = "uz" | "ru";
// export const LangContext = createContext<LangContextType>("uz");

// export const LangProvider = ({ children }: any) => {
//   const [lang, setLang] = useState<any>("uz");

//   useEffect(() => {
//     localStorage.setItem("lang", lang);
//   }, [lang]);

//   return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
// };

// export const LangProvider = ({ children }: any) => {
//   const [lang, setLang] = useState<string>(
//     localStorage.getItem("theme") || "uz"
//   );

//   useEffect(() => {
//     localStorage.setItem("lang", lang);
//   }, [lang]);

//   return (
//     <LangContext.Provider value={ lang}>
//       {children}
//     </LangContext.Provider>
//   );
// };
