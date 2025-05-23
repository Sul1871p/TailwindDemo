import React from "react";
import Navbar from "../../components/Homepage/Navbar";
import Hero from "../../components/Homepage/Hero";
import InfoSection from "../../components/Homepage/InfoSection";
import RecommendedDishes from "../../components/Homepage/Recommended";
import Testimonials from "../../components/Homepage/Testimonials";
import LocationContact from "../../components/Homepage/Location";
import Footer from "../../components/Homepage/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <RecommendedDishes />
      <Testimonials />
      <LocationContact />
      <Footer />
    </>
  );
};

export default Homepage;
