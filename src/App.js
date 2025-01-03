import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/home";
import Cursor from "./components/cursor/cursor";
import Personal from "./pages/personal";

function App() {

  var history = createBrowserHistory();

  return (
    <>
    <Router history={history}>
      <Cursor/>
      <Routes>
        <Route
          exact path="/"
          element={<Home/>}
        />
        <Route
          exact path="/personal"
          element={<Personal/>}
        />
      </Routes>
    </Router>

    </>
  );
}

export default App;
