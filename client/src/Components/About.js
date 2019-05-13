import React, { Component } from "react";
import Hero from "./Hero";

class About extends Component {
  render() {
    return (
      <div>
        <Hero
          page="about-page-intro"
          title="Our Mission"
          subTitle="Follow the trails to better you and our Earth"
        />
        <div className = 'grid-container'>
        <div className = 'title'>Explore where millions have not</div>
        <div className = 'picture p1'></div>
        <div className = 'picture p2'></div>
        <div className = 'picture p3'></div>
        <div className = 'picture p4'></div>
        
        </div>
      </div>
    );
  }
}

export default About;
