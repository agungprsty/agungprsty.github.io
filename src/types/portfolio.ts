export interface Social {
  github?: string;
  linkedin?: string;
  x?: string;
  medium?: string;
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
  period?: string;
  type?: string;
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
  description?: string;
  points: string[];
}

export type Skill = string;

export interface PortfolioData {
  header: Header;
  about: About;
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  contact: Contact;
  resume: string;
}
