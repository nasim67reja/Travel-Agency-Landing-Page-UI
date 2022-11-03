import React from "react";
import TopNav from "./TopNav";
import "./Hero.scss";
import HeroContent from "./HeroContent";
// import background from "../../assets/Decore.svg";

const Hero = () => {
  return (
    <section
      className="section section-hero"
      style={{ backgroundImage: `url(/Images/Decore.svg)` }}
    >
      <TopNav />
      <HeroContent />
    </section>
  );
};

export default Hero;
