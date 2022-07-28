import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { themes } from "../../data";
import styles from "./styles.module.scss";
import Sun from "/assets/icons/theme/sun.svg";
import Moon from "/assets/icons/theme/moon.svg";
import Logo from "/assets/icons/logo.svg";
import Link from "next/link";

const navElements = ["home", "about", "skillset", "work", "contact"];

export default function Nav() {
  const [colorScheme, toggleColorScheme] = useTheme();
  const [change, setChange] = useState();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && lastScrollY > 56) {
          setShow(false);
        } else {
          setShow(true);
        }

        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    setChange(colorScheme === themes.dark);
  }, [colorScheme]);

  function OnClickHandler(event) {
    event.preventDefault();
    setChange((prev) => !prev);
    toggleColorScheme();
  }

  return (
    <nav className={`${styles.nav} ${!show ? styles.hide : ""} container`}>
      <section className={styles.nav_logo}>
        <Logo />
      </section>

      <section className={styles.nav_elements}>
        {navElements.map((element, index) => (
          <Link key={index} href={`/#${element}`}>
            <a className="p2">{element}</a>
          </Link>
        ))}

        <button
          className={`${styles.button_container} ${
            change ? styles.change : ""
          }`}
          onClick={OnClickHandler}
        >
          <span className={`${styles.icon_container} container`}>
            {colorScheme !== themes.light ? <Sun /> : <Moon />}
          </span>
        </button>
      </section>
    </nav>
  );
}
