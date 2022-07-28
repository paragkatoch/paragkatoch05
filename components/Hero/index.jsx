import styles from "./styles.module.scss";

import Link from "next/link";
import { useColorScheme } from "../../context/SchemeContext";
import { schemes, socialLinks } from "../../data";
import { motion } from "framer-motion";

export default function Hero() {
  const [, setColorScheme] = useColorScheme();

  return (
    <section id="home" className={styles.hero}>
      <section className={styles.content}>
        <section className={styles.text}>
          <p className="p1">Hello, I’m</p>
          <h1 className="h1">Parag Katoch</h1>
          <h2 className="h1">Frontend Web Developer</h2>

          <p className="p2">
            I’m a self-taught passionate FrontEnd developer from India,
            currently working at osenorth.
          </p>
        </section>

        <Link href="mailto:paragkatoch5@gmail.com">
          <a className={`${styles.connect_button} button p2`}>
            Let&apos;s Connect
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
          <pre dangerouslySetInnerHTML={{ __html: aboutCode }}></pre>
        </section>

        <section className={`${styles.schemes} container`}>
          {Object.keys(schemes).map((scheme, index) => {
            return (
              <motion.button
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.7 }}
                key={index}
                onClick={() => setColorScheme(scheme)}
                className={styles[scheme]}
              ></motion.button>
            );
          })}
        </section>
      </section>
    </section>
  );
}

const aboutCode = `1  class <b>Person</b> {
2      constructor() {
3        this.name = "<b>Parag Katoch</b>";
4        this.traits = ["design", "develop"];
5        this.age = new Date().getFullYear() - 2002;
6      }
7  }
`;
