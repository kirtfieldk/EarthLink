import React from "react";
import { connect } from "react-redux";
import UploadAction from "./uploadAction";

class Profile extends React.Component {
  renderProfile = () => {
    if (this.props.auth) {
      return (
        <div className="grid-container">
          <div className="setting-title">Welcome {this.props.auth.name}!</div>
          <div className="setting-sidebar">
            <ul>
              <li>Uploads</li>
              <li>Explore</li>
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
    return (
      <div>
        {this.renderProfile()}

        <div className="upload-btn">
          <UploadAction />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);
