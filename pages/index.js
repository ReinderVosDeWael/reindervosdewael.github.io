import {React, createRef} from 'react';

import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Meta from './components/Meta';
import {metaData} from './data';

/**
 * Parent component for the website.
 * @return {React.Component}
 */
export default function Home() {
  const title = metaData['title'];
  const description = metaData['description'];
  const aboutRef = createRef();

  return (
    <div className="container">
      <Meta title={title} description={description} />
      <Hero ref={aboutRef}/>
      <About ref={aboutRef}/>
      <Experience />
    </div>
  );
}
