import React from 'react';
import {experienceData} from '../data';
import {educationData} from '../data';
import {certificateData} from '../data';

/**
 * Creates an experience section.
 * @param {Array} data Array containing objects containing the title, location,
 * date, and content of each entry.
 * @param {string} title Title of the section.
 * @return {React.Component}
 */
function createSection(data, title) {
  return (
    <div className="experience">
      <div className="experience_content">
        <div className="experience_left">
          <h1 className="section_title">{title}</h1>
        </div>
        <div className="experience_right">
          {data.map((e) => (createSectionContent(e)))}
        </div>
      </div>
    </div>
  );
}

/**
 * Creates the content of each section.
 * @param {Object} e The data to place in the section.
 * @return {React.Component}
 */
function createSectionContent(e) {
  if ('href' in e) {
    return (
      <div className="experience_right">
        <div className="experience_item" key={e['title']}>
          <h1 className="experience_title">{e['title']}</h1>
          <span className="experience_location">{e['location']}</span>
          <span> • </span>
          <span className="experience_date">{e['date']}</span>
          <span> • </span>
          <span ><a href={e['href']}>Show credential</a></span>
          <p>{e['content']}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="experience_right">
        <div className="experience_item" key={e['title']}>
          <h1 className="experience_title">{e['title']}</h1>
          <span className="experience_location">{e['location']}</span>
          <span> • </span>
          <span className="experience_date">{e['date']}</span>
          <p>{e['content']}</p>
        </div>
      </div>
    );
  }
}

/**
 * Generates the experience and education sections.
 * @return {Component}
 */
export default function Experience() {
  const allData = [experienceData, educationData, certificateData];
  const titles = ['Experience', 'Education', 'Certificates'];
  const section = [];
  for (let i = 0; i < allData.length; i++) {
    section.push(<>{createSection(allData[i], titles[i])}</>);
  }
  return section;
}
