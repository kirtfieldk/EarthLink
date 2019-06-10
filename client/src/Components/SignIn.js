import React from "react";
const SignIn = () => {
  return (
    <div className="home-page grid-container">
      <div className = "description center white">
        Join Our Team and Help Us Descover and Save The World over
      </div>
      <div className="icon">
        <div className="title">Sign-In with</div>

        <button className="btn-box purple fill full-width">
          <a href="/auth/github">
            <i className="fab fa-github float-left" />
            Github
          </a>
        </button>

        <button className="btn-box fill full-width">
          <a href="/auth/google">
            <i className="fab fa-google float-left" />
            Google
          </a>
        </button>

        <div className = "full-width center white">
          By accwepting the Terms and Servecies you agree to follow protocole
        </div>
      </div>
    </div>
  );
};
export default SignIn;
