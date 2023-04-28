import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Movies from "./components/Movies"
import Directors from "./components/Directors";
import Actors from "./components/Actors";
import NavBar from "./components/NavBar";


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
