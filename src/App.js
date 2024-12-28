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
