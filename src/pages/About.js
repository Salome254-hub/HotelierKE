import React from "react";
import chef from "../assets/chef.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${chef})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          We are dedicated in serving you delicious meals in town make sure to follow us and subscribe today!
          Made with love, savored with interest!!
        </p>
      </div>
    </div>
  );
}

export default About;
