import React from "react";
import Model from "./Model";

const Hero = ({ page, title, subTitle, btnText }) => {
  return <div className={page}>{renderModel(title, subTitle, btnText)}</div>;
};
const renderModel = (title, subTitle, btnText) => {
  if (title) {
    return <Model title={title} subTitle={subTitle} btnText={btnText} />;
  }
  return <div />;
};

export default Hero;
