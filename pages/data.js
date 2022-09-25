
import {
    HiAcademicCap,
    HiCalendar,
    HiDownload,
    HiFlag,
    HiMap,
    HiOfficeBuilding,
    HiSparkles,
} from 'react-icons/hi';
import {
    SiGithub,
    SiGooglescholar,
    SiLinkedin
} from 'react-icons/si'

import heroImage from '/assets/dalle_hero.png'
import profileImage from '/assets/profile.png'

// Page Data
export const metaData = {
    title: 'Reinder Vos de Wael, PhD',
    description: 'Resume of Reinder Vos de Wael, PhD'
};


// Hero Data
export const heroData = {
    imageSrc: heroImage,
    name: `I'm Reinder (WIP!).`,
    description: (
        <>
            <p>
                Great that you're looking at this page! However, it's still a <strong>work in progress</strong>. 
                Please see my LinkedIn profiel for up to date information.
            </p>
            <p>
                In my free time time, you can catch me <strong >bouldering</strong>,
                building hobby <strong>Python projects</strong>, or practicing {' '}
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
            Icon: HiDownload
        },
    ],
};

// About Section
export const aboutData = {
    profileImageSrc: profileImage, 
    description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
    to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
    in.`,
    aboutItems: [
        { label: 'Location', text: 'the Netherlands', Icon: HiMap },
        { label: 'Age', text: '29', Icon: HiCalendar },
        { label: 'Nationality', text: 'Dutch', Icon: HiFlag },
        { label: 'Interests', text: 'Bouldering, Gaming, Programming', Icon: HiSparkles },
        { label: 'Study', text: 'McGill University', Icon: HiAcademicCap },
        { label: 'Employment', text: 'Ordina', Icon: HiOfficeBuilding },
    ],
};


// Skills sections
// Levels are out of 10
export const skillsData = [
    {
        name: 'Spoken languages',
        skills: [
            {
                name: 'English',
                level: 10,
            },
            {
                name: 'Dutch',
                level: 10,
            },
        ],
    },
    {
        name: 'Frontend development',
        skills: [
            {
                name: 'Python',
                level: 8,
            },
            {
                name: 'MATLAB',
                level: 8,
            },
            {
                name: 'Bash',
                level: 6,
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
                name: 'Tensorflow',
                level: 6,
            },
        ],
    },
];

// Education
export const educationData = [
    {
        date: '2016',
        location: 'University of Groningen',
        title: 'MSc Behavioral and Cognitive Neuroscience',
        content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
    },
    {
        date: '2014',
        location: 'Utrecht University',
        title: 'BSc Liberal Arts and Science',
        content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
    },
];

// Experience
export const experience = [
    {
        date: '2022 - Present',
        location: 'Ordina',
        title: 'Software Engineer',
        content: (
            <p>
                Describe work, special projects, notable achievements, what technologies you have been working with, and
                anything else that would be useful for an employer to know.
            </p>
        ),
    },
    {
        date: '2017 - 2022',
        location: 'McGill University',
        title: 'PhD Candidate',
        content: (
            <p>
                Describe work, special projects, notable achievements, what technologies you have been working with, and
                anything else that would be useful for an employer to know.
            </p>
        ),
    },
];

// Socials
export const socialLinks = [
    { label: 'Github', Icon: SiGithub, href: 'https://github.com/ReinderVosDeWael' },
    { label: 'LinkedIn', Icon: SiLinkedin, href: 'https://www.linkedin.com/in/reinder-vos-de-wael/' },
    { label: 'GoogleScholar', Icon: SiGooglescholar, href: 'https://scholar.google.com/citations?user=nPHuUwwAAAAJ&hl=en' }
];


export default function DeleteMe () {
    // TODO: Deploy currently needs this. Can it be removed?
    return 
}