import React from "react";
import BookATrip from "./components/BookATrip/BookATrip";
import Destinations from "./components/Destinations/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Logos from "./components/Logos/Logos";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Destinations />
      <BookATrip />
      <Testimonial />
      <Logos />
      <Footer />
    </div>
  );
};

export default App;
