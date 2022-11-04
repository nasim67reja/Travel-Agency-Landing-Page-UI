import React from "react";
import BookATrip from "./components/BookATrip/BookATrip";
import Destinations from "./components/Destinations/Destinations";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Destinations />
      <BookATrip />
    </div>
  );
};

export default App;
