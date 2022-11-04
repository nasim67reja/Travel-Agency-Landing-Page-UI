import React from "react";
import "./Subscribe.scss";
import send2 from "../assets/send2.svg";
import email from "../assets/email.svg";
import Group42 from "../assets/Group42.svg";
import Group43 from "../assets/Group43.svg";
import dot from "../assets/dot.svg";

const Subscribe = () => {
  return (
    <section className="section section-subscribe">
      <div className="subscribe-box container">
        <div className="send-box">
          <img src={send2} alt="send icon" />
        </div>
        <div className="group-78">
          <h3>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h3>
          <form>
            <div>
              <span className="input-box">
                <img src={email} alt="email icon" />
                <input
                  type="email"
                  id="fname"
                  name="fname"
                  placeholder="Your Email"
                />
              </span>
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="rectangle"></div>
        <div className="mask-left">
          <img src={Group42} alt="line svg" />
        </div>
        <div className="mask-right">
          <img src={Group43} alt="line svg" />
        </div>
        <div className="dot">
          <img src={dot} alt="+ svg" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
