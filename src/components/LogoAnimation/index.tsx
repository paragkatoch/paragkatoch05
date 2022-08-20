import { motion } from "framer-motion";
import { CSSProperties } from "react";

export default function LogoAnimation() {
	const duration = 2;

	const icon = {
		hidden: {
			opacity: 0,
			pathLength: 0,
			fill: getColor("0"),
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			fill: getColor("1"),
		},
	};

	const circle = {
		hidden: {
			pathLength: 0,
			strokeWidth: 0,
			stroke: getColor("0.5"),
		},
		visible: {
			pathLength: 1,
			strokeWidth: 5,
			stroke: getColor("1"),
		},
	};

	return (
		<section style={containerStyle}>
			<span style={wrapperStyle}>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 56 56"
					className="item"
					style={iconStyle as CSSProperties}
				>
					<motion.path
						d="M45.276 42.256C45.276 43.824 44.898 45.294 44.142 46.666C43.414 48.038 42.252 49.144 40.656 49.984C39.088 50.824 37.1 51.244 34.692 51.244H29.778V62.5H23.898V33.184H34.692C36.96 33.184 38.892 33.576 40.488 34.36C42.084 35.144 43.274 36.222 44.058 37.594C44.87 38.966 45.276 40.52 45.276 42.256ZM34.44 46.498C36.064 46.498 37.268 46.134 38.052 45.406C38.836 44.65 39.228 43.6 39.228 42.256C39.228 39.4 37.632 37.972 34.44 37.972H29.778V46.498H34.44ZM65.9987 62.5L55.3307 49.438V62.5H49.4507V33.184H55.3307V46.33L65.9987 33.184H73.0967L61.0007 47.716L73.4327 62.5H65.9987Z"
						variants={icon}
						initial="hidden"
						animate="visible"
						transition={{
							default: { duration, ease: "easeInOut" },
							fill: { duration, ease: [1, 0, 0.8, 1] },
						}}
					/>

					<motion.circle
						cx="48"
						cy="48"
						r="45.5"
						fill="none"
						variants={circle}
						strokeWidth={5}
						initial="hidden"
						animate="visible"
						transition={{
							default: { duration, ease: "easeInOut" },
							stroke: { duration, ease: [1, 0, 0.8, 1] },
						}}
					/>
				</motion.svg>
			</span>
		</section>
	);
}

function getColor(opacity: string) {
	const rgbColorCode = "64,119,174";

	return `rgba(${rgbColorCode}, ${opacity})`;
}

const containerStyle = {
	display: "flex",
	minHeight: "calc(var(--vh, 1vh) * 100)",
	alignItems: "center",
	justifyContent: "center",
};
const wrapperStyle = {
	width: "100px",
	height: "100px",
};
const iconStyle = {
	width: "56px",
	overflow: "visible",
	stroke: getColor("1"),
	strokeWidth: 1,
	strokeLinejoin: "round",
	strokeLinecap: "round",
};
