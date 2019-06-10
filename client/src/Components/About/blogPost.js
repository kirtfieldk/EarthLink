import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";
const blogPost = ({ userPost, showPost, retrieveBlogPost }) => {
  const showPostAction = _id => {
    showPost(_id);
  };
  const renderPost = () => {
    retrieveBlogPost();
    if (!userPost) {
      return;
    } else {
      return userPost.map(({ title, summery, _id }) => {
        return (
          <div key={_id} onClick={() => showPostAction(_id)}>
            <Link to={`/about/${_id}`}>
              <div className="grid-container">
                <div className="blog-body">
                  <div className="blog-title">{title}</div>
                  <div className="blog-blody">{summery}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      });
    }
  };

  return <div>{renderPost()}</div>;
};
const mapStateToProps = ({ userPost }) => {
  return { userPost };
};
export default connect(
  mapStateToProps,
  actions
)(blogPost);
