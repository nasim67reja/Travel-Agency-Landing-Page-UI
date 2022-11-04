import React from "react";
import "./Destinations.scss";
import EuropeC from "../../assets/EuropeC.png";
import RomeC from "../../assets/RomeC.png";
import LondonC from "../../assets/LondonC.png";
import navigation from "../../assets/navigation.svg";
import DecoreCard from "../../assets/DecoreCard.svg";

const Card = ({ imgSrc }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="text-box">
        <div className="place-box">
          <div>London, UK</div>
          <div>$4.2k</div>
        </div>
        <div className="days">
          <span>
            <img src={navigation} alt="navigation logo" />
          </span>
          <span>12 Days Trip</span>
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  return (
    <section className="section section-destination">
      <div className="container">
        <div className="title">Top Selling</div>
        <h2 className="heading-secondary">Top Destinations</h2>
        <div className="grid-3-cols cards grid">
          <Card imgSrc={RomeC} />
          <Card imgSrc={LondonC} />
          <Card imgSrc={EuropeC} />
          <div className="bg-icon">
            <img src={DecoreCard} alt="svg icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
