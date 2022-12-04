import React from 'react';
import Socials from './Socials';

const Footer = function() {
  return (
    <div className="footer" id="footer">
      <div className="d-flex gap-5 justify-content-center">
        <Socials/>
      </div>
      <div className="d-flex pt-3 justify-content-center">
        <small>Source code of this website is available on my Github.</small>
      </div>
    </div>
  );
};

Footer.displayName = 'Footer';
export default Footer;
