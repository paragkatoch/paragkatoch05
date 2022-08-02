import { useEffect, useState } from "react";
import { theme } from "src/content/types";
import { themes } from "../content";

/**
 * Hook manages theme
 * @param defaultTheme default theme based on themes
 * @param callback function to run when colorScheme changes
 * @returns theme and toggle theme function
 */
export default function useColorTheme(
	defaultTheme: theme,
	callback: (theme: theme, availableThemes: typeof themes) => void = () => {}
): [theme, () => void] {
	const [theme, setTheme] = useState<theme>("");

	function toggleTheme() {
		setTheme((prev) => {
			return prev === themes.light ? themes.dark : themes.light;
		});
	}

	// set theme
	useEffect(() => {
		if (isThemeValid(defaultTheme)) {
			setTheme(defaultTheme);
		} else {
			// set system theme
			const queryString = "(prefers-color-scheme: dark)";
			const systemTheme = window.matchMedia(queryString);
			setTheme(systemTheme?.matches ? themes.dark : themes.light);
		}
	}, [defaultTheme]);

	// callback when theme changes
	useEffect(() => {
		if (theme) {
			callback(theme, themes);
		}
	}, [theme, callback]);

	return [theme, toggleTheme];
}

// check if the theme is valid
const isThemeValid = (theme: theme) => {
	return typeof theme === "string" && Object.keys(themes).includes(theme);
};
