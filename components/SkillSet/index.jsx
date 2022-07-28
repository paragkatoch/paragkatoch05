import styles from "./styles.module.scss";

import AWS from "/assets/icons/techstack/aws.svg";
import Contentful from "/assets/icons/techstack/contentful.svg";
import Framer from "/assets/icons/techstack/framer.svg";
import Gatsby from "/assets/icons/techstack/gatsby.svg";
import Javascript from "/assets/icons/techstack/javascript.svg";
import Mongodb from "/assets/icons/techstack/mongodb.svg";
import Nextjs from "/assets/icons/techstack/nextjs.svg";
import Nodejs from "/assets/icons/techstack/nodejs.svg";
import ReactIcon from "/assets/icons/techstack/react.svg";
import Sass from "/assets/icons/techstack/sass.svg";
import Typescript from "/assets/icons/techstack/typescript.svg";
import Webflow from "/assets/icons/techstack/webflow.svg";
import ContainerHeading from "../ContainerHeading";

const scenery = {
  react: ReactIcon,
  nextjs: Nextjs,
  gatsby: Gatsby,
  webflow: Webflow,
  nodejs: Nodejs,
  typescript: Typescript,
  javascript: Javascript,
  sass: Sass,
  aws: AWS,
  contentful: Contentful,
  framer: Framer,
  mongodb: Mongodb,
};

export default function SkillSet() {
  return (
    <section id="skillset" className={styles.skillSet}>
      <ContainerHeading title="Skills" />

      <section className={styles.tech_stack}>
        {Object.keys(scenery).map((item, index) => {
          let Icon = scenery[item];
          return (
            <span key={index} className="container">
              <Icon />
            </span>
          );
        })}
      </section>
    </section>
  );
}
