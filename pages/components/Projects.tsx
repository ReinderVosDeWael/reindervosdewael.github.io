import Image from 'next/image';
import React from 'react';

import {projectsData} from '../data/data';


const Hero = function() {
  const imageSrc = projectsData['imageSrc'];

  return (
    <div className="projects_container" id='hero'>
      <Image
        alt="hero_image"
        className="hero_image"
        layout="fill"
        objectFit="cover"
        src={imageSrc}
      />
    </div>
  );
};
Hero.displayName = 'Hero';

export default Hero;
