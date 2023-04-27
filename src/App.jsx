import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import Feed from "./components/feed";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Feed />
        </Router>
      </div>
    </>
  );
}

export default App;
