import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../../actions";

const ReviewField = ({ onCancel, formValues, addBlogPost, history }) => {
  return (
    <div className="grid-container">
      <h1 className="center row mt-20">Review</h1>
      <div className="row">
        Title: <span>{formValues.title}</span>
      </div>
      <div className="row">
        Author: <span>{formValues.author}</span>
      </div>
      <div className="row">
        Body: <span>{formValues.body}</span>
      </div>
      <div className="row">
        Summery: <span>{formValues.summery}</span>
      </div>
      <div className="row">
        <button className="btn" onClick={onCancel}>
          Edit
        </button>
        <button
          className="btn"
          onClick={() => addBlogPost(formValues, history)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { formValues: state.form.blogForm.values };
};
export default connect(
  mapStateToProps,
  actions
)(withRouter(ReviewField));
