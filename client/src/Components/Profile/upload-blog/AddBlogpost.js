import React, { useState } from "react";
import LinkBar from "../LinkBar";
import BlogField from "./BlogField";
import { reduxForm, Field } from "redux-form";
import blogValues from "./blogPostFields";
import reviewField from "./ReviewField";
import ReviewField from "./ReviewField";

const AddBlogpost = props => {
  //Needed state to show review or create
  const [isReview, setReview] = useState(false);
  //Below function takes the array from blogValues
  //And iterates over them to deisplay 3 different inputs
  const renderFields = () => {
    return blogValues.map(({ label, name }) => {
      return (
        <Field
          key={name}
          name={name}
          label={label}
          type="text"
          component={BlogField}
        />
      );
    });
  };
  // If everything goes well and there are no errors than the user will be passed to the
  // review page of their blog
  const renderAddNew = () => {
    if (!isReview) {
      return (
        <div>
          <LinkBar />
          <form
            onSubmit={props.handleSubmit(() => setReview(true))}
            className="blogpost-container"
          >
            {renderFields()}
            <button type="submit" className="btn right">
              Review
            </button>
          </form>
        </div>
      );
    } else {
      return <ReviewField onCancel={() => setReview(false)} />;
    }
  };

  return <div>{renderAddNew()}</div>;
};
const validate = values => {
  const error = {};
  blogValues.forEach(({ name }) => {
    if (!values[name]) {
      error[name] = "No empty values";
    }
  });
  return error;
};
export default reduxForm({
  validate,
  form: "blogForm",
  destroyOnUnmount: false
})(AddBlogpost);
