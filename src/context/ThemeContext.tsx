import { createContext, ReactNode, useContext } from "react";
import useColorTheme from "../hooks/useColorTheme";
import { themes } from "../content";
import { theme } from "src/content/types";

const ThemeContext = createContext<[theme, () => void]>(["", () => {}]);

export const useTheme = (): [theme, () => void] => {
	return useContext(ThemeContext);
};

export default function ThemeProvider({
	children,
	theme = "",
}: {
	children: ReactNode;
	theme?: theme;
}) {
	const [colorTheme, toggleColorScheme] = useColorTheme(theme, changeTheme);

	return (
		<ThemeContext.Provider value={[colorTheme, toggleColorScheme]}>
			{children}
		</ThemeContext.Provider>
	);
}

const changeTheme = (theme: theme) => {
	theme === themes.dark
		? document.body.classList.add(themes.dark)
		: document.body.classList.remove(themes.dark);
};
