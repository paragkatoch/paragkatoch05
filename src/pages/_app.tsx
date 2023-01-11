import { AppProps } from "next/app";
import "../styles/globals.scss";
import { Open_Sans } from "@next/font/google";
import localFont from "@next/font/local";
import Head from "next/head";
import TrueHeight from "src/components/Setup/setTrueHeight";

const openSans = Open_Sans({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-openSans",
});

const kano = localFont({
	src: [
		{
			path: "../assets/fonts/kano.otf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-kano",
});

function MyApp({ Component, pageProps }: AppProps) {
	<main className={`${openSans.variable} ${kano.variable} font-sans`}>
		<Head>
			{/* Used to apply overflow-x on body in mobile screens */}
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, minimum-scale=1"
			/>
		</Head>

		<TrueHeight />
		<Component {...pageProps} />
	</main>;
}

export default MyApp;
