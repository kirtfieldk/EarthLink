import React from "react";
const SignIn = () => {
  return (
    <div className="home-page">
      <div className="spacer" />
      <div className="icon">
        <div className="title">Sign-In with</div>

        <button className="btn-box purple fill">
          <a href="/auth/github">
            <i className="fab fa-github float-left" />
            Github
          </a>
        </button>

        <button className="btn-box fill">
          <a href="/auth/google">
            <i className="fab fa-google float-left" />
            Google
          </a>
        </button>
      </div>
    </div>
  );
};
export default SignIn;
