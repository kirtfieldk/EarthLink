import React, { useEffect } from "react";
import { connect } from "react-redux";
import Hero from "../Hero";
const SelectedBlog = ({ postId }) => {
  const renderBlog = () => {
    return (
      <div>
        <Hero
          page="about-page-intro"
          title={postId.title}
          subTitle="Follow the trails to better you and our Earth"
        />
        <div className="grid-container">
          <div className=" row ml-20 blog-title">{postId.title}</div>
          <div className=" text row grid-three-eleven">{postId.body}</div>
        </div>
      </div>
    );
  };

  if (!postId) {
    return <div>Retrieving Post</div>;
  } else {
    return <div>{renderBlog()}</div>;
  }
};
const mapStateToProps = ({ postId }) => {
  return { postId };
};
export default connect(mapStateToProps)(SelectedBlog);
