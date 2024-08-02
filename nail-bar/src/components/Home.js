// Home.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Services from './Services';
import Gallery from './Gallery';
import Testimonials from './Testimonials';

const Home = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: galleryRef, inView: galleryInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div id="home" className="bg-gradient-to-r from-pink-500 to-purple-500 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-white text-5xl font-bold mb-4">Welcome to My Nail Bar</h1>
        <p className="text-white text-xl mb-8">Experience the best nail care services in town</p>
      </div>
      <div
        ref={servicesRef}
        className={`transition-opacity duration-1000 ${servicesInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <Services />
      </div>
      <div
        ref={galleryRef}
        className={`transition-opacity duration-1000 ${galleryInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <Gallery />
      </div>
      <div
        ref={testimonialsRef}
        className={`transition-opacity duration-1000 ${testimonialsInView ? 'opacity-100' : 'opacity-0'}`}
      >
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
