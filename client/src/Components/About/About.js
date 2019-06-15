import React, { Component } from "react";
import BlogPost from "./blogPost.js";
import Hero from "../Hero";

class About extends Component {
  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="title">Explore where millions have not</div>
          {/* Beginning of first row */}
          <div className="left-text-body">
            <p>
              At EarthLink we aim to preserve the remaining marvals of mother
              nature, while creating content to share our travels with the
              world.
            </p>
          </div>
          <div className="right-text-body">
            <p>
              At EarthLink we aim to preserve the remaining marvals of mother
              nature, while creating content to share our travels with the
              world.
            </p>
          </div>
          {/* End of the first row */}
          {/* IMAGE */}
          <div className = "p1"></div>
          {/* END OF IMAGE */}
          <div className="left-text-body-sec">
            <p>
              At EarthLink we aim to preserve the remaining marvals of mother
              nature, while creating content to share our travels with the
              world.
            </p>
          </div>
          <div className="right-text-body-sec">
            <p>
              At EarthLink we aim to preserve the remaining marvals of mother
              nature, while creating content to share our travels with the
              world.
            </p>
          </div>
          {/* End of row 2 */}
          <div className="about-blog grid-container">
            <div className="row our-journey center">Read Our Stories</div>
            <div className="row">
              <BlogPost />
            </div>
          </div>
        </div>
        <Hero page = "about-page-intro" title = "Never Stop Exploring"/>
      </div>
    );
  }
}

export default About;
