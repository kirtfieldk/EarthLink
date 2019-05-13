import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import * as actions from "./actions";
import { connect } from "react-redux";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";
// import axios from 'axios'

const App = props => {
  useEffect(() => {
    props.fetchUser();
  }, [props]);
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default connect(
  null,
  actions
)(App);
