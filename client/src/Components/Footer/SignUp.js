// This component is for adding 
// emails to out newsLetter
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
const SignUp = ({ addUserToNewsLetter }) => {
  const [email, setEmail] = useState("");
  const [add, setAdded] = useState(false);
  const error = [];
  const validFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validEmail = () => {
    if (!email.match(validFormat)) {
      error.push(`${email} not a valid email address`);
    }
  };
  const displayError = () => {
    if (email.match(validFormat)) {
      addUserToNewsLetter(email);
      setAdded(true);
      return <div className="success">Added {email}</div>;
    } else if (email == "") {
      return;
    }
    return <div className="error">{error[0]}</div>;
  };
  const disable = () => {
    while (add === false) {
      return (
        <div>
          <div className="input-email">
            <input
              type="text"
              placeholder="Pionerrer@mail.com"
              className="newsletter-input"
              onBlur={e => setEmail(e.target.value)}
            />
            <div className="email-button" onClick={validEmail()}>
              Join!
            </div>
          </div>
          {displayError()}
        </div>
      );
    }
    return (
      <div className="success">
        Thank you for adding {email} <br />
        Expect our weekly news letters every monday
      </div>
    );
  };
  return <> {disable()}</>;
};

export default connect(
  null,
  actions
)(SignUp);
