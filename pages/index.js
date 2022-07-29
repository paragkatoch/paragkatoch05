import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeProvider from "../context/ThemeContext";
import SchemeProvider from "../context/SchemeContext";

import About from "../components/About";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Scenery from "../components/Scenery";
import SkillSet from "../components/SkillSet";
import Hero from "../components/Hero";
import LogoAnimation from "../components/LogoAnimation";

import styles from "../styles/Home.module.scss";
import {
  description,
  footer,
  image,
  name,
  repo,
  schemes,
  url,
} from "../content";
import setTrueHeight from "../components/Setup/setTrueHeight";
import Head from "next/head";

export default function Home() {
  return (
    <AnimatePresence>
      <Head>
        <title>Parag Katoch</title>
        <MetaTags />
      </Head>
      <main className={`${styles.app}`}>
        <ThemeProvider>
          <SchemeProvider scheme={schemes.blue_night}>
            <Loader>
              <Nav duration={0.5} />
              <Hero />
              <About />
              <Scenery />
              <SkillSet />
              <Projects />
              <Contact />
              <footer>
                <Link href={repo}>
                  <a target="_blank" className="p2">
                    {footer}
                  </a>
                </Link>
              </footer>
            </Loader>
          </SchemeProvider>
        </ThemeProvider>
      </main>
    </AnimatePresence>
  );
}

function Loader({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setLoaded(true);
    setTrueHeight();

    setTimeout(() => {
      setAnimate(false);
    }, 3000);
  }, []);

  return loaded ? animate ? <LogoAnimation /> : children : <></>;
}

function MetaTags() {
  return (
    <>
      <meta key="og:locale" property="og:locale" content="en_IN" />
      <meta key="description" name="description" content={description} />

      <meta key="og:site_name" property="og:site_name" content="paragkatoch" />
      <meta key="og:title" property="og:title" content={name} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="og:image:url" property="og:image:secure_url" content={image} />
      <meta key="og:image:alt" property="og:image:alt" content={name} />

      <meta key="twitter:title" property="twitter:title" content={name} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta key="twitter:image" property="twitter:image" content={image} />
      <meta
        key="twitter:image:alt"
        property="twitter:image:alt"
        content={name}
      />
      <meta key="twitter:site" property="twitter:site" content={url} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
    </>
  );
}
