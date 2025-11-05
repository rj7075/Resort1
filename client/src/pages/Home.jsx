// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";

import Dining from "../components/Dining";
import StoriesPreview from "../components/StoriesPreview";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import RoomsCategory from "../components/RoomCategory";
import BookingForm from "../components/BookingForm";

const Home = ({ openLightbox }) => {
  return (
    <div>
      <Hero />
      <RoomsCategory />
      <Dining />
      <StoriesPreview />
      <Reviews />
      <Gallery openLightbox={openLightbox} />
      {/* <BookingForm /> */}
      <Contact />
    </div>
  );
};

export default Home;
