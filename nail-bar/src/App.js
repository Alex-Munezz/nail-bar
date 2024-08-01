// App.js
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FullGallery from './components/FullGallery';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Gallery' element={<FullGallery />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
