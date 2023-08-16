import React from "react";
import styles from "./Cartelera.module.css";
import JhonWickPoster from "../svg/JhonwWickPoster";

const peliculas = [
  { titulo: "Jhon Wick 4 ", imagen: "../svg/JhonWick", id: 1 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_2", id: 2 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_3", id: 3 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_4", id: 4 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_5", id: 5 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_6", id: 6 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_7", id: 7 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_8", id: 8 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_9", id: 9 },
  { titulo: "Jhon Wick 4 ", imagen: "ruta_imagen_10", id: 10 },
];

function Cartelera() {
  return (
    <div className={styles["cartelera-container"]}>
      <div className={styles["title"]}>En cartelera</div>
      <div className={styles["all-movies"]}>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className={styles["movie"]}>
            <div className={styles["movie-title"]}>{pelicula.titulo}</div>
            <JhonWickPoster className={styles["movie-image"]} />

            <button className={styles["movie-button"]}>Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cartelera;
