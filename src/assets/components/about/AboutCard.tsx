import React from "react";
import "./About.css";

const AboutCard = (props: {
  icon: React.ReactNode;
  heading: string;
  text: string;
}) => {
  return (
    <>
      <div className="icon-container">{props.icon}</div>
      <h3>{props.heading} </h3>
      <p>{props.text}</p>
    </>
  );
};

export default AboutCard;
