import React from 'react';
import {certificateData} from '../data/data';
import {educationData} from '../data/data';
import {experienceData} from '../data/data';
import {projectsData} from '../data/data';
import {skillsData} from '../data/data';

interface ResumeData {
  title: string;
  location: string;
  date: string;
  href?: string;
  skills?: Array<string>;
}


function createExperienceSection(
    data: Array<ResumeData>,
    title: string,
    addSeparator: boolean,
) {
  return (
    <div className="base_content">
      <div className="base_content_left">
        <h1 className="section_title">{title}</h1>
      </div>
      <div className="base_content_right">
        {data.map((e: object) => createExperienceSectionContent(e))}
        {addSeparator && <hr className="section_separator" />}
      </div>
    </div>
  );
}


function createExperienceSectionContent(e: ResumeData) {
  return (
    <div className="resume_right">
      <div className="resume_item" key={e['title']}>
        <h1 className="resume_title">{e['title']}</h1>
        <span className="resume_location">{e['location']}</span>
        <span> • {e['date']}</span>
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
        {'skills' in e && (
          <p className="resume_skills">Skills: {e['skills'].join(' • ')}</p>
        )}
        <p className="resume_description">{e['content']}</p>
      </div>
    </div>
  );
}

function skillsSection() {
  const skills: JSX.Element[][] = [];
  for (let i = 0; i < skillsData.length; i++) {
    const skillSet = skillsData[i];
    skills.push([
      <p className="skillset_name" key={i}>
        {skillSet['name']}
      </p>,
    ]);
    skills.push(
        skillSet['skills'].map(({name, level}, idx) => {
          return skill(name, level, idx);
        }),
    );
  }

  return (
    <div className="base_content">
      <div className="base_content_left">
        <h1 className="section_title">Skills</h1>
      </div>
      <div className="base_content_right">
        <div className="skills_content_right">{skills}</div>
      </div>
    </div>
  );
}

function skill(skillName: string, level: number, key, max = 10) {
  const percentage = Math.round((level / max) * 100);
  return (
    <div className="skill_container" key={key}>
      <span className="skill_name">{skillName}</span>
      <div className="skill_bottom_bar">
        <div className="skill_top_bar" style={{width: `${percentage}%`}} />
      </div>
    </div>
  );
}

export default function Resume() {
  const allData = [
    experienceData,
    projectsData,
    educationData,
    certificateData,
  ];
  const titles = ['Experience', 'Projects', 'Education', 'Certificates'];
  const experienceSection: JSX.Element[] = [];
  for (let i = 0; i < allData.length; i++) {
    experienceSection.push(
        <>{createExperienceSection(allData[i], titles[i], true)}</>,
    );
  }
  return (
    <div className="resume" id="resume">
      {experienceSection}
      {skillsSection()}
    </div>
  );
}
