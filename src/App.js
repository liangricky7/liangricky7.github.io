import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/home";

function App() {

  var history = createBrowserHistory();

  return (
    <>
      <Router history = {history}>
        <Routes>
          <Route 
            exact path="/"
            element={<Home/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
