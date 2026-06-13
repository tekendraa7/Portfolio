import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Smartphone } from "lucide-react";
import imageData from '@/lib/placeholder-images.json';

export interface Skill {
  name: string;
  level?: number;
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

export const aboutData = {
  name: "Tekendra Bhandari",
  title: "Computer Engineering Student",
  university: "Far Western University",
  bio: "I am a passionate computer engineering student with a strong interest in cybersecurity, Linux systems, and networking. I am dedicated to continuous learning and applying my knowledge to solve real-world problems. This portfolio showcases my journey, projects, and the resources I find valuable.",
  profileImageUrl: "https://lh3.googleusercontent.com/a/ACg8ocIssHRc7_y55HG7NhNO6DncCrODLm-ebAn1gft4_A0B1aHnySK9=s288-c-no",
  profileImageHint: "profile photo",
  skills: [
    { name: "Linux Administration", level: 85 },
    { name: "Network Configuration", level: 75 },
    { name: "Cybersecurity Fundamentals", level: 80 },
    { name: "Python Programming", level: 70 },
    { name: "Next.js & React", level: 65 },
    { name: "Docker", level: 60 },
  ] as Skill[],
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "AI-Powered Q&A Chatbot",
    description: "This very portfolio site features an AI chatbot capable of answering questions related to Linux, cybersecurity, and networking. Built with React and Gemini AI.",
    technologies: ["React", "TypeScript", "Gemini AI", "Tailwind CSS"],
    imageUrl: imageData.projects.chatbot.url,
    imageHint: imageData.projects.chatbot.hint,
    repoUrl: "https://github.com/tekendraa7/Portfolio-CyberShield",
  },
  {
    id: "2",
    title: "Network Traffic Analyzer",
    description: "A Python-based tool to capture and analyze network packets, identifying potential security threats and unusual patterns. (Conceptual Project)",
    technologies: ["Python", "Scapy", "Wireshark (concept)"],
    imageUrl: imageData.projects.networkAnalyzer.url,
    imageHint: imageData.projects.networkAnalyzer.hint,
  },
  {
    id: "3",
    title: "Secure File Encryption Utility",
    description: "A command-line utility for encrypting and decrypting files using AES-256, ensuring data confidentiality. (Conceptual Project)",
    technologies: ["Python", "Cryptography", "CLI"],
    imageUrl: imageData.projects.encryptionUtil.url,
    imageHint: imageData.projects.encryptionUtil.hint,
  },
];

export const contactLinks: ContactLink[] = [
  { name: "Email", url: "mailto:er.tekendra.contact@gmail.com", icon: Mail },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tekendraa7/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/tekendraa7", icon: Github },
];

export const contactDetails = {
  email: "er.tekendra.contact@gmail.com",
  phone: "+977-9848560722"
};
