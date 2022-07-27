import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const schemes = {
  white_black: "white_black",
  red_robin: "red_robin",
  blue_night: "blue_night",
  green_goblin: "green_goblin",
};

const themes = {
  light: "light",
  dark: "dark",
};

export default function Home() {
  return <main className={`${styles.app} white_black`}></main>;
}
