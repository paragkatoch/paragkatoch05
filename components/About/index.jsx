import ContainerHeading from "../ContainerHeading";
import { aboutContent } from "../../content/about";
import styles from "./styles.module.scss";

export default function About() {
  return (
    <section id={aboutContent.id} className={styles.about}>
      <ContainerHeading title={aboutContent.title} />

      <main className={styles.content}>
        <section className={styles.content_container}>
          <p className={`${styles.description} p1`}>
            {aboutContent.description}
          </p>
        </section>

        <section className={styles.content_container}>
          <div className={styles.profile_pic}>
            <aboutContent.ProfileImageBg />
          </div>
        </section>
      </main>
    </section>
  );
}
