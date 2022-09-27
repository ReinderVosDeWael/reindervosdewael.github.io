import Image from 'next/image';
import React, {forwardRef} from 'react';
// import classNames from 'classnames';

import {heroData} from '../data';
import Socials from './Socials';
import {BiChevronDownCircle} from 'react-icons/bi';
import {IconContext} from 'react-icons';


/**
 * Creates the hero image.
 * @param {HTMLButtonElement} props ?? TODO: TYPE IS WRONG
 * @param {RefObject} ref Reference to the about section.
 * @return {Component}
 */
const Hero = forwardRef((props, ref) => {
  const imageSrc = heroData['imageSrc'];
  const name = heroData['name'];
  const description = heroData['description'];
  // const actions = heroData['actions']; // TODO

  return (
    <div className="hero_container">
      <Image
        alt="hero_image"
        class="hero_image"
        layout="fill"
        objectFit="cover"
        src={imageSrc}
      />
      <div className="hero_overlay_container">
        <div className="hero_text_container">
          <h1 className="hero_text_title">
            {name}
          </h1>
          <h2 className="hero_text_description">
            {description}
          </h2>
        </div>
        <div className="hero_socials">
          <Socials />
        </div>
      </div>
      <div className="hero_links_container">
        <a
          aria-label="About"
          onClick={(e) => ref.current.scrollIntoView()}>
          <IconContext.Provider value={{size: 40}}>
            <BiChevronDownCircle />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
});
Hero.displayName = 'Hero';

export default Hero;
