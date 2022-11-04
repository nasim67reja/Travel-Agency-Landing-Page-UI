import React, { useState } from "react";
import "./Testimonial.scss";
import man from "../../assets/man.png";
import arrowDown from "../../assets/arrowDown.svg";

// const Content=()=

const DotBox = () => {
  const [firstDotActive, setFirstDotActive] = useState(false);
  const [secondDotActive, setScondDotActive] = useState(true);
  const [thirdDotActive, setThirdDotActive] = useState(false);
  return (
    <div className="dot-box">
      <span
        className={`dot ${firstDotActive ? "dot-active" : ""}`}
        onClick={() => {
          setFirstDotActive(true);
          setScondDotActive(false);
          setThirdDotActive(false);
        }}
      ></span>
      <span
        className={`dot ${secondDotActive ? "dot-active" : ""}`}
        onClick={() => {
          setFirstDotActive(false);
          setScondDotActive(true);
          setThirdDotActive(false);
        }}
      ></span>
      <span
        className={`dot ${thirdDotActive ? "dot-active" : ""}`}
        onClick={() => {
          setFirstDotActive(false);
          setScondDotActive(false);
          setThirdDotActive(true);
        }}
      ></span>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="section section-testimonial">
      <div className="grid-2-cols container grid">
        <div className="text-box">
          <div className="title">Testimonials</div>
          <h2 className="heading-secondary">What people say about Us.</h2>
          <DotBox />
        </div>
        <div className="slider-box">
          <div className="content-box">
            <div className="content content-1 active">
              <img src={man} alt="a man" />
              <div className="content-text">
                <blockquote>
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </blockquote>
                <h6>Mike taylor</h6>
                <p>Lahore, Pakistan</p>
              </div>
            </div>

            {/* <div className="next">hi</div> */}
          </div>
          <div className="pagination">
            <div>
              <img
                className="arrow arrow-up"
                src={arrowDown}
                alt="arrow-down"
              />
              <img
                className="arrow arrow-down"
                src={arrowDown}
                alt="arrow-down"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
