import React from "react";
import "./App.css";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shipping from "./pages/Shipping";
import Prices from "./pages/Prices";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shipping">Shipping</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/prices">Prices</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/shipping">
            <Shipping />
          </Route>
          <Route path="/prices">
            <Prices />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
