import React, { useState } from "react";
import styles from "./MainContainer.module.css";
import Card from "./Card";
import Arrow from "../svg/Arrow";
import ArrowLeft from "../svg/ArrowLeft";

function MainContainer() {
  const [textoCard, setTextoCard] = useState(
    "John Wick 4 comienza con el personaje del título (Keanu Reeves) huyendo de nuevo mientras tiene a cientos de asesinos pisándole los talones. El villano principal de la serie es el Marqués de Gramont (Bill Skarsgård),  un líder de la Alta Mesa que sigue aumentando la recompensa por la cabeza de  Wick mientras también arregla algunos asuntos dentro de la organización, incluyendo la posible eliminación de Winston Scott (Ian McShane) y algunas de las decisiones que tomó en el pasado."
  );
  const Textoptions = [
    "John Wick 4 comienza con el personaje del título (Keanu Reeves) huyendo de nuevo mientras tiene a cientos de asesinos pisándole los talones. El villano principal de la serie es el Marqués de Gramont (Bill Skarsgård),  un líder de la Alta Mesa que sigue aumentando la recompensa por la cabeza de  Wick mientras también arregla algunos asuntos dentro de la organización, incluyendo la posible eliminación de Winston Scott (Ian McShane) y algunas de las decisiones que tomó en el pasado.",
    "John Wick 4 comienza con el personaje del título (Keanu Reeves)huyendo de nuevo mientras tiene a cientos de asesinos pisándole los talones.El villano principal de la serie es el Marqués de Gramont (Bill Skarsgård), un líder de la Alta Mesa que sigue aumentando la recompensa por la cabeza de Wick mientras también arregla algunos asuntos dentro de la organización, incluyendo la posible eliminación de Winston Scott (Ian McShane) y algunas de las decisiones que tomó en el pasado.",
    "John Wick 4 comienza con el personaje del título (Keanu Reeves)huyendo de nuevo mientras tiene a cientos de asesinos pisándole los talones.El villano principal de la serie es el Marqués de Gramont (Bill Skarsgård), un líder de la Alta Mesa que sigue aumentando la recompensa por la cabeza de Wick mientras también arregla algunos asuntos dentro de la organización, incluyendo la posible eliminación de Winston Scott (Ian McShane) y algunas de las decisiones que tomó en el pasado.3",
  ];
  const [indiceTexto, setIndiceTexto] = useState(0);

  const changeNextText = () => {
    const nuevoIndice = (indiceTexto + 1) % Textoptions.length;
    setIndiceTexto(nuevoIndice);
    setTextoCard(Textoptions[nuevoIndice]);
  };

  const changePreviousText = () => {
    const nuevoIndice =
      (indiceTexto - 1 + Textoptions.length) % Textoptions.length;
    setIndiceTexto(nuevoIndice);
    setTextoCard(Textoptions[nuevoIndice]);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["main"]}>


        <button
          className={styles["arrow-button"]}
          onClick={changePreviousText}
        >
          <ArrowLeft />
        </button>
        <Card texto={textoCard} />
        <button
          className={styles["arrow-button"]}
          onClick={changeNextText}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default MainContainer;
