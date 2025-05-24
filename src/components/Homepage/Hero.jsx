import React, { useEffect, useState } from 'react';
import hero1 from "../../assets/Images/hero1.jpg";
import hero2 from "../../assets/Images/hero2.jpg";
import hero3 from "../../assets/Images/interior.jpg";


const images =[hero1, hero2, hero3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image Carousel */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`hero-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Welcome to Chef's Delight
          </h1>
          <p className="text-2xl md:text-xl font-light text-gray-300 font-extrabold max-w-2xl mx-auto">
            Where flavors meet finesse. Enjoy fine dining with a modern twist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
