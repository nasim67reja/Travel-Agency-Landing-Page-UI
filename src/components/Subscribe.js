import React from "react";
import "./Subscribe.scss";
import send2 from "../assets/send2.svg";
import email from "../assets/email.svg";

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
        <div className="mask-left"></div>
        <div className="mask-right"></div>
      </div>
    </section>
  );
};

export default Subscribe;
