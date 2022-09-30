import React from 'react';
import {experienceData} from '../data';
import {educationData} from '../data';
import {certificateData} from '../data';

/**
 * Creates a resume section.
 * @param {Array} data Array containing objects containing the title, location,
 * date, and content of each entry.
 * @param {string} title Title of the section.
 * @param {boolean} addSeparator If true, adds a separator line at the end.}
 * @return {React.Component}
 */
function createSection(data, title, addSeparator) {
  return (
    <div className="resume_content">
      <div className="resume_left">
        <h1 className="section_title">{title}</h1>
      </div>
      <div className="resume_right">
        {data.map((e) => createSectionContent(e))}
        {addSeparator && <hr className="section_separator" />}
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
  return (
    <div className="resume_right">
      <div className="resume_item" key={e['title']}>
        <h1 className="resume_title">{e['title']}</h1>
        <span className="resume_location">{e['location']}</span>
        <span> • </span>
        <span className="resume_date">{e['date']}</span>
        {'href' in e && (
          <>
            <span> • </span>
            <span>
              <a href={e['href']}>
                <div className="credential">Show credentials</div>
              </a>
            </span>
          </>
        )}
        <p className='resume_description'>{e['content']}</p>
      </div>
    </div>
  );
}

/**
 * Generates the experience and education sections.
 * @return {Component}
 */
export default function Resume() {
  const allData = [experienceData, educationData, certificateData];
  const titles = ['Experience', 'Education', 'Certificates'];
  const section = [];
  for (let i = 0; i < allData.length; i++) {
    const addSeparator = i !== allData.length - 1;
    section.push(<>{createSection(allData[i], titles[i], addSeparator)}</>);
  }
  return (
    <div className="resume" id="resume">
      {section}
    </div>
  );
}
