import {React} from 'react';

import About from './components/About';
import Hero from './components/Hero';
import Meta from './components/Meta';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

/**
 * Parent component for the website.
 * @return {React.Component}
 */
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

