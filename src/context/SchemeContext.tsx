import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { scheme } from "src/content/types";
import { schemes } from "../content";

const SchemeContext = createContext<[scheme, (scheme: scheme) => void]>([
	"",
	() => {},
]);

export const useColorScheme = (): [scheme, (scheme: scheme) => void] => {
	return useContext(SchemeContext) ?? [];
};

export default function SchemeProvider({
	children,
	scheme = schemes.classic,
}: {
	children: ReactNode;
	scheme: scheme;
}) {
	const [colorScheme, setColorScheme] = useState<scheme>("");

	useEffect(() => {
		document.body.classList.add(scheme);
		setColorScheme(scheme);
	}, [scheme]);

	const changeColorScheme = (scheme: scheme) => {
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
