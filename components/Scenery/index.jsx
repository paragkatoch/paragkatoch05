import styles from "./styles.module.scss";
import { useColorScheme } from "../../context/SchemeContext";
import CustomImage from "../CustomImage";

import BlackWhite from "/assets/images/theme/black-white.png";
import BlueNight from "/assets/images/theme/blue-night.png";
import GreenGoblin from "/assets/images/theme/green-goblin.png";
import RedRobin from "/assets/images/theme/red-robin.png";

const scenery = {
  white_black: BlackWhite,
  blue_night: BlueNight,
  green_goblin: GreenGoblin,
  red_robin: RedRobin,
};

export default function Scenery() {
  const [colorScheme] = useColorScheme();

  return (
    <section className={styles.scenery}>
      {Object.keys(scenery).map(
        (item, index) =>
          colorScheme === item && (
            <CustomImage
              key={index}
              src={scenery[item]}
              style={styles.image_container}
              alt={colorScheme}
              layout="fill"
              objectFit="cover"
            />
          )
      )}
    </section>
  );
}
