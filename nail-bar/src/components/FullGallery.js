import React from 'react';
import { useInView } from 'react-intersection-observer';
import nails from '../images/nails.jpeg';
import nails2 from '../images/nails2.jpeg';
import nails3 from '../images/nails3.jpeg';
import nails4 from '../images/nails4 .jpeg';
import nails5 from '../images/nails5.jpeg';
import nails6 from '../images/nails6.jpeg';
import nails7 from '../images/nails7.jpeg';
import nails8 from '../images/nails8.jpeg';
import nails9 from '../images/nails9.jpeg';
import nails10 from '../images/nails10.jpeg';
import nails11 from '../images/nails11.jpeg';
import nails12 from '../images/nails12.jpeg';
import nails13 from '../images/nails13.jpeg';
import nails14 from '../images/nails14.jpeg';
import nails15 from '../images/nails15.jpeg';
import nails16 from '../images/nails16.jpeg';
import nails17 from '../images/nails17.jpeg';
import nails18 from '../images/nails18.jpeg';
import nails19 from '../images/nails19.jpeg';
import nails20 from '../images/nails20.jpeg';
import nails21 from '../images/nails21.jpeg';
import nails22 from '../images/nails22.jpeg';
import nails23 from '../images/nails23.jpeg';

const images = [
  nails,
  nails2,
  nails3,
  nails4,
  nails5,
  nails6,
  nails7,
  nails8,
  nails9,
  nails10,
  nails11,
  nails12,
  nails13,
  nails14,
  nails15,
  nails16,
  nails17,
  nails18,
  nails19,
  nails20,
  nails21,
  nails22,
  nails23,
];

const Gallery = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`py-10 bg-gradient-to-r from-pink-500 to-purple-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={src} alt={`Gallery ${index}`} className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
