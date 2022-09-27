import Image from 'next/image';
import {aboutData} from '../data';
import {forwardRef} from 'react';

const About = forwardRef((props, ref) => {
  const profileImageSrc = aboutData['profileImageSrc'];
  const description = aboutData['description'];
  const aboutItems = aboutData['aboutItems'];

  return (
    <div className="about" ref={ref}>
      <div className="about_content">
        <div className="about_left">
          <div className="about_profile_image_container">
            <Image
              src={profileImageSrc}
              alt="Profile Image"
            />
          </div>
        </div>

        <div className="about_right">
          <div className="about_title_container">
            <h1 className="about_title">About me</h1>
          </div>
          <div className="about_description">
            {description}
          </div>

          <div className="about_list_container">
            <ul className="about_list">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="about_list_item" key={idx}>
                  {Icon && <Icon class="about_icons" />}
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
});
export default About;
