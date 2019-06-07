import React from "react";
import Hero from "../Hero";
import Keith from "./Keith";
function Founders() {
  return (
    <div>
      <Hero title="Meet The Team" page="team-page" subTitle="Our Team" />
      <div className="grid-container">
        <Keith />
      </div>
    </div>
  );
}

export default Founders;
