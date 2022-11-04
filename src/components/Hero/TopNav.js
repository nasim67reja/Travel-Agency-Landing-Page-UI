import React, { useState } from "react";
import "./TopNav.scss";
import Logo from "../../assets/Logo.svg";
import arrowDown from "../../assets/arrowDown.svg";

const TopNav = () => {
  const [ovarlayIsOpen, setOvarlayIsOpen] = useState(false);
  return (
    <div className="top-nav">
      <div>
        <img className="nav-logo" src={Logo} alt="Logo" />
      </div>
      <ul className="navbar">
        <li>
          <a href="#adf">Desitnations</a>
        </li>
        <li>
          <a href="#adkfl">Hotels</a>
        </li>
        <li>
          <a href="#adf">Flights</a>
        </li>
        <li>
          <a href="#addf">Bookings</a>
        </li>
        <li>
          <button>Sign up</button>
        </li>
        <li className="option">
          <button onClick={() => setOvarlayIsOpen((prevSt) => !prevSt)}>
            <span>EN</span>
            <img src={arrowDown} alt="arrow-down" />
          </button>
          {ovarlayIsOpen && (
            <ul className="ovarlay">
              <li>BN</li>
              <li>SP</li>
              <li>PUR</li>
              <li>GER</li>
              <li>HIN</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
