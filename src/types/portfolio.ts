export interface Social {
  github?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
}

export interface About {
  name: string;
  role: string;
  description: string;
  social: Social;
}

export interface Header {
  homepage: string;
  title: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  img: string;
  link: string;
  createdAt?: string;
  pin?: boolean;
}

export interface Contact {
  email: string;
  telegram: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface PortfolioData {
  header: Header;
  about: About;
  projects: Project[];
  experience: Experience[];
  skills: SkillCategory[];
  contact: Contact;
  resume: string;
}
