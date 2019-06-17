import React, { useState, useEffect } from "react";

const SocialMedia = () => {
  const [iconSelect, changeIconSelect] = useState("");
  const renderSocialMediaBar = () => {
    return (
      <div className="full-width-screen bg-black social-bar">
        <div className="grid-container">
          <div
            className="instagram"
            onClick={() => changeIconSelect("instagram")}
          >
            <i class="fab bg-white fa-instagram social" />
          </div>
          <div className="youtube" onClick={() => changeIconSelect("youtube")}>
            <i class="fab bg-white fa-youtube social" />
          </div>
          <div className="twitter" onClick={() => changeIconSelect("twitter")}>
            <i class="fab bg-white fa-twitter social" />
          </div>
          <div
            className="facebook"
            onClick={() => changeIconSelect("facebook")}
          >
            <i class="fab bg-white fa-facebook-f social" />
          </div>
          <div className="center-grid">{renderSocialBio()}</div>
        </div>
      </div>
    );
  };
  const renderSocialBio = () => {
    switch (iconSelect) {
      case "instagram":
        return (
          <div className="social-bio">
            Follow our instagram to visualize our journey through the world
          </div>
        );
      case "youtube":
        return (
          <div className="social-bio">
            Follow out Youtube to see our content and our media spotlight of
            nature
          </div>
        );
      case "twitter":
        return <div className="social-bio">Follow our twitter to see</div>;

      case "facebook":
        return <div className="social-bio">Follow our twitter to see</div>;
      default:
        return;
    }
  };
  return <>{renderSocialMediaBar()} </>;
};

export default SocialMedia;
