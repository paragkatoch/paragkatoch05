/**
 * Calculate and set vh value from available window height
 */
export default function setTrueHeight() {
	/* 	
		- - - Useage - - -

		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
	 */

	const setWindowHeight = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	setWindowHeight();
	window.addEventListener("resize", setWindowHeight);

	return () => {
		window.removeEventListener("resize", setWindowHeight);
	};
}
