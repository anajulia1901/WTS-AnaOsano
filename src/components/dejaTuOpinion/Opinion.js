import React from "react";
import styles from "./Opinion.module.css";
import Form from "./Form";

function Opinion() {
  return (
    <div className={styles["opinion-container"]}>
      <div className={styles["opinion-background"]}></div>
      <div className={styles["title"]}>3</div>
      <div className={styles["sub-title"]}>Deja tu opinion</div>
      <div className={styles["opinion-content"]}>
        <Form></Form>
      </div>
    </div>
  );
}

export default Opinion;
