import ContainerHeading from "../ContainerHeading";
import styles from "./styles.module.scss";
import { skillSetContent } from "../../content/skillSet";

export default function SkillSet() {
  return (
    <section id={skillSetContent.id} className={styles.skillSet}>
      <ContainerHeading title={skillSetContent.title} />

      <section className={styles.tech_stack}>
        {Object.keys(skillSetContent.skills).map((item, index) => {
          let Icon = skillSetContent.skills[item];
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
