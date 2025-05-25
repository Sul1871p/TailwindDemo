import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg">Have questions or feedback? We'd love to hear from you!</p>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-6 text-lg">
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Our Location</h3>
            <p>123 Food Street, Gourmet City, India</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Email</h3>
            <p>support@chefsdelight.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Hours</h3>
            <p>Monday – Sunday: 11 AM – 11 PM</p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">Find Us on the Map</h3>
        <div className="w-full h-[400px]">
          <iframe
            title="Restaurant Location"
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086499382526!2d-122.4194155846797!3d37.77492927975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d3271e1%3A0x1d2f2f2d676daeb3!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1617716834204!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
