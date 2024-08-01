import React from 'react';

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20 bg-purple-500 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-purple-700 rounded-lg shadow-md">
            <p className="mb-4">"Amazing service! My nails have never looked better."</p>
            <span>- Jane Doe</span>
          </div>
          <div className="p-6 bg-purple-700 rounded-lg shadow-md">
            <p className="mb-4">"Friendly staff and a wonderful atmosphere. Highly recommend!"</p>
            <span>- Sarah Smith</span>
          </div>
          <div className="p-6 bg-purple-700 rounded-lg shadow-md">
            <p className="mb-4">"Best nail bar in town! I love their nail art designs."</p>
            <span>- Emily Johnson</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
