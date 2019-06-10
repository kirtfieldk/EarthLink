// These lines of code is to render the use specific post
// Implements a delete method to delete a user post
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import DeletePostModel from "./DeletePostModel";
const PersonalPost = ({ UserSpecificPost, history, retrieveUserPost }) => {
  // The two react hooks are to show the model
  // and store the title to be removed
  const [deleteModel, showDeleteModel] = useState(false);
  const [titleToRemove, setTitleToRemove] = useState("");
  const [_idToDelete, set_id] = useState("");
  //
  //
  useEffect(() => {
    retrieveUserPost();
  });
  const displayModel = () => {
    if (deleteModel) {
      return (
        <DeletePostModel
          postTitle={titleToRemove}
          id={_idToDelete}
          history={history}
        />
      );
    }
  };

  const deletePost = (_id, title) => {
    setTitleToRemove(title);
    showDeleteModel(!deleteModel);
    set_id(_id);
  };
  const renderPersonalPost = () => {
    if (!UserSpecificPost) {
      return <div>Loading...</div>;
    } else {
      return UserSpecificPost.map(({ title, summery, _id }) => {
        return (
          <div key={_id}>
            {displayModel()}
            <div className="grid-container">
              <div className="blog-body">
                <div className="blog-title">{title}</div>
                <div className="blog-blody">{summery}</div>
                <div className="button">
                  <button
                    className="post-button"
                    onClick={() => deletePost(_id, title, history)}
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  // Return method to display the contents
  return <div>{renderPersonalPost()}</div>;
};
const mapStateToProps = ({ UserSpecificPost }) => {
  return { UserSpecificPost };
};
export default connect(
  mapStateToProps,
  actions
)(PersonalPost);
