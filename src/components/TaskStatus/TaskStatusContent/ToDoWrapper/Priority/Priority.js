import styles from "./Priority.module.css";

function Priority({ state }) {
  const priorityClassName =
    state === "low"
      ? styles.low
      : state === "normal"
      ? styles.normal
      : styles.high;
  const classNames = [priorityClassName, styles.priority];
  return (
    <div className={styles.wrapper}>
      <div className={classNames.join(" ")}></div>
    </div>
  );
}

export default Priority;
