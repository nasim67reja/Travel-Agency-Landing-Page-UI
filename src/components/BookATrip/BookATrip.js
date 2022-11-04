import React from "react";
import "./BookATrip.scss";
import choose from "../../assets/choose.svg";
import payment from "../../assets/payment.svg";
import car from "../../assets/car.svg";
import tripBg from "../../assets/tripBg.svg";
import Greece from "../../assets/Greece.png";

import leaf from "../../assets/leaf.svg";
import map from "../../assets/map.svg";
import send from "../../assets/send.svg";
import building from "../../assets/building.svg";
import heart from "../../assets/heart.svg";
import Mask from "../../assets/Mask.png";

const Feature = ({ iconImg, h5 }) => {
  return (
    <div className="feature">
      <div className="icon-box">
        <img src={iconImg} alt="svg-icon" />
      </div>
      <div>
        <h5>{h5}</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.
        </p>
      </div>
    </div>
  );
};

const BookATrip = () => {
  return (
    <section className="section section-BookATrip">
      <div className="grid-2-cols booktrip-box container grid">
        <div className="text-box">
          <div className="title">Easy and Fast</div>
          <h2 className="heading-secondary">
            Book your next trip in 3 easy steps
          </h2>
          <div className="features">
            <Feature iconImg={choose} h5="Choose Destination" />
            <Feature iconImg={payment} h5="Make Payment" />
            <Feature iconImg={car} h5="Reach Airport on Selected Date" />
          </div>
        </div>
        <div className="img-box">
          <img className="trip-bg" src={tripBg} alt="svg-background" />

          <div className="group-5">
            <div className="img-main">
              <img src={Greece} alt="a women standing on Greece" />
            </div>
            <div className="text-info--box">
              <h4>Trip To Greece</h4>
              <div className="date-info">14-29 June | by by Robbin joseph</div>
              <div className="icon-list">
                <div className="icon-box">
                  <img src={leaf} alt="svg-icon" />
                </div>
                <div className="icon-box">
                  <img src={map} alt="svg-icon" />
                </div>
                <div className="icon-box">
                  <img src={send} alt="svg-icon" />
                </div>
              </div>
              <div className="group-footer">
                <div>
                  <img src={building} alt="icon-building" />
                  <span>24 people going</span>
                </div>
                <div></div>
                <img src={heart} alt="icon-heart" />
              </div>
            </div>
          </div>
          <div className="group-4">
            <img src={Mask} alt="building" />
            <div className="group-4-textbox">
              <span>Ongoing</span>
              <h4>Trip to rome</h4>
              <div className="progress">
                <span>40%</span>
                <span className="complete">completed</span>
              </div>
              <div className="line">
                <div className="inner-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookATrip;
