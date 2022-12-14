import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Meta from './components/Meta';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Meta/>
      <Navbar/>
      <Hero/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
