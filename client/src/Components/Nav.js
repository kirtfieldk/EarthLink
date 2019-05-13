// import DropBar from "./DropBar";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Nav extends Component {
  renderSignInBttn = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Link className="item float-right" to="/sign-in">
            Sign In!
          </Link>
        );
      default:
        return (
          <Link className="item float-right" to="/profile">
            Welcome!
          </Link>
        );
    }
  };
  render() {
    return (
      <div className="topnav">
        <h3 className="item float-left">Logo</h3>
        <Link className="item float-left" to="/">
          Home
        </Link>
        <Link className="item float-left" to="/about">
          about
        </Link>
        {this.renderSignInBttn()}
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Nav);
