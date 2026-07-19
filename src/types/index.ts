import type { IconType } from "react-icons";

export interface NavItem {
  label: string;
  path: string;
  inNav?: boolean; // show in the top navigation bar (all items appear in command palette)
}

export interface Profile {
  name: string;
  title: string;
  company: string;
  location: string;
  availability: string;
  tagline: string;
  intro: string;
  typingPhrases: string[];
  resumeUrl: string;
  email: string;
  bio: string[];
  interests: string[];
  currentFocus: string[];
  learning: string[];
  building: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: IconType;
  todo?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
  id: string;
  title: string;
  role?: string;
  period: string;
  description: string;
  features?: string[];
  challenges?: string[];
  lessons?: string[];
  futureImprovements?: string[];
  tech: string[];
  tags: string[];
  status: ProjectStatus;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  type: "work" | "internship" | "academic";
  points: string[];
  tech?: string[];
  impact?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  period: string;
  details?: string[];
}

export interface Achievement {
  title: string;
  year: string;
  category: "exam" | "competition" | "award" | "recognition";
  description?: string;
}

export interface Certification {
  name: string;
  provider: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  skills?: string[];
  todo?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
  content?: string;
}

export interface OpenSourceItem {
  name: string;
  description: string;
  url: string;
  language?: string;
  todo?: boolean;
}

export interface RoadmapItem {
  title: string;
  category: "certification" | "project" | "learning" | "career" | "talk" | "idea";
  target?: string;
  notes?: string;
}
