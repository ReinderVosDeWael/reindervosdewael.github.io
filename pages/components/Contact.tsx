import React from 'react';

import {contactData} from '../data/data';

const Contact = function() {
  return (
    <div className="about" id="contact">
      <div className="base_content about_content">
        <div className="base_content_left about_left">
        </div>
        <div className="about_right">
          <div className="about_title_container">
            <h1 className="about_title">Contact</h1>
          </div>
          <div className="about_description">{contactData['description']}</div>
        </div>
      </div>
    </div>
  );
};

Contact.displayName = 'Contact';
export default Contact;
