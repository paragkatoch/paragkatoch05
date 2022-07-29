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
import { footer, repo, schemes } from "../content";
import setTrueHeight from "../components/Setup/setTrueHeight";

export default function Home() {
  return (
    <AnimatePresence>
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
