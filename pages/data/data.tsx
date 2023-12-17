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
        As a scientific software developer at the Child Mind Institute, 
        I am dedicated to deliveringhigh-quality solutions that bring 
        value our research and the clinic. In my role, I work closely
        with both scientists and medical staff to understand their 
        needs and developsolutions that meet their unique challenges and 
        goals.
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
        I am skilled at solving analytical problems using a combination of
        statistical and computational models. I draw on my expertise in
        statistics, machine learning, and domain-specific knowledge to deliver
        targeted solutions to complex challenges.
      </p>
      <p>
        I am a graduate of McGill University, where I earned a PhD in
        Neuroscience. During my time in this program, I gained extensive
        experience in software development, and had the opportunity to create
        and test novel hypotheses in a fast-paced scientific field.
      </p>
    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Montreal, QC, Canada', Icon: HiMap},
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
        name: 'Bash',
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
        level: 6,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'Azure',
        level: 5,
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
    date: '2023 - Present',
    location: 'Child Mind Institute',
    title: 'Scientific Software Developer',
    content: `In my role as a scientific software developer, I enhance the
    workflows of researchers and clinical staff at the Child Mind Institute.
    I specialize in bringing AI tooling to the end-user.`,
  },
  {
    date: '2022 - 2023',
    location: 'Ordina',
    title: 'Software Engineer',
    content: `As a software engineer at Ordina, I am dedicated to delivering 
    high-quality Python solutions that bring value to our customers. In my 
    role, I work closely with clients to understand their needs and develop 
    custom solutions that meet their unique challenges and goals.`,
  },
  {
    date: '2017 - 2022',
    location: 'McGill University',
    title: 'PhD Candidate',
    content: `During my PhD, I focused on the application of statistical 
    methods and machine learning to improve our understanding of the human 
    brain. This work resulted in scientific advances in the field, 
    including new insights into the connections of the temporal 
    lobe, as well as the development of open-source toolboxes that enable other 
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
    location: 'Security Journey',
    title: 'Green Belt for Python Developer',
    href: 'https://ordina.securityjourney.com/certificates/3afada35-04d0-4efe-a316-1648afa5d772.pdf',
    content: `Security journey teaches best practices and defensive tactics for 
    application and product security. Green belt certifies that the candidate 
    has 1) foundational knowledge of application security, 2) in-depth knowledge
    of security principles, attacks, tools, and processes, and 3) language 
    specific AppSec knowledge.`,
  },
];

export const contactData = {
  description: (
    <>
      <p>
        If you would like to get in touch, I am happy to have a quick chat
        about anything and everything. You can reach me via LinkedIn and
        email (see the links in the footer), but you will likely receive the
        quickest response via email. For inquiries related to my work at
        Child Mind Institute, please contact me at my{' '}
        <a href="mailto:reinder.vosdewael@childmind.org">Child Mind Institute e-mail address</a>
      </p>
    </>
  ),
};

// Experience
export const projectsData = [
  {
    date: '2022 - Present',
    location: 'Software Engineer',
    title: 'Ordina',
    content: `The Dutch police have a substantial amount of audio data from 
    criminal investigations. However, identifying unknown speakers in these 
    files requires significant manual effort. To tackle this issue, I am 
    collaborating with the Vox team at Ordina to develop a Minimum Viable 
    Product AI solution that can automatically identify speakers in these files.
     Our work involves creating a scalable web application that enables 
     non-experts to generate and compare vocal "fingerprints" extracted 
     from recordings.`,
    skills: ['Python', 'FastAPI', 'PyTorch', 'Docker', 'mySQL',
      'ElasticSearch', 'S3', 'RabbitMQ'],
  },
  {
    date: '2022 - Present',
    location: 'Software Engineer',
    title: 'Personal Website',
    content: `Well... You're looking at it :-).`,
    skills: ['Typescript', 'HTML', 'CSS', 'React'],
  },
  {
    date: '2020 - 2022',
    location: 'Developer',
    title: 'BrainSpace',
    content: `As part of my PhD studies I developed and maintained BrainSpace, 
    a toolbox for manifold learning of brain connectivity data and the 
    statistical analaysis of these manifolds. This toolbox allowed researchers 
    without significant programming experience to perform advanced statistical
    procedures. This toolbox has been used in hundreds of scientific papers
    by researchers around the world.`,
    skills: ['NumPy', 'Git', 'Manifold Learning', 'Non-Parametric Statistics'],
  },
];

export default function placeholder() {
  // Necessary becasue React keeps thinking this is a page.
  return <></>;
}
