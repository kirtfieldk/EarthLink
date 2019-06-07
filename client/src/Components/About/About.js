import React, { Component } from "react";
import BlogPost from "./blogPost.js";
import Hero from "../Hero";

class About extends Component {
  render() {
    return (
      <div>
        <Hero
          page="about-page-intro"
          title="Our Mission"
          subTitle="Follow the trails to better you and our Earth"
        />
        <div className="grid-container">
          <div className="title">Explore where millions have not</div>
          {/* Beginning of first row */}
          <div className="picture p3" />
          <div className="right-text-body">
            <p>
              At EarthLink we aim to preserve the remaining marvals of mother
              nature, while creating content to share our travels with the
              world.
            </p>
          </div>
          {/* End of the first row */}
          <div className="left-text-body">
            <p>
              At EarthLink we aim to preserve the remaining marvals of mother
              nature, while creating content to share our travels with the
              world.
            </p>
          </div>
          <div className="picture p2" />
          {/* End of row 2 */}
          <div className="row">
            <BlogPost />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
