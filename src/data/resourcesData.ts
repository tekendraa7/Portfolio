
import type { LucideIcon } from "lucide-react";
import { BookMarked, Newspaper, GraduationCap, ExternalLink } from "lucide-react";

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
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "book cover",
    amazonLink: "#",
  },
  {
    id: "2",
    title: "Cybersecurity For Dummies",
    author: "Joseph Steinberg",
    description: "Learn how to protect your personal and business information from cyber threats.",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "book cover",
    amazonLink: "#",
  },
  {
    id: "3",
    title: "The Linux Command Line: A Complete Introduction",
    author: "William Shotts",
    description: "Master the Linux command line with this in-depth guide, perfect for beginners and experienced users alike.",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "book cover",
    amazonLink: "#",
  },
  {
    id: "4",
    title: "Hacking: The Art of Exploitation",
    author: "Jon Erickson",
    description: "A classic book that delves into the technical details of hacking and exploit development.",
    imageUrl: "https://placehold.co/200x300.png",
    imageHint: "book cover",
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
    imageUrl: "https://placehold.co/300x200.png",
    imageHint: "security article",
  },
  {
    id: "2",
    title: "Top 10 Essential Linux Commands for Beginners",
    snippet: "Getting started with Linux? These 10 commands will help you navigate the terminal like a pro...",
    url: "#", // Replace with actual URL
    category: "Linux",
    imageUrl: "https://placehold.co/300x200.png",
    imageHint: "linux terminal",
  },
  {
    id: "3",
    title: "Understanding Basic Networking Concepts: IP Addresses, DNS, and More",
    snippet: "A simple explanation of fundamental networking concepts that everyone should know...",
    url: "#", // Replace with actual URL
    category: "Networking",
    imageUrl: "https://placehold.co/300x200.png",
    imageHint: "network diagram",
  },
  {
    id: "4",
    title: "The Importance of Regular Software Updates",
    snippet: "Discover why keeping your software updated is crucial for security and performance...",
    url: "#", // Replace with actual URL
    category: "Cybersecurity",
    imageUrl: "https://placehold.co/300x200.png",
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
    imageUrl: "https://placehold.co/300x200.png",
    imageHint: "cybersecurity course", // Updated from "cisco logo"
  },
  {
    id: "2",
    title: "Ethical Hacking Essentials (EHE)",
    provider: "EC-Council (via Cybrary or other platforms)",
    description: "Get an introduction to ethical hacking concepts and tools. Some platforms offer free introductory versions.",
    url: "https://www.cybrary.it/", // General link, specific course may vary
    category: "Cybersecurity",
    isFree: true, // Often free tiers available
    imageUrl: "https://placehold.co/300x200.png",
    imageHint: "ethical hacking",
  },
  {
    id: "3",
    title: "Networking Essentials",
    provider: "Microsoft Learn (formerly via Cisco NetAcad also)",
    description: "Learn the fundamentals of networking, including topologies, protocols, and network devices.",
    url: "https://learn.microsoft.com/en-us/training/browse/?terms=networking%20essentials",
    category: "Networking",
    isFree: true,
    imageUrl: "https://placehold.co/300x200.png",
    imageHint: "network course",
  },
  {
    id: "4",
    title: "Linux Essentials",
    provider: "Linux Professional Institute (LPI) / NDG Linux (via Cisco)",
    description: "A beginner-friendly course covering basic Linux commands, file systems, and administration.",
    url: "https://www.netacad.com/courses/os-it/ndg-linux-essentials",
    category: "Linux",
    isFree: true,
    imageUrl: "https://placehold.co/300x200.png",
    imageHint: "linux course", // Updated from "linux penguin"
  },
];
