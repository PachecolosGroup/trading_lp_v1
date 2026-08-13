import React from "react";
import "./Hero.css";
import MainVideo from "../../imgs/monkeyLife.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Decentralized</h1>
        <h1>
          <span className="blue">Monkey</span> Protocol
        </h1>
        <p>Guaranteed Security in trading bananas and plantains</p>
        <div className="btn-group">
          <button className="btn">Use Defi</button>
          <button className="btn btn-outline">FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total Bananas Secured: $1.204,783,662.42M</h2>
      </div>
    </div>
  );
};

export default Hero;
