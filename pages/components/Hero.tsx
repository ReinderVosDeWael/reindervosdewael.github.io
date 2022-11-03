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
    <Div100vh className="hero_container" id="hero">
      <Image
        alt="hero_image"
        className="hero_image"
        src={imageSrc}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <div className="hero_overlay_container">
        <div className="hero_text_container">
          <h1 className="hero_text_title">{name}</h1>
          <h2 className="hero_text_description">{description}</h2>
        </div>
        <div className="hero_socials">
          <Socials />
        </div>
      </div>
      <div className="hero_links_container">
        <a aria-label="About" href="#about" key="About">
          <IconContext.Provider value={{size: '40', color: 'white'}}>
            <BiChevronDownCircle />
          </IconContext.Provider>
        </a>
      </div>
    </Div100vh>
  );
};
Hero.displayName = 'Hero';

export default Hero;
