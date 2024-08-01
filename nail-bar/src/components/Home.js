import React from 'react';
import Services from './Services';
import Gallery from './Gallery';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-pink-500 to-purple-500  py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-white text-5xl font-bold mb-4">Welcome to My Nail Bar</h1>
        <p className="text-white text-xl mb-8">Experience the best nail care services in town</p>
        </div><br />
      <Services />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
