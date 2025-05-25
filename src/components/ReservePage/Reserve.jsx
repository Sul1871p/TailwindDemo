import React from 'react';
import reserveImage from '../../assets/Images/reserve-table.jpg'; // replace with your actual image

const Reserve = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        
        {/* Image Section */}
        <div className="hidden md:block">
          <img 
            src={reserveImage}
            alt="Reserve Table"
            className="w-full h-auto rounded-3xl shadow-xl"
          />
        </div>

        {/* Form Section */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Reserve a Table</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Book your table now and enjoy a delightful experience at Chef's Delight.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Guests</label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Special Requests</label>
              <textarea
                rows="3"
                placeholder="Optional message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
