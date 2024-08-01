import React from 'react'
import manicure from '../images/nails13.jpeg';
import pedicure from '../images/nails8.jpeg';
import NailArt from '../images/nails16.jpeg';

const Services = () => {

  const services = [
    {
      image: manicure,
      title: "Manicure",
      description: "Get the perfect manicure with our professional services.",
    },
    {
      image: pedicure,
      title: "Pedicure",
      description: "Relax and enjoy a luxurious pedicure session.",
    },
    {  
      image: NailArt ,
      title: "Nail Art",
      description: "Express your style with our custom nail art designs.",
    },
  ];

  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-pink-100 rounded-lg shadow-lg">
              <img src={service.image} alt='' className='h-80 w-full rounded-lg' /><br />
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
