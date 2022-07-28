import React, { createContext, useContext } from "react";
import useColorTheme from "../hooks/useColorTheme";
import { themes } from "../data";

const ThemeContext = createContext([]);

export const useTheme = () => {
  return useContext(ThemeContext) ?? [];
};

export default function ThemeProvider({ children, theme }) {
  const [colorTheme, toggleColorScheme] = useColorTheme(theme, changeTheme);

  return (
    <ThemeContext.Provider value={[colorTheme, toggleColorScheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

const changeTheme = (theme) => {
  theme === themes.dark
    ? document.body.classList.add(themes.dark)
    : document.body.classList.remove(themes.dark);
};
