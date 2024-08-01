import React from 'react';
import nails from '../images/nails.jpeg';
import nails2 from '../images/nails2.jpeg';
import nails3 from '../images/nails3.jpeg';
import nails4 from '../images/nails4 .jpeg';
import nails5 from '../images/nails5.jpeg';
import nails6 from '../images/nails6.jpeg';
import { useNavigate } from 'react-router';


const Gallery = () => {
  const images = [
    nails,
    nails2,
    nails3,
    nails4,
    nails5,
    nails6
  ];

  const navigate=useNavigate();
  const fullgallery = () => {
    navigate('/Gallery');
  }

  return (
    <div id="gallery" className="py-20 bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <img src={image} alt={`Gallery ${index}`} className="w-full h-60 object-cover rounded-lg shadow-lg" />
            </div>
          ))}
        </div><br />
        <button className='more' onClick={fullgallery}>More Images</button>
      </div>
    </div>
  );
};

export default Gallery;
