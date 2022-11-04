import React from "react";
import "./Logos.scss";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const Logos = () => {
  return (
    <section className="section section-Logos">
      <div className="grid-5-cols logo-box container grid">
        <img src={logo1} alt="company logo" />
        <img src={logo2} alt="company logo" />
        <div className="logo-focus">
          <img src={logo3} alt="company logo" />
        </div>
        <img src={logo4} alt="company logo" />
        <img src={logo5} alt="company logo" />
      </div>
    </section>
  );
};

export default Logos;
