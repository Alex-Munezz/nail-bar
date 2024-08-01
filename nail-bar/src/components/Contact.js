import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
