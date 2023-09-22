import React from "react";
import "./HeroImage.css";
import banner from "../images/banner-02.1d3252d3.jpg";

function HeroImage({ text }) {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`,
      }}
    >
      <span className="hero-text">{text}</span>
    </div>
  );
}

export default HeroImage;
