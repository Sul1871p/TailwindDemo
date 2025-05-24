import React from 'react';
import hero from "../../assets/Images/about-hero.jpg"
import interior from "../../assets/Images/interior.jpg"
import chef from "../../assets/Images/chef.jpg"

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${hero})` }}>
        <h1 className="text-5xl font-bold text-white bg-black/50 px-6 py-2 rounded">About Us</h1>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Welcome to Chef's Delight</h2>
            <p className="text-lg mb-4">
              At Chef's Delight, we serve food that speaks to the soul. From traditional Indian curries to global starters and irresistible desserts, our menu is crafted with love and flavor.
            </p>
            <p className="text-lg">
              Our chefs use the freshest ingredients and authentic recipes to bring every dish to life. Whether you're dining in or ordering online, we promise a delightful culinary experience.
            </p>
          </div>
          <img src={interior} alt="Restaurant Interior" className="rounded-xl shadow-md" />
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-red-600">Our Mission</h3>
            <p>
              To provide an unforgettable dining experience by blending taste, quality, and service in every bite.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-red-600">Our Vision</h3>
            <p>
              To become the most loved and trusted restaurant brand, known for food excellence and heartwarming hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* Meet the Chef Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Head Chef</h2>
          <img src={chef} alt="Head Chef" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" />
          <p className="text-xl font-semibold">Chef Arjun Kapoor</p>
          <p className="mt-2 text-gray-700">
            With over 15 years of culinary expertise, Chef Arjun crafts each dish with passion and perfection. His fusion of classic and modern techniques brings out the best flavors in every meal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
