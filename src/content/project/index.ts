import Oneport1 from "./assets/oneport/oneport1.png";
import Oneport2 from "./assets/oneport/oneport2.png";
import Oneport3 from "./assets/oneport/oneport3.png";

import DevPortal1 from "./assets/devportal/devportal1.png";
import DevPortal2 from "./assets/devportal/devportal2.png";
import DevPortal3 from "./assets/devportal/devportal3.png";

import Portfolio1 from "./assets/portfolio/blue.png";
import Portfolio2 from "./assets/portfolio/green.png";
import Portfolio3 from "./assets/portfolio/red.png";
import Portfolio4 from "./assets/portfolio/white.png";

import SAV1 from "./assets/sav/sav1.png";
import SAV2 from "./assets/sav/sav2.png";
import SAV3 from "./assets/sav/sav3.png";

export const projectContent = {
	id: "work",
	title: "Projects",
	projects: [
		{
			title: "OnePort",
			description: `OnePort is a link-in-bio cum website builder platform,built using NextJs, Sass and Contentful.\n\nIt uses blocks instead of traditional cards (found in most link-in-bio sites) to represent data in an systematic and organiser manner.`,
			code: "",
			demo: "https://www.oneport.osenorth.co",
			images: [Oneport1, Oneport2, Oneport3],
		},
		{
			title: "My Portfolio Website",
			description: `My Portfolio Website designed using figma and built using NextJs, Sanity and SASS.`,
			code: "https://github.com/paragkatoch/paragkatoch05",
			demo: "https://paragkatoch.vercel.app/",
			images: [Portfolio1, Portfolio2, Portfolio3, Portfolio4],
		},
		{
			title: "Dev-Portal",
			description: `Dev-Portal is a project to collection of various development and technical resources, presented in a structured and organised manner.\n\nBuilt using React.`,
			code: "https://github.com/paragkatoch/DEV-Portal",
			demo: "https://dev--portal.vercel.app/",
			images: [DevPortal1, DevPortal2, DevPortal3],
		},
		{
			title: "Sorting Algorithm Visualizer",
			description: `Sorting Algorithm Visualizer presents the working of various sorting algorithms graphically, built using React.\n\nAlgorithms available: Merge Sort, Quick Sort, Bubble Sort, Selection Sort, Insertion Sort.`,
			code: "https://github.com/paragkatoch/sorting-algo-visualizer",
			demo: "https://paragkatoch.github.io/sorting-algo-visualizer/",
			images: [SAV1, SAV2, SAV3],
		},
	],
};
