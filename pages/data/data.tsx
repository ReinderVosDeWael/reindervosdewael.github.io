/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
  HiAcademicCap,
  HiCalendar,
  HiDownload,
  HiFlag,
  HiMap,
  HiOfficeBuilding,
  HiSparkles,
} from 'react-icons/hi';
import {SiGithub, SiGmail, SiGooglescholar, SiLinkedin} from 'react-icons/si';

import heroImage from '/assets/dalle_hero.png';
import profileImage from '/assets/profile.png';

// Page Data
export const metaData = {
  title: 'Reinder Vos de Wael, PhD',
  description: 'Resume website of Reinder Vos de Wael, PhD',
};

// Hero Data
export const heroData = {
  imageSrc: heroImage,
  name: `I'm Reinder.`,
  description: (
    <>
      <p>
        I am a software engineer based in the Netherlands, currently working at 
        <strong>Ordina</strong> to help bring Python solutions to its customers.
      </p>
      <p>
        In my free time, you can catch me <strong>Bouldering</strong>, building
        small <strong>Python Projects</strong>, or practicing{' '}
        <strong>Real Time Strategy games</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: HiDownload,
    },
    {
      href: '', // `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
      Icon: HiDownload,
    },
  ],
};

// About Section
const age =
  new Date(+new Date() - +new Date('08/26/1993')).getFullYear() - 1970;
export const aboutData = {
  profileImageSrc: profileImage,
  name: 'Reinder Vos de Wael, PhD',
  description: (
    <>
      <p>
        {`I love solving analytical problems. I leverage 
  statistical and computational models to solve complex challenges. To 
  accomplish this, I combine statistics, machine learning, and 
  domain-specific knowledge for a targetted solution.`}
      </p>
      <p>
        {`I have had the privilege of graduating with a PhD in Neuroscience 
  from McGill University. During this PhD I've had extensive experience with 
  software development and deployment, creating and testing novel hypotheses
  in a fast-moving scientific field.`}
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Gouda, the Netherlands', Icon: HiMap},
    {label: 'Age', text: String(age), Icon: HiCalendar},
    {label: 'Nationality', text: 'Dutch', Icon: HiFlag},
    {
      label: 'Interests',
      text: 'Bouldering, Gaming, Programming',
      Icon: HiSparkles,
    },
    {label: 'Study', text: 'McGill University', Icon: HiAcademicCap},
    {label: 'Employment', text: 'Ordina', Icon: HiOfficeBuilding},
  ],
};

// Skills sections
// Levels are out of 10
export const skillsData = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Shell',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 5,
      },
    ],
  },
  {
    name: 'Packages',
    skills: [
      {
        name: 'Numpy',
        level: 8,
      },
      {
        name: 'Pandas',
        level: 6,
      },
      {
        name: 'Tensorflow',
        level: 5,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Git',
        level: 6,
      },
      {
        name: 'Continuous Integration',
        level: 5,
      },
      {
        name: 'Azure',
        level: 3,
      },
    ],
  },
  {
    name: 'Domain Knowledge',
    skills: [
      {
        name: 'Image Processing',
        level: 8,
      },
      {
        name: 'Statistics',
        level: 7,
      },
      {
        name: 'Machine Learning',
        level: 6.5,
      },
    ],
  },
];

// Education
export const educationData = [
  {
    date: '2014-2016',
    location: 'University of Groningen',
    title: 'MSc Behavioral and Cognitive Neuroscience',
    content: `I was enrolled in the C-track (cognition) of this Master's 
    program. Part of my training was in the Hyder lab at Yale University. 
    This work led to a scientific publication on the effects of various 
    statistical corrections on MRI signals.`,
  },
  {
    date: '2011-2014',
    location: 'Utrecht University',
    title: 'BSc Liberal Arts and Science',
    content: `My studies at the University of Utrecht focussed on neuroscience
    and molecular cell biology. My Bachelor's thesis was written on which
    nerves in the human eye process cues from which areas of the visual field.`,
  },
];

// Experience
export const experienceData = [
  {
    date: '2022 - Present',
    location: 'Ordina',
    title: 'Software Engineer',
    content: `As a member of the Pythoneers team, my goal is to help Ordina's 
      customers get the most out of their Python codebase.`,
  },
  {
    date: '2017 - 2022',
    location: 'McGill University',
    title: 'PhD Candidate',
    content: `My PhD work focussed on the use of statistical methods and 
    machine learning for the understanding of the human brain. This work led to 
      scientific advances in our understanding of the connections of the 
      temporal lobe, as well as open-source toolboxes that allow other 
      researchers to use advanced statistical and manifold learning methods.`,
  },
];

// Socials
export const socialLinks = [
  {
    label: 'Github',
    Icon: SiGithub,
    href: 'https://github.com/ReinderVosDeWael',
  },
  {
    label: 'LinkedIn',
    Icon: SiLinkedin,
    href: 'https://www.linkedin.com/in/reinder-vos-de-wael/',
  },
  {
    label: 'GoogleScholar',
    Icon: SiGooglescholar,
    href: 'https://scholar.google.com/citations?user=nPHuUwwAAAAJ&hl=en',
  },
  {
    label: 'E-Mail',
    Icon: SiGmail,
    href: 'mailto:reinder.vosdewael@gmail.com',
  },
];

// Certificates
export const certificateData = [
  {
    date: '2022',
    location: 'Microsoft',
    title: 'Azure Developer Associate (AZ-204)',
    href: 'https://www.credly.com/badges/cc3cb9fc-84ec-40ef-a685-28e13c913621',
    content: `Earning Azure Developer Associate certification validates 
     the skills and knowledge to design, build, test, and maintain cloud 
     applications and services on Microsoft Azure. Candidates participate 
     in all phases of cloud development from requirements definition and 
     design, to development, deployment, and maintenance.
    `,
  },
  {
    date: '2022',
    location: 'Tensorflow',
    title: 'Tensorflow Developer Certificate',
    href: 'https://www.credential.net/7e8fa6a5-a5e3-4248-b878-b58e6740a182#gs.id2ivc',
    content: `This certificate tests a developer's foundational 
    knowledge of integrating machine learning into tools and applications. The 
    certificate program requires an understanding of building TensorFlow models 
    using Computer Vision, Convolutional Neural Networks, Natural Language 
    Processing, and real-world image data and strategies.`,
  },
  {
    date: '2022',
    location: 'Microsoft',
    title: 'Azure Fundamentals (AZ-900)',
    href: 'https://www.credly.com/badges/319adf29-8704-448c-9143-520e8b92f406/public_url',
    content: `Earners of the Azure Fundamentals certification have demonstrated 
    foundational level knowledge of cloud services and how those services are 
    provided with Microsoft Azure.`,
  },
  {
    date: '2022',
    location: 'Security Journey',
    title: 'Green Belt for Python Developer',
    href: 'https://ordina.securityjourney.com/certificates/3afada35-04d0-4efe-a316-1648afa5d772.pdf',
    content: `Security journey teaches best practices and defensive tactics for 
    application and product security. Green belt certifies that the candidate 
    has 1) foundational knowledge of application security, 2) in-depth knowledge
    of security principles, attacks, tools, and processes, and 3) language 
    specific AppSec knowledge.`,
  },
  {
    date: '2022',
    location: 'Udemy',
    title: 'The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert',
    href: 'https://www.udemy.com/certificate/UC-1f2a0709-61a2-47e3-b2e1-5b2aa2bc3868/',
    content: `This course offers a complete hands-on tutorial on creating and 
    interacting with mySQL databases.`,
  },
];

const labels = ['About', 'Resume', 'Contact'];
export const NavbarData = labels.map((x) => ({
  label: x,
  href: '#' + x.toLowerCase(),
}));

export const contactData = {
  description: (
    <>
      <p>
        Want to get in touch? I can often make time for a quick chat about
        anything and everything. You can reach me via LinkedIn and e-mail, (see
        socials in the footer), though you&apos;ll probably get the quickest
        response via e-mail. For inquiries related to my work at Ordina please
        contact me at my{' '}
        <a href="mailto:reinder.vos.de.wael@ordina.nl">Ordina e-mail address</a>
      </p>
    </>
  ),
};

// Experience
export const projectsData = [
  {
    date: '2022 - Present',
    location: 'Software Engineer',
    title: 'QuestionMark',
    content: `As part of my work for Ordina, I assisted QuestionMark with the 
    maintenance of their web crawlers.`,
    skills: ['Scrapy', 'HTML', 'JavaScript'],
  },
  {
    date: '2022 - Present',
    location: 'Software Engineer',
    title: 'Personal Website',
    content: `Well... You're looking at it :-).`,
    skills: ['Typescript', 'HTML', 'CSS', 'React'],
  },
  {
    date: '2020 - Present',
    location: 'Developer',
    title: 'BrainSpace',
    content: `As part of my PhD studies I developed and maintain BrainSpace, a 
    toolbox for manifold learning of brain connectivity data.`,
    skills: ['NumPy', 'Git', 'Manifold Learning'],
  },
];

export default function placeholder() {
  // Necessary becasue React keeps thinking this is a page.
  return <></>;
}
