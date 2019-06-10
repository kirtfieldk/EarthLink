import React from "react";
import {connect} from "react-redux"
import * as actions from "../../../actions"
const DeletePostModel = ({ postTitle, deleteUserPost, history, id, changeState }) => {
  return (
    <div className="full-screen grid-container">
      <div className="model-body">
        <div className="model-title">Delete {postTitle}?</div>
        <div className="row">
          <button onClick = {() => deleteUserPost(id, history)}className="button">Delete</button>
          <button className="button" onClick = {() => changeState}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(DeletePostModel);
