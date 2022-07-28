import styles from "./styles.module.scss";
import Oneport1 from "/assets/images/oneport/oneport1.png";
import Oneport2 from "/assets/images/oneport/oneport2.png";
import Oneport3 from "/assets/images/oneport/oneport3.png";

import DevPortal1 from "/assets/images/devportal/devportal1.png";
import DevPortal2 from "/assets/images/devportal/devportal2.png";
import DevPortal3 from "/assets/images/devportal/devportal3.png";

import SAV1 from "/assets/images/sav/sav1.png";
import SAV2 from "/assets/images/sav/sav2.png";
import SAV3 from "/assets/images/sav/sav3.png";

import ContainerHeading from "../ContainerHeading";
import Link from "next/link";
import CustomImage from "../CustomImage";
import { useEffect, useState } from "react";

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
                <a>Live Demo</a>
              </Link>
            </button>
          )}

          {data.code !== "" && (
            <button className={`${styles.project_button} button`}>
              <Link href={data.code}>
                <a>Source Code</a>
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

const projects = [
  {
    title: "OnePort",
    description: `OnePort is a link-in-bio cum website builder platform,built using NextJs, Sass and Contentful.\n\nIt uses blocks instead of traditional cards (found in most link-in-bio sites) to represent data in an systematic and organiser manner.`,
    code: "https://google.com",
    demo: "https://google.com",
    images: [Oneport1, Oneport2, Oneport3],
  },
  {
    title: "OnePort",
    description: `OnePort is a link-in-bio cum website builder platform,built using NextJs, Sass and Contentful.\n\nIt uses blocks instead of traditional cards (found in most link-in-bio sites) to represent data in an systematic and organiser manner.`,
    code: "https://google.com",
    demo: "https://google.com",
    images: [DevPortal1, DevPortal2, DevPortal3],
  },
  {
    title: "OnePort",
    description: `OnePort is a link-in-bio cum website builder platform,built using NextJs, Sass and Contentful.\n\nIt uses blocks instead of traditional cards (found in most link-in-bio sites) to represent data in an systematic and organiser manner.`,
    code: "https://google.com",
    demo: "https://google.com",
    images: [SAV1, SAV2, SAV3],
  },
];
