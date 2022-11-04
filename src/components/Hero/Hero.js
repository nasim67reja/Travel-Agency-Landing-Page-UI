import React from "react";
import TopNav from "./TopNav";
import "./Hero.scss";
import HeroContent from "./HeroContent";
import background from "../../assets/Decore.svg";
import tripBg from "../../assets/tripBg.svg";

const Hero = () => {
  return (
    <section
      className="section section-hero"
      // style={{ backgroundImage: `url(/Images/Decore.svg)` }}
      // style={{ backgroundImage: `url($bac)` }}
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={tripBg} alt="svg background" className="bg" />
      <TopNav />
      <HeroContent />
    </section>
  );
};

export default Hero;
