import Link from "next/link";
import ContainerHeading from "../ContainerHeading";
import styles from "./styles.module.scss";
import { contactContent } from "../../content/contact";
import { mail } from "../../content";
import { aboutContent } from "../../content/about";

export default function Contact() {
  return (
    <section id={aboutContent.id} className={styles.skillSet}>
      <ContainerHeading title={contactContent.title} />

      <section className={styles.content}>
        <h1 className="h1">{contactContent.heading}</h1>
        <p className="p2">{contactContent.description}</p>

        <Link href={`mailto:${mail}`}>
          <a className={`${styles.connect_button} button p2`}>
            {contactContent.buttonText}
          </a>
        </Link>
      </section>
    </section>
  );
}
