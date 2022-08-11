import React from "react";
import styles from "./Error.module.css";
function Error({ message }) {
  return <h4 className={styles.errorMassage}>{message}</h4>;
}

export default Error;
