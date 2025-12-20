export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  publisher: string;
  year: string;
  description: string;
  link?: string;
}

export interface Leadership {
  id: string;
  role: string;
  organization: string;
  period: string;
  points: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  coursework?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}