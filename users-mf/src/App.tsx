import React from "react";
import ReactDOM from "react-dom";
import Users from './pages/Users';
import "./index.css";

const App = () => (
  <div className="container">
    <Users />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
