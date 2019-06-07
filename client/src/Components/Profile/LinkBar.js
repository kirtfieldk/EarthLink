import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Profile extends React.Component {
  renderProfile = () => {
    if (this.props.auth) {
      return (
        <div className="grid-container">
          <div className="setting-title">Welcome {this.props.auth.name}!</div>
          <div className="setting-sidebar">
            <ul>
              <Link to="/profile">
                <li>Upload</li>
              </Link>
              <Link to="/profile/addblogpost">
                <li>Add Post</li>
              </Link>
              <Link to="/profile/personalblogpost">
                <li>Blog Posts</li>
              </Link>
              <li>Settings</li>
              <li>Privacy</li>
              <li>
                <div className="sign-out">
                  <a href="/api/logout">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    } else return <div>Loading</div>;
  };

  render() {
    console.log(this.props.auth);
    return <div>{this.renderProfile()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);
