import { useEffect } from "react";

/**
 * Calculate and set vh value from available window height
 */
export default function TrueHeight() {
	useEffect(() => {
		/* Ads --vh = true 1% available viewport of screen */

		const setWindowHeight = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};

		setWindowHeight();
		window.addEventListener("resize", setWindowHeight);

		return () => {
			window.removeEventListener("resize", setWindowHeight);
		};
	}, []);

	return <></>;
}
