import React from 'react';

const InfoSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="/images/info.jpg" 
            alt="Chef cooking" 
            className="rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[400px]" 
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Crafted with Passion
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Chef's Delight, every dish is a story — a carefully curated blend of tradition, innovation, and locally sourced ingredients. Experience a dining journey where culinary art meets heartfelt service.
          </p>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
