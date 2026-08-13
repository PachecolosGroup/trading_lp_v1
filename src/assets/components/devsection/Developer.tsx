import React from "react";
import "./Developer.css";
import Terminal from "../../imgs/img1.webp";

const Developer = () => {
  return (
    <>
      <div className="developers">
        <div className="container">
          <div className="left">
            <h2>Support for MonkeyDevelopers</h2>
            <p>
              Check out the <span className="blue">Documentation</span> lorem
              ipsum dolor sit amet.
              <span className="purple">
                lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
              </span>
            </p>
          </div>
          <div className="right">
            <div className="img-container">
              <img src={Terminal} alt="Terminal" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developer;
