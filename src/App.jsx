import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

import Navbar from './components/Navbar';
import Footer from './components/Footer';

=======
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
>>>>>>> 9ce5eece53e82ac57f3680925f259fc8f28b68f6
import Home from './pages/Home';
import About from './pages/About';
import Fleet from './pages/Fleet';
import Tour from './pages/Tour';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
<<<<<<< HEAD
import LocalBookingHome from './pages/LocalBookingHome';

import './App.css';
=======
>>>>>>> 9ce5eece53e82ac57f3680925f259fc8f28b68f6

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/local-booking" element={<LocalBookingHome />} />
=======
>>>>>>> 9ce5eece53e82ac57f3680925f259fc8f28b68f6
      </Routes>
      <Footer />
    </>
  );
};

export default App;
