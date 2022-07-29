import styles from "./styles.module.scss";
import { useColorScheme } from "../../context/SchemeContext";
import CustomImage from "../CustomImage";
import { sceneryContent } from "../../content/scenery";

export default function Scenery() {
  const [colorScheme] = useColorScheme();

  return (
    <section className={styles.scenery}>
      {Object.keys(sceneryContent).map(
        (item, index) =>
          colorScheme === item && (
            <CustomImage
              key={index}
              src={sceneryContent[item]}
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
