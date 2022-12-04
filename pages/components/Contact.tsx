import React from 'react';

import {contactData} from '../data/data';

const Contact = function() {
  return (
    <div className="about pb-4" id="contact">
      <div className="base_content">
        <div className="base_content_left">
        </div>
        <div>
          <div>
            <h1 className="text-white"><strong>Contact</strong></h1>
          </div>
          <div className="text-white">{contactData['description']}</div>
        </div>
      </div>
    </div>
  );
};

Contact.displayName = 'Contact';
export default Contact;
