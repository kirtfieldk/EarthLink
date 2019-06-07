// blog contains logic to render a single
// label and text input
import React from "react";

export default ({ input, label, meta: { touched, error } }) => {
  if (touched && error) {
    return (
      <div className="row">
        <label className="form-label">{label}</label>
        <input {...input} autoComplete="off" className="input grid-7 red" />
        <div className="red-text">{touched && error}</div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <label className="form-label">{label}</label>
        <input
          {...input}
          autoComplete="off"
          className={`input grid-7 ${touched ? "green" : ""}`}
        />
      </div>
    );
  }
};
