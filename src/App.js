import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quotes" className="nav-link">
                Quotes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/character/:char_id" component={Detail} />
        <Route path="/quotes" component={Quotes} />
      </Switch>
    </Router>
  );
}

export default App;
