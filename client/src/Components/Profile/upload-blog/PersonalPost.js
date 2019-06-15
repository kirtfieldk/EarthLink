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
  const changeDisplay = () => {
    showDeleteModel(!deleteModel);
  };
  const displayModel = () => {
    if (deleteModel) {
      return (
        <DeletePostModel
          postTitle={titleToRemove}
          id={_idToDelete}
          history={history}
          show={changeDisplay}
        />
      );
    }
  };
  // If user chooses to delete post
  // Save the titel and id
  const deletePost = (_id, title) => {
    setTitleToRemove(title);
    set_id(_id);
  };
  // Render the personal blog post
  const renderPersonalPost = () => {
    if (!UserSpecificPost) {
      return <div>Loading...</div>;
    } else {
      return UserSpecificPost.map(({ title, summery, _id }) => {
        return (
          <div key={_id}>
            <div className="grid-container">
              <div className="blog-body">
                <div className="blog-title">{title}</div>
                <div className="blog-blody">{summery}</div>
                <div className="button">
                  {/* Button to delete post */}
                  <button
                    className="post-button"
                    onClick={() => {
                      deletePost(_id, title, history);
                      changeDisplay();
                    }}
                  >
                    Delete Post
                  </button>
                  {/* Button to delete post */}
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  // Return method to display the contents
  return (
    <div>
      {displayModel()}
      {renderPersonalPost()}
    </div>
  );
};
const mapStateToProps = ({ UserSpecificPost }) => {
  return { UserSpecificPost };
};
export default connect(
  mapStateToProps,
  actions
)(PersonalPost);
