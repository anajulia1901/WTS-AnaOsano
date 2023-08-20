

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

const peliculas = [
  "Jhon Wick 4",
  "Jhon Wick 4",
  "Jhon Wick 4",
  "Jhon Wick 4",
  "Jhon Wick 4",
  "Jhon Wick 4",
  "Jhon Wick 4",
  "Jhon Wick 4",
  "Jhon Wick 4",
  "Jhon Wick 4",
];

function Form() {
  const navigate = useNavigate();
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [resena, setResena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pelicula:", peliculaSeleccionada);
    console.log("Nombre:", nombreCompleto);
    console.log("Email:", email);
    console.log("Reseña:", resena);

    navigate("/finalView");
  };

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-cells"]}>
          <label className={styles["input-label"]}>Seleccione película</label>
          <select
            className={styles["input-field"]}
            value={peliculaSeleccionada}
            onChange={(e) => setPeliculaSeleccionada(e.target.value)}
          >
            <option value="">Seleccione una película</option>
            {peliculas.map((pelicula, index) => (
              <option key={index} value={pelicula}>
                {pelicula}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["form-cells"]}>
          <label className={styles["input-label"]}>Nombre completo</label>
          <input
            className={`${styles["input-field"]} ${
              nombreCompleto.length < 4 && nombreCompleto.length > 0
                ? styles["input-invalid"]
                : ""
            }`}
            type="text"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            minLength={4}
          />
          {nombreCompleto.length < 4 && nombreCompleto.length > 0 && (
            <p className={styles["input-invalid-message"]}>
              El nombre debe tener al menos 4 caracteres
            </p>
          )}
        </div>
        <div className={styles["form-cells"]}>
          <label className={styles["input-label"]}>E-mail</label>
          <input
            className={`${styles["input-field"]} ${
              email && !isValidEmail(email) ? styles["input-invalid"] : ""
            }`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["form-cells"]}>
          <label className={styles["input-label"]}>Reseña</label>
          <textarea
            className={`${styles["input-field"]} ${
              resena.length < 10 && resena.length > 0
                ? styles["input-invalid"]
                : ""
            }`}
            style={{ height: resena.length < 10 ? "8em" : "16em" }}
            value={resena}
            onChange={(e) => setResena(e.target.value)}
          />
        </div>
        <div className={styles["buttons-container"]}>
          <button
            type="submit"
            className={`${styles["form-button"]} ${styles["bordered-button"]}`}
          >
            Finalizar
          </button>
          <button
            type="reset"
            className={`${styles["form-button"]} ${styles["no-border"]}`}
          >
            Reiniciar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

