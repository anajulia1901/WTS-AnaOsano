
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/headerContainer/Header.js";
import MainContainer from "./components/mainView/mainContainer.js";
import Cartelera from "./components/cartelera/Cartelera.js";
import Opinion from "./components/dejaTuOpinion/Opinion.js";
import FinalView from "./components/finalView/FinalView.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainContent />} />
        <Route path="/finalView" element={<FinalView />} />
      </Routes>
    </Router>
  );
}

function MainContent() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <MainContainer />
      <Cartelera />
      <Opinion />
    </div>
  );
}

export default App;
