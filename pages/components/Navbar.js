import React from 'react';
import {HiMenu} from 'react-icons/hi';
import {IconContext} from 'react-icons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="base_navbar mobile_navbar">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <IconContext.Provider value={{size: 30, color: 'white'}}>
          <HiMenu />
        </IconContext.Provider>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {NavbarData.map(({label, href}, idx) => {
          return (
            <a href={href} key={idx}>
              <MenuItem onClick={handleClose}>{label}</MenuItem>
            </a>
          );
        })}
      </Menu>
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
