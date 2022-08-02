/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { skillSetContent } from "src/content/skillSet";
import ContainerHeading from "../ContainerHeading";
import styles from "./styles.module.scss";

export default function SkillSet() {
	return (
		<section id={skillSetContent.id} className={styles.skillSet}>
			<ContainerHeading title={skillSetContent.title} />

			<section className={styles.tech_stack}>
				{Object.keys(skillSetContent.skills).map((item, index) => {
					const Icon =
						skillSetContent.skills[item as keyof typeof skillSetContent.skills];
					return (
						<span key={index} className="container">
							<Icon />
						</span>
					);
				})}
			</section>
		</section>
	);
}
