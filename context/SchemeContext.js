import React, { createContext, useContext, useEffect, useState } from "react";
import { schemes } from "../content";

const SchemeContext = createContext([]);

export const useColorScheme = () => {
  return useContext(SchemeContext) ?? [];
};

export default function SchemeProvider({ children, scheme = schemes.classic }) {
  const [colorScheme, setColorScheme] = useState("");

  useEffect(() => {
    document.body.classList.add(scheme);
    setColorScheme(scheme);
  }, [scheme]);

  const changeColorScheme = (scheme) => {
    document.body.classList.remove(colorScheme);
    document.body.classList.add(scheme);
    setColorScheme(scheme);
  };

  return (
    <SchemeContext.Provider value={[colorScheme, changeColorScheme]}>
      {children}
    </SchemeContext.Provider>
  );
}
