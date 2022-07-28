import styles from "./styles.module.scss";

export default function ContainerHeading(props) {
  return (
    <div className={styles.container_heading}>
      <span className={styles.hr}></span>
      <h2 className={`${styles.heading} h2`}>{props.title}</h2>
      <span className={styles.hr}></span>
    </div>
  );
}
