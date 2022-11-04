import React from "react";
import "./Services.scss";
import Dish from "../../assets/Dish.png";
import Microphone from "../../assets/Microphone.png";
import Settings from "../../assets/settings.png";
import Aeroplane from "../../assets/Aeroplane.png";
import dot from "../../assets/ServiceDot.svg";

const Feature = ({ src, alt, h4, description }) => {
  return (
    <div className="feature">
      <img src={src} alt={alt} />
      <h4>{h4}</h4>
      <div>{description}</div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="section section-services">
      <div className="service-box container">
        <img className="dot" src={dot} alt="dot svg" />
        <div className="title">Category</div>
        <h2 className="heading-secondary">We Offer Best Services</h2>
        <div className="features">
          <Feature
            src={Dish}
            alt="dish antena"
            h4="Calculated Weather"
            description="Built Wicket longer admire do barton vanity itself do in it."
          />
          <div className="main-feature">
            <div className="feature feature-highlight">
              <img src={Aeroplane} alt="an Aeroplane" />
              <h4>Best Flights</h4>
              <div>
                Engrossed listening. Park gate sell they west hard for the.
              </div>
            </div>
            <div className="box"></div>
          </div>
          <Feature
            src={Microphone}
            alt="a Microphone"
            h4="Local Events"
            description="Barton vanity itself do in it. Preferd to men it engrossed
              listening."
          />

          <Feature
            src={Settings}
            alt="Settings icon"
            h4="Customization"
            description=" We deliver outsourced aviation services for military customers"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
