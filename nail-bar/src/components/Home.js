import React from 'react';

const Home = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nail Bar</h1>
        <p className="text-xl mb-8">Experience the best nail care services in town</p>
        <a href="#services" className="bg-white text-pink-600 py-2 px-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition">Explore Services</a>
      </div>
    </div>
  );
};

export default Home;
