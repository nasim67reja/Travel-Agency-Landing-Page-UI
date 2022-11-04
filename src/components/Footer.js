import React from "react";
import "./Footer.scss";

import facebook from "../assets/Facebook.svg";
import instagram from "../assets/instagramS.svg";
import twitter from "../assets/twitter.svg";

import googlePlay from "../assets/google-play.svg";
import apple from "../assets/apple.svg";
import playVector from "../assets/playVector.svg";
import appleVector from "../assets/appleVector.svg";
import tripBg from "../assets/tripBg.svg";

const Column = ({ h4, first, second, third }) => {
  return (
    <div className="column">
      <h4>{h4}</h4>
      <ul>
        <li>
          <a href="#dkaj">{first}</a>
        </li>
        <li>
          <a href="#dkaj">{second}</a>
        </li>
        <li>
          <a href="#dkaj">{third}</a>
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="section section-Footer">
      <div className="grid-5-cols footer-box container grid">
        <div className="column">
          <h3>Jadoo.</h3>
          <div className="text">
            Book your trip in minute, get full Control for much longer.
          </div>
        </div>

        <Column h4="Company" first="About" second="Careers" third="Mobile" />
        <Column
          h4="Contact"
          first="Help/FAQ"
          second="Press"
          third="Affilates"
        />
        <Column
          h4="More"
          first="Airlinefees"
          second="Airline"
          third="Low fare tips"
        />

        <div className="column">
          <div className="social-icon">
            <div className="icon-box">
              <img src={facebook} alt="facebook icon" />
            </div>
            <div className="icon-box icon-box--special">
              <img src={instagram} alt="instagram icon" />
            </div>
            <div className="icon-box">
              <img src={twitter} alt="twitter icon" />
            </div>
          </div>
          <div className="text-app">Discover our app</div>
          <div className="store">
            <div className="store-box">
              <img className="icon-w" src={googlePlay} alt="google play icon" />
              <img
                className="vector-w"
                src={playVector}
                alt="Google play text"
              />
            </div>

            <div className="store-box">
              <img className="icon-w" src={apple} alt="google play icon" />
              <img
                className="vector-w"
                src={appleVector}
                alt="Apple play store text"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg">
        <img src={tripBg} alt="background color" />
      </div> */}
      <div className="center">All rights reserved@jadoo.co</div>
    </section>
  );
};

export default Footer;
