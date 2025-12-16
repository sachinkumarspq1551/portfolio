export interface NavLink {
  href: string;
  label: string;
}

export interface ProfileData {
  name: string;
  role: string;
  experience: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  social: {
    linkedin: string;
    github: string;
  };
  typingKeywords: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  name: string;
  techStack: string[];
  description: string;
  role: string;
  status: 'Live' | 'In Progress';
  links?: {
    github?: string;
    demo?: string;
  };
}
