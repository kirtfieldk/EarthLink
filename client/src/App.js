import React from "react";
import "./style/App.css";
import "./style/social.css";
import "./style/nav.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import * as actions from "./actions";
import { connect } from "react-redux";
import LLC from "./Components/LLC";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Founders from "./Components/About/Founders";
import SignIn from "./Components/SignIn";
import AddBlogpost from "./Components/Profile/upload-blog/AddBlogpost";
import UploadAction from "./Components/Profile/UploadImage";
import SelectedBlog from "./Components/About/SelectedBlog";
import PersonalBlogpost from "./Components/Profile/upload-blog/PersonalPost";

const App = props => {
  useEffect(() => {
    props.fetchUser();
    props.retrieveBlogPost();
    props.retrieveUserPost();
  }, [props]);
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/team" component={Founders} />
          <Route path="/profile" exact component={UploadAction} />
          <Route path="/profile/addblogpost" component={AddBlogpost} />
          <Route path="/about/:blogId" component={SelectedBlog} />
          <Route
            path="/profile/personalblogpost"
            component={PersonalBlogpost}
          />
        </Switch>
        <LLC />
      </Router>
    </div>
  );
};

export default connect(
  null,
  actions
)(App);
