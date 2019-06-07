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
          <div>
            <Link className="item float-right" to="/profile">
              Welcome!
            </Link>
          </div>
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
          About
        </Link>
        <Link className="item float-left" to="/team">
          The Team
        </Link>
        <Link className="item float-left" to="/about">
          Shop
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
