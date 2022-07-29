import Github from "./assets/github.svg";
import Twitter from "./assets/twitter.svg";
import LinkedIn from "./assets/linkedin.svg";

export const heroContent = {
  id: "home",
  eyebrow: "Hello, I’m",
  heading: "Parag Katoch",
  subHeading: "Frontend Web Developer",
  description:
    "I’m a self-taught passionate front-end developer from India, currently working at osenorth.",

  buttonText: "Let’s Connect",
  code: `1  class <b>Person</b> {
2      constructor() {
3        this.name = "<b>Parag Katoch</b>";
4        this.traits = ["design", "develop"];
5        this.age = new Date().getFullYear() - 2002;
6      }
7  }
`,
};

export const socialLinks = [
  {
    Icon: Github,
    url: "https://github.com/paragkatoch",
  },
  {
    Icon: Twitter,
    url: "https://twitter.com/paragkatoch",
  },
  {
    Icon: LinkedIn,
    url: "https://linkedin.com/in/paragkatoch",
  },
];
