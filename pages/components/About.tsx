import React from 'react';
import Image from 'next/image';
import {aboutData} from '../data/data';
import Container from 'react-bootstrap/Container';
import {Col, Row} from 'react-bootstrap';

const About = function() {
  const profileImageSrc = aboutData['profileImageSrc'];
  const description = aboutData['description'];
  const aboutItems = aboutData['aboutItems'];

  return (
    <div className="about" id="about">
      <div className="base_content">
        <div className="base_content_left d-flex align-items-center">
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

        <div> {/* About content - right */}
          <div>
            <h1 className="text-white"><strong>{aboutData['name']}</strong></h1>
          </div>
          <div className="text-white text-align-justify">{description}</div>

          <Container className="pb-5 line-height-10rem">
            <Row sm={1} md={2}>
              {aboutItems.map(({label, text, Icon}, idx) => (
                <Col key={idx}>
                  {Icon && <Icon className="about_icons"/>}
                  <span
                    className="p-2 text-white"><strong>{label}:</strong></span>
                  <span style={{color: '#d1d5db'}}>{text}</span>
                </Col>

              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

About.displayName = 'About';
export default About;
