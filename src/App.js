import React from "react";
import MainContainer from "./components/mainView/mainContainer.js";
import Header from "./components/headerContainer/Header.js";
import Card from "./components/mainView/Card.js";
import Cartelera from "./components/cartelera/Cartelera.js";
import Opinion from "./components/dejaTuOpinion/Opinion.js";

function App() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Header />
      <MainContainer>
        <Card></Card>
      </MainContainer>
      <Cartelera></Cartelera>
      <Opinion></Opinion>
    </div>
  );
}

export default App;
