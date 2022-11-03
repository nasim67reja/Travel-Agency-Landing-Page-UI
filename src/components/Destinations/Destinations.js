import React from "react";
import "./Destinations.scss";

const Card = () => {
  return (
    <div className="card">
      <div>1</div>
      <div>2</div>
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
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
