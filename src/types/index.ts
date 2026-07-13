export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  profileImage?: string;
  education: Education;
  socialLinks: SocialLink[];
}

export interface Education {
  degree: string;
  institution: string;
  graduationDate: string;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  liveDemo?: string;
  repository?: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
}
