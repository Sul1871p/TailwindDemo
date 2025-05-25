import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia R.',
    role: 'Food Blogger',
    quote:
      "Chef's Delight completely redefined my idea of fine dining. Their dishes are not only delicious but truly artistic.",
  },
  {
    name: 'Marcus D.',
    role: 'Regular Customer',
    quote:
      "Hands down the best steak I’ve ever had. The staff and ambiance are top-notch.",
  },
  {
    name: 'Lena M.',
    role: 'Event Planner',
    quote:
      "We hosted our engagement dinner here and it was absolutely perfect. The service was seamless and the food — unforgettable.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-red-500">
          What Our Guests Are Saying
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 md:-left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 p-2 rounded-full transition"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          {/* Testimonial */}
          <div className="relative w-full transition-all duration-500 ease-in-out">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  index === current ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'
                }`}
              >
                <p className="text-lg md:text-xl text-gray-200 mb-6 italic">“{testimonial.quote}”</p>
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <span className="text-sm text-gray-400">{testimonial.role}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 md:-right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-red-600 p-2 rounded-full transition"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-red-500' : 'bg-gray-600'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
