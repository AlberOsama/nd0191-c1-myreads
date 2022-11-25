import "./App.css";
import SearchPage from "./pages/SearchPage";

import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
