import Link from "next/link";
import { useColorScheme } from "../../context/SchemeContext";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import { mail, schemes } from "../../content";
import { heroContent, socialLinks } from "../../content/hero";
import Hexagon from "../../content/hero/assets/hexagon.svg";
import { scheme } from "src/content/types";

export default function Hero() {
	const [, setColorScheme] = useColorScheme();

	return (
		<section id={heroContent.id} className={styles.hero}>
			<section className={styles.content}>
				<section className={styles.text}>
					<p className="p1">{heroContent.eyebrow}</p>
					<h1 className="h1">{heroContent.heading}</h1>
					<h2 className="h1">{heroContent.subHeading}</h2>

					<p className="p2">{heroContent.description}</p>
				</section>

				<Link href={`mailto:${mail}`}>
					<a className={`${styles.connect_button} button p2`}>
						{heroContent.buttonText}
					</a>
				</Link>

				<div className={styles.social}>
					{socialLinks.map(({ Icon, url }, index) => (
						<Link href={url} key={index}>
							<a
								target="_blank"
								className={`${styles.social_handle} container`}
							>
								<motion.span
									initial={{ scale: 0.9 }}
									whileHover={{ scale: 1 }}
									whileTap={{ scale: 0.9 }}
									className={styles.icon_container}
								>
									<Icon />
								</motion.span>
							</a>
						</Link>
					))}
				</div>
			</section>

			<section className={styles.code_schemes}>
				<section className={`${styles.code} container`}>
					<pre dangerouslySetInnerHTML={{ __html: heroContent.code }}></pre>
				</section>

				<section className={`${styles.schemes} container`}>
					{Object.keys(schemes).map((scheme, index) => {
						return (
							<button
								key={index}
								onClick={() => setColorScheme(scheme as scheme)}
							>
								<motion.span
									initial={{ scale: 1 }}
									whileHover={{ scale: 0.9 }}
									whileTap={{ animationDelay: "0.3s", scale: 0.7 }}
									className={`${styles[scheme]} container`}
								></motion.span>
							</button>
						);
					})}
				</section>
			</section>

			<div className={styles.hexagon}>
				<Hexagon />
			</div>
		</section>
	);
}
