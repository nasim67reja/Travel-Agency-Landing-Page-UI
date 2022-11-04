import React from "react";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <section className="section section-testimonial">
      <div className="grid-2-cols container grid">
        <div className="text-box">
          <div className="title">Testimonials</div>
          <h2 className="heading-secondary">What people say about Us.</h2>
        </div>
        <div className="slider-box">slider here</div>
      </div>
    </section>
  );
};

export default Testimonial;
