import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Cancel from "./Cancel";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </div>
  );
};

export default App;
