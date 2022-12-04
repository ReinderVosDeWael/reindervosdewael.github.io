import Image from 'next/image';
import React from 'react';
// import classNames from 'classnames';
import {heroData} from '../data/data';
import Socials from './Socials';
import {BiChevronDownCircle} from 'react-icons/bi';
import {IconContext} from 'react-icons';
import Div100vh from 'react-div-100vh';

/**
 * Creates the hero image.
 * @return {Component}
 */
const Hero = function() {
  const imageSrc = heroData['imageSrc'];
  const name = heroData['name'];
  const description = heroData['description'];
  // const actions = heroData['actions']; // TODO

  return (
    <Div100vh className="d-flex justify-content-center align-items-center"
      id="hero">
      <Image
        alt="hero_image"
        src={imageSrc}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <div
        className="hero_overlay_container">
        <div className="position-relative" style={{fontSize: '1.1rem'}}>
          <h1><strong>{name}</strong></h1>
          {description}
        </div>
        <div className="d-flex gap-5 pt-3">
          <Socials/>
        </div>
      </div>
      <div
        className="d-flex justify-content-center position-absolute"
        style={{bottom: '3%'}}>
        <a aria-label="About" href="#about" key="About">
          <IconContext.Provider value={{size: '40', color: 'white'}}>
            <BiChevronDownCircle/>
          </IconContext.Provider>
        </a>
      </div>
    </Div100vh>
  );
};
Hero.displayName = 'Hero';

export default Hero;
