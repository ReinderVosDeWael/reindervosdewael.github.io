import Image from 'next/image';
import { forwardRef } from 'react'
// import classNames from 'classnames';

import { heroData } from '../data';
import Socials from './Socials';
import { BiChevronDownCircle } from "react-icons/bi";
import { IconContext } from "react-icons";


const Hero = forwardRef((props, ref) => {
  const imageSrc = heroData['imageSrc']
  const name = heroData['name']
  const description = heroData['description']
  const actions = heroData['actions'] //TODO

  return (
    <div class="hero_container">
      <Image
        alt="hero_image"
        class="hero_image"
        layout="fill"
        objectFit="cover"
        src={imageSrc}
      />
      <div class="hero_overlay_container">
        <div class="hero_text_container">
          <h1 class="hero_text_title">
            {name}
          </h1>
          <h2 class="hero_text_description">
            {description}
          </h2>
        </div>
        <div class="hero_socials">
          <Socials />
        </div>
      </div>
      <div class="hero_links_container">
        <a
          aria-label="About"
          onClick={e => ref.current.scrollIntoView()}>
          <IconContext.Provider value={{ size: 40 }}>
            <BiChevronDownCircle />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  )
})

export default Hero