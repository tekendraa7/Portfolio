
import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Smartphone, Laptop } from "lucide-react";
import imageData from '@/lib/placeholder-images.json';


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
  profileImageUrl: "https://avatars.githubusercontent.com/u/182990458?v=4",
  profileImageHint: "cartoon portrait",
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
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  amazonLink?: string; // Optional link
}

export interface Blog {
  id: string;
  title: string;
  snippet: string;
  url: string;
  category: "Cybersecurity" | "Linux" | "Networking" | "General Tech";
  imageUrl?: string;
  imageHint?: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  description: string;
  url: string;
  category: "Networking" | "Cybersecurity" | "Linux";
  isFree: boolean;
  imageUrl?: string;
  imageHint?: string;
}

export const recommendedBooks: Book[] = [
  {
    id: "1",
    title: "Networking All-in-One For Dummies",
    author: "Doug Lowe",
    description: "A comprehensive guide covering everything from basic network setup to virtualizaton and cloud computing.",
    imageUrl: "https://picsum.photos/seed/book1/200/300",
    imageHint: "networking book",
    amazonLink: "#",
  },
  {
    id: "2",
    title: "Cybersecurity For Dummies",
    author: "Joseph Steinberg",
    description: "Learn how to protect your personal and business information from cyber threats.",
    imageUrl: "https://picsum.photos/seed/book2/200/300",
    imageHint: "cybersecurity book",
    amazonLink: "#",
  },
  {
    id: "3",
    title: "The Linux Command Line: A Complete Introduction",
    author: "William Shotts",
    description: "Master the Linux command line with this in-depth guide, perfect for beginners and experienced users alike.",
    imageUrl: "https://picsum.photos/seed/book3/200/300",
    imageHint: "linux book",
    amazonLink: "#",
  },
  {
    id: "4",
    title: "Hacking: The Art of Exploitation",
    author: "Jon Erickson",
    description: "A classic book that delves into the technical details of hacking and exploit development.",
    imageUrl: "https://picsum.photos/seed/book4/200/300",
    imageHint: "hacking book",
    amazonLink: "#",
  },
];

export const curatedBlogs: Blog[] = [
  {
    id: "1",
    title: "How to Keep Your Online Accounts Secure: A Beginner's Guide",
    snippet: "Learn essential tips and practices to protect your digital identity from common threats like phishing and malware...",
    url: "#", // Replace with actual URL
    category: "Cybersecurity",
    imageUrl: "https://picsum.photos/seed/blog1/300/200",
    imageHint: "security article",
  },
  {
    id: "2",
    title: "Top 10 Essential Linux Commands for Beginners",
    snippet: "Getting started with Linux? These 10 commands will help you navigate the terminal like a pro...",
    url: "#", // Replace with actual URL
    category: "Linux",
    imageUrl: "https://picsum.photos/seed/blog2/300/200",
    imageHint: "linux terminal",
  },
  {
    id: "3",
    title: "Understanding Basic Networking Concepts: IP Addresses, DNS, and More",
    snippet: "A simple explanation of fundamental networking concepts that everyone should know...",
    url: "#", // Replace with actual URL
    category: "Networking",
    imageUrl: "https://picsum.photos/seed/blog3/300/200",
    imageHint: "network diagram",
  },
  {
    id: "4",
    title: "The Importance of Regular Software Updates",
    snippet: "Discover why keeping your software updated is crucial for security and performance...",
    url: "#", // Replace with actual URL
    category: "Cybersecurity",
    imageUrl: "https://picsum.photos/seed/blog4/300/200",
    imageHint: "software update",
  },
];

export const freeCourseSuggestions: Course[] = [
  {
    id: "1",
    title: "Introduction to Cybersecurity",
    provider: "Cisco Networking Academy",
    description: "Explore the world of cybersecurity and learn about common threats, attacks, and defenses.",
    url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
    category: "Cybersecurity",
    isFree: true,
    imageUrl: "https://picsum.photos/seed/course1/300/200",
    imageHint: "cybersecurity course",
  },
  {
    id: "2",
    title: "Ethical Hacking Essentials (EHE)",
    provider: "EC-Council (via Cybrary or other platforms)",
    description: "Get an introduction to ethical hacking concepts and tools. Some platforms offer free introductory versions.",
    url: "https://www.cybrary.it/", // General link, specific course may vary
    category: "Cybersecurity",
    isFree: true, // Often free tiers available
    imageUrl: "https://picsum.photos/seed/course2/300/200",
    imageHint: "ethical hacking course",
  },
  {
    id: "3",
    title: "Networking Essentials",
    provider: "Microsoft Learn (formerly via Cisco NetAcad also)",
    description: "Learn the fundamentals of networking, including topologies, protocols, and network devices.",
    url: "https://learn.microsoft.com/en-us/training/browse/?terms=networking%20essentials",
    category: "Networking",
    isFree: true,
    imageUrl: "https://picsum.photos/seed/course3/300/200",
    imageHint: "networking course",
  },
  {
    id: "4",
    title: "Linux Essentials",
    provider: "Linux Professional Institute (LPI) / NDG Linux (via Cisco)",
    description: "A beginner-friendly course covering basic Linux commands, file systems, and administration.",
    url: "https://www.netacad.com/courses/os-it/ndg-linux-essentials",
    category: "Linux",
    isFree: true,
    imageUrl: "https://picsum.photos/seed/course4/300/200",
    imageHint: "linux course",
  },
];
