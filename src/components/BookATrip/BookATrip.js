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
      <div className="grid-2-cols container grid">
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
            <img src={Greece} alt="a women standing on Greece" />
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
                  <span>icon</span>
                  <span>24 people going</span>
                </div>
                <div>icon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookATrip;
