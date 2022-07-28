import styles from "./styles.module.scss";

import ContainerHeading from "../ContainerHeading";
import Link from "next/link";
import CustomImage from "../CustomImage";
import { useEffect, useState } from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section id="work" className={styles.projects}>
      <ContainerHeading title="Projects" />

      <section className={styles.projects_container}>
        {projects.map((item, index) => (
          <Project key={index} data={{ ...item }} />
        ))}
      </section>
    </section>
  );
}

function Project({ data }) {
  const [active, setActive] = useState();

  useEffect(() => {
    setActive(0);
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      const length = data.images.length;
      const next = active === length - 1 ? 0 : active + 1;
      setActive(next);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [active, data.images.length]);

  function handleClick(index) {
    setActive(index);
  }

  return (
    <section className={`${styles.project} container`}>
      <section className={styles.data}>
        <section className={styles.text}>
          <h2 className="h2">{data.title}</h2>
          <p className="p2">{data.description}</p>
        </section>

        <section className={styles.project_buttons}>
          {data.demo !== "" && (
            <button className={`${styles.project_button} button`}>
              <Link href={data.demo}>
                <a target="_blank">Live Demo</a>
              </Link>
            </button>
          )}

          {data.code !== "" && (
            <button className={`${styles.project_button} button`}>
              <Link href={data.code}>
                <a target="_blank">Source Code</a>
              </Link>
            </button>
          )}
        </section>
      </section>

      <section className={styles.carousel}>
        <section className={styles.image_slide} style={{ "--index": active }}>
          <section className={styles.image_container}>
            {data.images.map((image, index) => (
              <CustomImage
                key={index}
                src={image}
                alt={data.title}
                style={styles.image}
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
              />
            ))}
          </section>
        </section>

        <section className={styles.slider}>
          {data.images.map((_, index) => (
            <span
              key={index}
              className={`${active === index ? styles.active : ""}`}
              onClick={() => handleClick(index)}
            ></span>
          ))}
        </section>
      </section>
    </section>
  );
}
