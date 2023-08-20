import React from "react";
import styles from "./FinalView.module.css";
import Star from "../svg/Star";

function FinalView() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["container"]}>
        <h2 className={styles["title"]}>Reseña de peliculas</h2>
        <h1 className={styles["sub-title"]}>¡Muchas gracias Juan!</h1>
        <Star></Star>
        <h3 className={styles["sub-title"]}>Tu reseña sobre la pelicula “Jonh Wick 4”
        ha sido enviada.</h3>
      </div>

      <div></div>
    </div>
  );
}

export default FinalView;
