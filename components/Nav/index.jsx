import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./styles.module.scss";
import { themes } from "../../content";
import { navContent } from "../../content/nav";

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
        <navContent.Logo />
      </section>

      <section className={styles.nav_elements}>
        {navContent.navElements.map((element, index) => (
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
            {colorScheme !== themes.light ? (
              <navContent.Sun />
            ) : (
              <navContent.Moon />
            )}
          </span>
        </button>
      </section>
    </nav>
  );
}
