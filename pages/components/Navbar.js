import {React, useState, useCallback} from 'react';
import {HiMenu} from 'react-icons/hi';
import {IconContext} from 'react-icons';

import {NavbarData} from '../data';

// Desktop navbar simply uses section labels.
const desktopNavBar = (
  <div className="base_navbar desktop_navbar">
    {NavbarData.map(({label, href}, idx) => {
      return (
        <div className="navbar_item" key={idx}>
          <a href={href} className="navbar_link">
            <span className="navbar_text">{label}</span>
          </a>
        </div>
      );
    })}
  </div>
);

/** Mobile navbar uses a dropdown menu.
 * @return {Component}
 */
function mobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="base_navbar mobile_navbar">
      <div className="mobile_menu_icon_container">
        <button
          aria-label="Menu Button"
          onClick={toggleOpen}>
          <IconContext.Provider value={{color: 'white', size: 30}}>
            <HiMenu />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

/**
 * Creats a navigation bar.
 * @return {React.Component}
 */
export default function Navbar() {
  return (
    <>
      {desktopNavBar}
      {mobileNavBar()}
    </>
  );
}
