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
  name: string;
  description: string;
  stack: string[];
  img: string;
  link: string;
}

export interface Contact {
  email: string;
  telegram: string;
}

export interface PortfolioData {
  header: Header;
  about: About;
  projects: Project[];
  contact: Contact;
}
