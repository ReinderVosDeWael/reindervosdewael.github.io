import React from 'react';
import {
  certificateData,
  educationData,
  experienceData,
  projectsData,
  skillsData,
} from '../data/data';

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
        {data.map((e: ResumeData) => createExperienceSectionContent(e))}
        {addSeparator && <hr className="section_separator"/>}
      </div>
    </div>
  );
}


function createExperienceSectionContent(e: ResumeData) {
  return (
    <div>
      <div className="pb-1" key={e['title']}>
        <h4>{e['title']}</h4>
        <span><i>{e['location']}</i></span>
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
        <p className="text-align-justify">{e['content']}</p>
      </div>
    </div>
  );
}

function SkillsSection() {
  const skills: JSX.Element[][] = [];
  for (let i = 0; i < skillsData.length; i++) {
    const skillSet = skillsData[i];
    skills.push([
      <h5 className="d-inline-block pt-3" key={i}>
        <strong>{skillSet['name']}</strong>
      </h5>,
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
    <div className="flex-column" key={key}>
      <span className="ms-3">{skillName}</span>
      <div className="skill_bottom_bar">
        <div className="skill_top_bar" style={{width: `${percentage}%`}}/>
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
      <SkillsSection/>
    </div>
  );
}
