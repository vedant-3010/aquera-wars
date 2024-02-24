import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlanetsPage from "./pages/PlanetsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planets" element={<PlanetsPage />} />
      </Routes>
    </>
  );
}

export default App;
