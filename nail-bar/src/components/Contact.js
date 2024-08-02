import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">Want to book online?</h2>
        <form action="https://formspree.io/f/xpwadjgq" method="POST" className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              name='Name'
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name='Email'
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              name='Booking date'
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Date"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name='What they had to say'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Send Booking
          </button>
        </form>
        
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Our Location</h3>
          <div className="flex items-center justify-center text-gray-600 mb-8">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl mr-2" />
            <span>Ngong town stage, Behind Brims Arcade Building, Shop no. BC14</span>
          </div>

          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Contact Us on WhatsApp</h3>
          <a
            href="https://wa.me/+254716554709"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-2" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
