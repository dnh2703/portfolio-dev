import { FacebookIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

// Define types for each section
type Social = {
  name: string;
  url: string;
  icon: LucideIcon;
};

type ContactInfo = {
  email: string;
  tel: string;
  social: Social[];
};

type Education = {
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
};

type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: ReactNode;
};

type Project = {
  title: string;
  techStack: string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

type Certification = {
  title: string;
  link?: string;
  tags: string[];
};

// Main resume data type
type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: ReactNode;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: ContactInfo;
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: Project[];
  certifications: Certification[];
  languages: string[];
  hobbies: string[];
};

export const RESUME_DATA: ResumeData = {
  name: 'Dang Nhat Huy',
  initials: 'dnh2703',
  location: 'Ha Noi, Vietnam',
  locationLink: 'https://www.google.com/maps/place/Hanoi',
  about:
    'Web developer passionate about learning new technologies and creating meaningful user experiences.',
  summary: (
    <>
      Web developer with expertise in modern JavaScript frameworks, specializing in React, Next JS,
      and TypeScript. Experienced in building scalable front-end applications and integrating with
      back-end APIs. Passionate about clean code, performance optimization, and user experience.
    </>
  ),
  avatarUrl: '/avatar.png',
  personalWebsiteUrl: 'https://dnh2703.github.io/portfolio-mini/',
  contact: {
    email: 'dnh2703@gmail.com',
    tel: '0374901553',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/dnh2703',
        icon: GithubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dnh2703/',
        icon: LinkedinIcon,
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/dnh2k',
        icon: FacebookIcon,
      },
    ],
  },
  education: [
    {
      school: 'Posts and Telecommunications Institute of Technology',
      degree: 'Multimedia',
      location: 'Ha Dong, Ha Noi',
      start: '2018',
      end: '2022',
    },
    {
      school: 'FPT Software Academy',
      degree: 'ReactJS Frontend Developer',
      location: 'Ha Noi',
      start: 'Dec 2022',
      end: '2023',
    },
  ],
  work: [
    {
      company: 'VMO Holdings',
      link: 'https://vmogroup.com/',
      badges: ['On-site', 'Full-time'],
      title: 'Frontend Developer + Backend Developer',
      start: 'Oct 2023',
      end: 'Present',
      description: (
        <>
          {/* Write your work experience here - overview */}
          Developed and maintained web applications for clients in the automotive industry.
          Collaborated with a team of designers and developers to create user-friendly interfaces
          and interactive features.
        </>
      ),
    },
  ],
  skills: [
    'ReactJS',
    'NextJS',
    'TypeScript',
    'NodeJS',
    'NextJS',
    'Express JS',
    'Tailwind CSS',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'Redux',
    'Git',
    'Github Actions',
    'Docker',
  ],
  projects: [
    {
      title: 'Parking App',
      techStack: ['ReactJS', 'TypeScript', 'MapboxGL', 'DeckGL', 'GraphQL'],
      description: 'A user-friendly parking management application with interactive map features.',
    },
    {
      title: 'GCP Exam API',
      techStack: ['NestJS', 'TypeScript', 'MongoDB', 'Restful API'],
      description: 'A RESTful API for managing exam questions and answers. Track user progress.',
    },
    {
      title: 'Contract Automation App',
      techStack: ['ReactJS', 'TypeScript', 'Radix UI', 'Tailwind CSS'],
      description:
        'An automation tool for managing and organizing contract information efficiently.',
    },
  ],
  certifications: [
    {
      title: "CS50's Introduction to Computer Science",
      link: 'https://certificates.cs50.io/1a5311f5-67a6-43dc-82da-4e9f79ba15ef.pdf?size=letter',
      tags: ['Harvard University', 'edX'],
    },
    {
      title: 'Back End Development and APIs',
      link: 'https://www.freecodecamp.org/certification/fcc6c79d13b-12bd-45cb-94b1-d548ae41faf4/back-end-development-and-apis',
      tags: ['freeCodeCamp'],
    },
    {
      title: 'Professional React JS Developer',
      tags: ['FPT Software Academy'],
    },
  ],
  languages: ['English', 'Vietnamese'],
  hobbies: ['Running', 'Gaming', 'Badminton'],
} as const;
