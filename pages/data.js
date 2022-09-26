
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
                In my free time time, you can catch me <strong>bouldering</strong>,
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
const age = new Date(new Date() - new Date('08/26/1993')).getFullYear() - 1970;
export const aboutData = {
    profileImageSrc: profileImage, 
    description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
    to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
    in.`,
    aboutItems: [
        { label: 'Location', text: 'Gouda, the Netherlands', Icon: HiMap },
        { label: 'Age', text: String(age), Icon: HiCalendar },
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
        date: '2014-2016',
        location: 'University of Groningen',
        title: 'MSc Behavioral and Cognitive Neuroscience',
        content: "I was enrolled in the C-track (cognition) of this Master's program. Part of my training was in the Hyder lab at Yale University. This work led to a scientific publication on the effects of various statistical corrections on MRI signals.",
    },
    {
        date: '2011-2014',
        location: 'Utrecht University',
        title: 'BSc Liberal Arts and Science',
        content: 'At the University College of Utrecht ',
    },
];

// Experience
export const experienceData = [
    {
        date: '2022 - Present',
        location: 'Ordina',
        title: 'Software Engineer',
        content: "As a member of the Pythoneers team, my goal is to help Ordina's customers get the most out of their Python codebase."
    },
    {
        date: '2017 - 2022',
        location: 'McGill University',
        title: 'PhD Candidate',
        content: "My PhD work focussed on the use of statistical methods and machine learning for the understanding of the human brain. This work led to scientific advances in our understanding of the connections of the temporal lobe, as well as open-source toolboxes that allow other researchers to use advanced statistical and manifold learning methods."
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