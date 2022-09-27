import {socialLinks} from '../data';
import {IconContext} from 'react-icons';
import React from 'react';


/**
 * Generates the social media icons.
 * @return {React.Fragment}
 */
export default function Socials() {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          href={href}
          key={label}>
          <IconContext.Provider value={{size: 30}}>
            <Icon/>
          </IconContext.Provider>
        </a>
      ))}
    </>
  );
}
