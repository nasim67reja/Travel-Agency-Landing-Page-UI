import React from "react";
import "./TopNav.scss";
import Logo from "../../assets/Logo.svg";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="navbar">
        <li>
          <a href="#">Desitnations</a>
        </li>
        <li>
          <a href="#">Hotels</a>
        </li>
        <li>
          <a href="#">Flights</a>
        </li>
        <li>
          <a href="#">Bookings</a>
        </li>
        <li>
          <button>Sign up</button>
        </li>
        <li>EN</li>
      </ul>
    </div>
  );
};

export default TopNav;
