import React from 'react';

import About from './components/About';
import Hero from './components/Hero';
import Meta from './components/Meta';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

export default function Home() {
  return (
    <div className="container">
        <Meta />
        <Navbar />
        <Hero />
        <About />
        <Resume />
    </div>
  );
}
