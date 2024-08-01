import React from 'react';

const Gallery = () => {
  const images = [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg",
    // Add more image paths
  ];

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
        </div>
      </div>
    </div>
  );
};

export default Gallery;
