import React from "react";
import ReactDOM from "react-dom";
import Home from './pages/Home';

import "./index.css";

const App = () => (
  <div className="container">
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
