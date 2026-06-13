import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export interface Skill {
  name: string;
  level?: number;
}

export interface TechSkill {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  imageHint?: string;
}

export interface ContactLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  pdfPath: string;
  credentialId?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
}

export const aboutData = {
  name: "Tekendra Bhandari",
  title: "Computer Engineering Student",
  subtitle: "Computer Engineering Student | Cybersecurity Enthusiast | Builder | Learner",
  university: "Far Western University",
  location: "Dhangadhi, Kailali, Nepal",
  bio: "I am a passionate computer engineering student with a strong interest in cybersecurity, Linux systems, and networking. I am dedicated to continuous learning and applying my knowledge to build secure and innovative solutions for a safer digital tomorrow.",
  longBio: "A passionate Computer Engineering student at Far Western University, diving deep into the world of cybersecurity, Linux, and networking. My journey started with curiosity about how systems work — and how they break. I'm focused on building practical skills in ethical hacking, system administration, and secure software development. I believe in continuous learning, hands-on projects, and contributing to the security community.",
  profileImageUrl: "/profile.jpeg",
  profileImageHint: "profile photo",
  skills: [
    { name: "Linux Administration", level: 85 },
    { name: "Network Configuration", level: 75 },
    { name: "Cybersecurity Fundamentals", level: 80 },
    { name: "Python Programming", level: 70 },
    { name: "React & TypeScript", level: 65 },
    { name: "Bash Scripting", level: 72 },
  ] as Skill[],
};

export const techSkills: TechSkill[] = [
  { name: "Linux", icon: "🐧" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "Bash", icon: "💻" },
  { name: "C", icon: "⚙️" },
  { name: "C++", icon: "🔧" },
  { name: "Networking", icon: "🔗" },
  { name: "VS Code", icon: "📝" },
  { name: "Git", icon: "📦" },
  { name: "Wireshark", icon: "🦈" },
  { name: "Cybersecurity", icon: "🛡️" },
];

export const educationData: Education[] = [
  {
    id: "edu-3",
    institution: "Far Western University",
    degree: "Bachelor's Degree in Computer Engineering",
    location: "School of Engineering, Mahendranagar, Kanchanpur",
    period: "2022 – Present",
  },
  {
    id: "edu-2",
    institution: "Kailali Multiple Campus",
    degree: "SLC (Higher Secondary)",
    location: "Dhangadhi, Kailali",
    period: "2019 – 2021",
  },
  {
    id: "edu-1",
    institution: "Shree Siddhanath Secondary School",
    degree: "Secondary Level Certificate",
    location: "Dhangadhi, Kailali",
    period: "Before 2019",
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Cyber Security Club Website",
    description: "Designed and built the frontend and UI for the official Cyber Security Club website at Far Western University. A modern, responsive website for the CSC-FWU community.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    repoUrl: "https://github.com/sharppankaj/CSC-FWU",
  },
  {
    id: "2",
    title: "CyberShield Portfolio",
    description: "This very portfolio site — a full-stack web app with an AI chatbot for cybersecurity Q&A, dark cyber theme, and multi-page layout. Built with React and Gemini AI.",
    technologies: ["React", "TypeScript", "Gemini AI", "Tailwind CSS", "Express"],
    repoUrl: "https://github.com/tekendraa7/Portfolio-CyberShield",
  },
  {
    id: "3",
    title: "Network Traffic Analyzer",
    description: "A Python-based tool to capture and analyze network packets, identifying potential security threats and unusual patterns.",
    technologies: ["Python", "Scapy", "Wireshark"],
  },
  {
    id: "4",
    title: "Secure File Encryption Utility",
    description: "A command-line utility for encrypting and decrypting files using AES-256, ensuring data confidentiality.",
    technologies: ["Python", "Cryptography", "CLI"],
  },
];

export const certificatesData: Certificate[] = [
  {
    id: "cert-1",
    title: "Introduction to Bash",
    issuer: "Online Learning Platform",
    date: "June 12, 2026",
    pdfPath: "/certificates/bash-course.pdf",
    credentialId: "984317030",
  },
  {
    id: "cert-2",
    title: "Python for Cyber Security",
    issuer: "Online Learning Platform",
    date: "2026",
    pdfPath: "/certificates/python-cyber.pdf",
  },
  {
    id: "cert-3",
    title: "Introduction to Figma",
    issuer: "Design Course",
    date: "January 11, 2025",
    pdfPath: "/certificates/figma.pdf",
    credentialId: "7764775",
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Ethical Hacking: A Student's Guide",
    excerpt: "A practical intro to ethical hacking concepts, tools, and the mindset you need as a beginner. Covering Kali Linux, basic recon, and staying legal.",
    date: "June 2026",
    tags: ["Cybersecurity", "Ethical Hacking", "Beginner"],
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Linux Essentials Every CS Student Should Know",
    excerpt: "From navigating the filesystem to writing your first bash script — the Linux commands and concepts that transformed how I work as an engineering student.",
    date: "May 2026",
    tags: ["Linux", "Bash", "Student Life"],
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "How I Built the CSC-FWU Club Website",
    excerpt: "A behind-the-scenes look at designing and building the Cyber Security Club website for Far Western University — challenges, decisions, and lessons learned.",
    date: "April 2026",
    tags: ["Web Dev", "Project", "HTML/CSS"],
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Understanding the OSI Model (Finally)",
    excerpt: "Breaking down the 7 layers of the OSI model in plain language, with real-world examples that actually make sense for a networking student.",
    date: "March 2026",
    tags: ["Networking", "Learning", "Fundamentals"],
    readTime: "6 min read",
  },
];

export const contactLinks: ContactLink[] = [
  { name: "Email", url: "mailto:er.tekendra.contact@gmail.com", icon: Mail },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tekendraa7/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/tekendraa7", icon: Github },
];

export const contactDetails = {
  email: "er.tekendra.contact@gmail.com",
  phone: "+977-9848560722",
  location: "Dhangadhi, Kailali, Nepal",
};
