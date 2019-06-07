// These lines of code is to render the use specific post
// Implements a delete method to delete a user post
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../actions";
const PersonalPost = ({
  UserSpecificPost,
  history,
  showPost,
  deleteUserPost
}) => {
  const deletePost = (_id, history) => {
    deleteUserPost(_id, history);
    console.log(_id);
  };
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
                  <button
                    className="post-button"
                    onClick={() => deletePost(_id, history)}
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

  return <div>{renderPersonalPost()}</div>;
};
const mapStateToProps = ({ UserSpecificPost, DeletedPost }) => {
  return { UserSpecificPost, DeletedPost };
};
export default connect(
  mapStateToProps,
  actions
)(PersonalPost);
