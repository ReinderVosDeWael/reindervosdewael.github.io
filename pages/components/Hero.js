import Image from 'next/image';
import { UseState } from 'react'
// import classNames from 'classnames';

import { heroData } from '../data';
import Socials from './Socials';
import { BiChevronDownCircle } from "react-icons/bi";
import { IconContext } from "react-icons";


const Hero = ({aboutRef}) => {
  const imageSrc = heroData['imageSrc']
  const name = heroData['name']
  const description = heroData['description']
  const actions = heroData['actions'] //TODO
  console.log(aboutRef)
  const scrollTo = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView();
  }

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
          onClick={e=>scrollTo(e)}>
            <IconContext.Provider value={{ size: 40 }}>
            <BiChevronDownCircle />
            </IconContext.Provider>
        </a>
      </div>
    </div>
  )
}

export default Hero