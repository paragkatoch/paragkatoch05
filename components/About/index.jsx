import ContainerHeading from "../ContainerHeading";
import styles from "./styles.module.scss";
import ProfileImageBg from "/assets/icons/profile.svg";

const description =
  "Hello! My name is Parag Katoch, a self-taught frontend developer from New Delhi, India. I like exploring new technologies, and enjoy bringing ideas to the Web.\n\nI’m currently working at osenorth as a frontend engineer, busy designing and building creative digital products and services.";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <ContainerHeading title="About me" />

      <main className={styles.content}>
        <section className={styles.content_container}>
          <p className={`${styles.description} p1`}>{description}</p>
        </section>

        <section className={styles.content_container}>
          <div className={styles.profile_pic}>
            <ProfileImageBg />
          </div>
        </section>
      </main>
    </section>
  );
}
