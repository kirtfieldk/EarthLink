import React from "react";
import Hero from "./Hero";
import About from "./About/About"

export default function Home() {
  return (
    <>
    <Hero
      page="home-page"
      title="Explore"
      subTitle="Connect with the outdoors like never before"
    />
    <About />
    </>
  );
}
