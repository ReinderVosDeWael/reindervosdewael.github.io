import {React} from 'react';

import About from './components/About';
import Hero from './components/Hero';
import Meta from './components/Meta';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

// Say hello to the people digging under the hood :).
console.log(
    `%cWell... you\'re digging into the code of my website, eh? :-) 
I hope you enjoy, though it may be easier to just go straight to
the source code at:
https://github.com/ReinderVosDeWael/ReinderVosDeWael.github.io.`,
    'font-size: large',
);

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
