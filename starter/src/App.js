import "./App.css";
import SearchPage from "./pages/SearchPage";

import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage onClick={() => setShowSearchpage(!showSearchPage)} />
      ) : (
        <HomePage onClick={() => setShowSearchpage(!showSearchPage)} />
      )}
    </div>
  );
}

export default App;
