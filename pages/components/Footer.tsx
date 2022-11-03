import React from 'react';
import Socials from './Socials';

const Footer = function() {
  return (
    <div className="footer" id="footer">
      <div className="footer_socials">
        <Socials/>
      </div>
      <div className="footer_text">
        Source code of this website is available on my Github.
      </div>
    </div>
  );
};

Footer.displayName = 'Footer';
export default Footer;
