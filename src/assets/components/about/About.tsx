import React from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiDocsify } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>A growing protocol Systems</h2>
        <p>The MonkeyFI protocol System empowers Monkeys of all races</p>
        <div className="card-container">
          <div className="card">
            <AboutCard
              icon={<SiHiveBlockchain className="icon" />}
              heading="Hive Blockchain"
              text="A decentralized platform for building and deploying blockchain applications."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiStrapi className="icon" />}
              heading="Strapi"
              text="A free and open-source headless CMS. lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiDocsify className="icon" />}
              heading="Docsify"
              text="A documentation site generator. lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<VscServerProcess className="icon" />}
              heading="Server Process"
              text="A tool for managing server processes.lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            />
          </div>
        </div>
      </div>
      <a href="/" className="btn">
        Use MonkeyFI
      </a>
    </div>
  );
};

export default About;
