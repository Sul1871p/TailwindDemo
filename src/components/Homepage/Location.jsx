// import React from 'react';

// const LocationContact = () => {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        
//         {/* Google Maps */}
//         <div className="w-full h-[400px]">
//           <iframe
//             title="Restaurant Location"
//             className="w-full h-full rounded-2xl shadow-lg"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086499382526!2d-122.4194155846797!3d37.77492927975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d3271e1%3A0x1d2f2f2d676daeb3!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1617716834204!5m2!1sen!2sus"
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white p-8 rounded-2xl shadow-lg">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//             Contact Us
//           </h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//                 placeholder="Your name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//                 placeholder="you@example.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea
//                 rows="4"
//                 className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//                 placeholder="Write your message..."
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LocationContact;



import React from 'react';

const LocationContact = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Google Map */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border-2 border-red-200">
          <iframe
            title="Restaurant Location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086499382526!2d-122.4194155846797!3d37.77492927975943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d3271e1%3A0x1d2f2f2d676daeb3!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1617716834204!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4 border-gray-200">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-red-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
