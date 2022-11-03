import React from 'react';
import Image from 'next/image';
import {aboutData} from '../data/data';

const About = function() {
  const profileImageSrc = aboutData['profileImageSrc'];
  const description = aboutData['description'];
  const aboutItems = aboutData['aboutItems'];

  return (
    <div className="about" id="about">
      <div className="base_content about_content">
        <div className="base_content_left about_left">
          <div className="about_profile_image_container">
            <Image
              src={profileImageSrc}
              alt="Profile Image"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>

        <div className="about_right">
          <div className="about_title_container">
            <h1 className="about_title">{aboutData['name']}</h1>
          </div>
          <div className="about_description">{description}</div>

          <div className="about_list_container">
            <ul className="about_list">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="about_list_item" key={idx}>
                  {Icon && <Icon className="about_icons" />}
                  <span className="about_labels">{label}:</span>
                  <span className="about_text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

About.displayName = 'About';
export default About;
