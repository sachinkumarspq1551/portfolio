import type { ProfileData, SkillCategory, Project, NavLink } from '@/lib/types';

export const navLinks: NavLink[] = [
  { href: '/', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];

export const profileData: ProfileData = {
  name: 'Sachin Kumar',
  role: 'Frontend Developer',
  experience: '2+ years',
  summary:
    'Frontend Developer with 2+ years of experience building large-scale education ERP systems using Angular and TypeScript. Worked on fee, exam, library, transport, student, and employee modules. Strong focus on scalable UI, performance, and clean architecture.',
  location: 'India',
  email: 'sachin.kumar@example.com',
  phone: '+91 12345 67890',
  resumeUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Placeholder
  social: {
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
  },
  typingKeywords: [
    'Angular Developer',
    'Frontend Engineer',
    'UI Specialist',
    'TypeScript Expert',
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'Bootstrap', level: 80 },
      { name: 'SCSS', level: 85 },
      { name: 'Capacitor', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub / GitLab', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
  {
    title: 'Cloud Services',
    skills: [
      { name: 'AWS S3', level: 75 },
      { name: 'CloudFront', level: 70 },
      { name: 'Route 53', level: 70 },
      { name: 'ACM', level: 65 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 60 },
      { name: 'MSSQL', level: 60 },
    ],
  },
];

export const projectsData: Project[] = [
  {
    name: 'Education ERP Migration',
    techStack: ['Angular', '.NET API', 'MSSQL'],
    description:
      'Migrated a legacy ERP system (from 2008) to a modern Single Page Application architecture. This involved rewriting modules for Fees, Library, Transport, and Examinations.',
    role: 'Lead Frontend Developer',
    status: 'Live',
    links: {},
  },
  {
    name: 'Fee Payment Mobile App',
    techStack: ['Angular', 'Capacitor', 'Ionic'],
    description:
      'Developed a cross-platform mobile application for fee payments, currently used by over 13 educational institutions. Features include online payment processing, receipt generation, and student dashboards.',
    role: 'Frontend Developer',
    status: 'Live',
    links: {
      demo: '#',
    },
  },
  {
    name: 'AWS Cloud Deployment Setup',
    techStack: ['AWS S3', 'CloudFront', 'Route 53', 'ACM'],
    description:
      'Architected and implemented a scalable and secure deployment pipeline for web applications on AWS, utilizing S3 for hosting, CloudFront for CDN delivery, Route 53 for DNS management, and ACM for SSL certification.',
    role: 'DevOps / Frontend',
    status: 'Live',
    links: {},
  },
  {
    name: 'Portfolio Website',
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase'],
    description:
      'A personal portfolio website to showcase my skills and projects. Built with Next.js for server-side rendering and static site generation, styled with Tailwind CSS, and deployed on Firebase.',
    role: 'Full-stack Developer',
    status: 'In Progress',
    links: {
      github: '#',
    },
  },
];
