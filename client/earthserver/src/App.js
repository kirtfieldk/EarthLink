import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
