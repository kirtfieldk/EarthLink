import React from "react";
import { connect } from "react-redux";

class Profile extends React.Component {
  renderProfile = () => {
    if (this.props.auth) {
      return (
        <div className="grid-container">
          <div className="setting-title">Welcome {this.props.auth.userId}!</div>
          <div className = 'setting-sidebar'>
            
          
          
          
          </div>
        </div>
      );
    } else return <div>Loading</div>;
  };
  render() {
    console.log(this.props);
    return <div>{this.renderProfile()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);
