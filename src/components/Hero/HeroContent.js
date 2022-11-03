import React from "react";
import "./HeroContent.scss";
import TravellerPng from "../../assets/TravellerPng.png";
import Polygon from "../../assets/Polygon.svg";
import DecoreHeading from "../../assets/DecoreHeading.svg";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <div className="text-box">
        <span>Best Destinations around the world</span>
        <h1>
          Travel, enjoy and live a new and full life
          <span>
            <img src={DecoreHeading} alt="Svg icon" />
          </span>
        </h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="btn-list">
          <button className="btn btn-cta">Find out more</button>
          <button className="btn btn-play-demo">
            <span>
              <img src={Polygon} alt="" />
            </span>
            Play Demo
          </button>
        </div>
      </div>
      <div className="image-box">
        <img src={TravellerPng} alt="a women with travelling equipment" />
      </div>
    </div>
  );
};

export default HeroContent;
