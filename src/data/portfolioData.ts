import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Smartphone, Laptop } from "lucide-react";

export interface Skill {
  name: string;
  level?: number; // Optional: 1-100 for progress bar
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
  profileImageUrl: "https://picsum.photos/300/300",
  profileImageHint: "profile picture",
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
    description: "This very portfolio site features an AI chatbot capable of answering questions related to Linux, cybersecurity, and networking. Built with Next.js and Genkit AI.",
    technologies: ["Next.js", "React", "TypeScript", "Genkit AI", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/400/300",
    imageHint: "ai chatbot",
    repoUrl: "#", // Replace with actual URL
  },
  {
    id: "2",
    title: "Network Traffic Analyzer",
    description: "A Python-based tool to capture and analyze network packets, identifying potential security threats and unusual patterns. (Conceptual Project)",
    technologies: ["Python", "Scapy", "Wireshark (concept)"],
    imageUrl: "https://picsum.photos/400/300",
    imageHint: "network analysis",
  },
  {
    id: "3",
    title: "Secure File Encryption Utility",
    description: "A command-line utility for encrypting and decrypting files using AES-256, ensuring data confidentiality. (Conceptual Project)",
    technologies: ["Python", "Cryptography", "CLI"],
    imageUrl: "https://picsum.photos/400/300",
    imageHint: "file encryption",
  },
];

export const contactLinks: ContactLink[] = [
  { name: "Email", url: "mailto:tekendra.bhandari.np@gmail.com", icon: Mail },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tekendra-bhandari/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/tekendra-bhandari", icon: Github },
];

export const contactDetails = {
  email: "tekendra.bhandari.np@gmail.com",
  phone: "+977-98XXXXXXXX" // Placeholder
}
