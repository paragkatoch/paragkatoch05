import Link from "next/link";
import ContainerHeading from "../ContainerHeading";
import styles from "./styles.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.skillSet}>
      <ContainerHeading title="Let’s Talk" />

      <section className={styles.content}>
        <h1 className="h1">Get In Touch</h1>

        <p className="p2">
          Have something for me? or just wanna say “hi”? We should queue up a
          time to chat. I’ll buy the coffee.
        </p>

        <Link href="mailto:paragkatoch5@gmail.com">
          <a className={`${styles.connect_button} button p2`}>
            Let&apos;s Connect
          </a>
        </Link>
      </section>
    </section>
  );
}
