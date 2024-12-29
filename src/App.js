import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/home";
import Cursor from "./components/cursor/cursor";

function App() {

  var history = createBrowserHistory();

  return (
    <>
      <Cursor/>
      <Home/>
    </>
  );
}

export default App;
