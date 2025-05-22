
import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Twitter, BookOpen, Laptop, Users, MessageSquare, YoutubeIcon, NewspaperIcon, ExternalLink, MapPin, Briefcase, Lightbulb, ShieldCheck, Terminal, Network, Brain, Target, Award, FlaskConical, BookMarked, Cpu, FileLock2, Code2, Cloud, Binary, LockKeyhole, Route, GraduationCap, Atom } from "lucide-react";

export interface RoadmapLink {
  name: string;
  url: string;
  type: "free" | "paid" | "docs" | "community" | "video" | "article";
  icon?: LucideIcon;
}

export interface RoadmapTopic {
  name: string;
  description?: string;
  icon?: LucideIcon;
  resources?: RoadmapLink[];
}

export interface RoadmapStageData {
  id: string;
  tabName: string;
  title: string;
  emoji: string;
  subtitle: string;
  headerColor: string; // Tailwind bg class e.g., 'bg-roadmap-beginner'
  goals: string[];
  topics: RoadmapTopic[];
  certifications: RoadmapLink[];
  practicalTips: string[];
  infographicImage: string;
  infographicAlt: string;
}

export interface RoadmapBookData {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string;
  imageHint: string;
  amazonLink?: string;
  pdfLink?: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface RoadmapPlatformLab {
  id: string;
  name: string;
  logoUrl: string; // placeholder or actual
  imageHint: string;
  url: string;
  type: "free" | "paid" | "hybrid";
  description: string;
}

export interface RoadmapCommunityNews {
  id: string;
  name: string;
  icon: LucideIcon;
  url: string;
  type: "subreddit" | "discord" | "blog" | "youtube" | "news";
  description: string;
}


export const roadmapPageData = {
  hero: {
    title: "🗺️ Cybersecurity Roadmap",
    subtitle: "Your Journey to Becoming a Cybersecurity Pro",
    description: "Navigate the complex world of cybersecurity with this comprehensive 4-year guide. From foundational knowledge to advanced specialization, find your path.",
    backgroundImageUrl: "https://placehold.co/1920x1080.png",
    imageHint: "cybersecurity abstract"
  },
  stages: [
    {
      id: "beginner",
      tabName: "Beginner",
      title: "🌱 Beginner Stage",
      emoji: "🌱",
      subtitle: "Semesters 1-2: Building the Foundation",
      headerColor: "bg-roadmap-beginner",
      goals: [
        "Understand core computing and OS principles.",
        "Gain proficiency in basic Python programming.",
        "Learn fundamental networking (OSI, TCP/IP).",
        "Comfort with Linux command line.",
        "Awareness of common cyber threats.",
      ],
      topics: [
        { name: "Computer Fundamentals", icon: Cpu, resources: [{ name: "Professor Messer A+", url: "https://www.professormesser.com/", type: "free", icon: YoutubeIcon }] },
        { name: "Intro to Python", icon: Code2, resources: [{ name: "freeCodeCamp Python", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/", type: "free", icon: Laptop }] },
        { name: "Networking Basics", icon: Network, resources: [{ name: "Cisco NetAcad Intro", url: "https://www.netacad.com/courses/networking/networking-essentials", type: "free", icon: Laptop}] },
        { name: "Linux Essentials", icon: Terminal, resources: [{ name: "TryHackMe Linux Fundamentals", url: "https://tryhackme.com/module/linux-fundamentals", type: "hybrid", icon: Laptop }] },
        { name: "Intro to Cybersecurity", icon: ShieldCheck, resources: [{ name: "TryHackMe Intro to Cyber Security", url: "https://tryhackme.com/path/outline/intro-to-cyber-security", type: "hybrid", icon: Laptop }] },
      ],
      certifications: [
        { name: "CompTIA A+", url: "https://www.comptia.org/certifications/a", type: "paid", icon: Award },
      ],
      practicalTips: [
        "Set up a virtual lab (VirtualBox/VMware).",
        "Practice basic Linux commands daily.",
        "Start simple Python projects.",
      ],
      infographicImage: "https://placehold.co/600x400.png",
      infographicAlt: "Beginner stage skills infographic placeholder",
    },
    {
      id: "intermediate",
      tabName: "Intermediate",
      title: "⚙️ Intermediate Stage",
      emoji: "⚙️",
      subtitle: "Semesters 3-6: Deepening Skills & Specialization",
      headerColor: "bg-roadmap-intermediate",
      goals: [
        "Master advanced Linux admin & shell scripting.",
        "Intermediate networking protocols & configs.",
        "Python scripting for security tasks.",
        "Web app vulnerabilities & testing.",
        "Database fundamentals (SQL).",
      ],
      topics: [
        { name: "Advanced Linux", icon: Terminal, resources: [{ name: "Linux Journey", url: "https://linuxjourney.com/", type: "free", icon: Laptop}] },
        { name: "Python for Security", icon: Code2, resources: [{ name: "Violent Python (Book Concept)", url: "#", type: "paid", icon: BookMarked}]},
        { name: "Web App Security", icon: FileLock2, resources: [{ name: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/", type: "free", icon: Laptop }, { name: "PortSwigger Web Security Academy", url:"https://portswigger.net/web-security", type:"free", icon:Laptop}] },
        { name: "Network Security", icon: ShieldCheck, resources: [{ name: "TryHackMe Network Security", url: "https://tryhackme.com/path/outline/network-security", type: "hybrid", icon: Laptop }] },
        { name: "Databases & SQL", icon: Cpu, resources: [{ name: "SQLZoo", url: "https://sqlzoo.net/", type: "free", icon: Laptop }]},
      ],
      certifications: [
        { name: "CompTIA Network+", url: "https://www.comptia.org/certifications/network", type: "paid", icon: Award },
        { name: "CompTIA Security+", url: "https://www.comptia.org/certifications/security", type: "paid", icon: Award },
        { name: "eJPT (eLearnSecurity)", url: "https://elearnsecurity.com/product/ejpt-certification/", type: "paid", icon: Award },
      ],
      practicalTips: [
        "Participate in CTFs (PicoCTF, TryHackMe CTFs).",
        "Build a home lab with pfSense/OPNsense.",
        "Contribute to small open-source security tools.",
      ],
      infographicImage: "https://placehold.co/600x400.png",
      infographicAlt: "Intermediate stage skills infographic placeholder",
    },
    {
      id: "advanced",
      tabName: "Advanced",
      title: "🚀 Advanced Stage",
      emoji: "🚀",
      subtitle: "Final Year / Post-Graduation: Specialization & Expertise",
      headerColor: "bg-roadmap-advanced",
      goals: [
        "Advanced penetration testing & exploit dev basics.",
        "Reverse engineering & malware analysis fundamentals.",
        "Digital forensics & incident response (DFIR).",
        "Specialize (cloud, appsec, threat intel).",
        "Capstone project or open-source contribution.",
      ],
      topics: [
        { name: "Advanced PenTesting", icon: Binary, resources: [{name: "Hack The Box Labs", url: "https://www.hackthebox.com/", type: "hybrid", icon: Laptop}, {name: "TryHackMe Offensive Pentesting Path", url: "https://tryhackme.com/path/outline/pentesting", type: "hybrid", icon: Laptop}]},
        { name: "Malware Analysis", icon: FlaskConical, resources: [{ name: "Practical Malware Analysis (Book)", url: "#", type: "paid", icon: BookMarked }]},
        { name: "Digital Forensics (DFIR)", icon: FileLock2, resources: [{ name: "SANS Posters", url: "https://www.sans.org/posters/", type: "free", icon: NewspaperIcon }]},
        { name: "Cloud Security", icon: Cloud, resources: [{ name: "AWS/Azure/GCP Security Docs", url: "#", type: "docs", icon: Laptop}]},
        { name: "Exploit Development", icon: Atom, resources: [{ name: "Exploit Database", url: "https://www.exploit-db.com/", type: "free", icon: Laptop}]},
      ],
      certifications: [
        { name: "OSCP (Offensive Security)", url: "https://www.offensive-security.com/pwk-oscp/", type: "paid", icon: Award },
        { name: "GIAC Certifications (GCIH, GCFA, GPEN)", url: "https://www.giac.org/", type: "paid", icon: Award },
        { name: "Cloud Security Certs (AWS, Azure, GCP)", url: "#", type: "paid", icon: Award },
      ],
      practicalTips: [
        "Deep dive into chosen specialization.",
        "Contribute to research or bug bounties (ethically).",
        "Network with professionals.",
        "Mentor beginners.",
      ],
      infographicImage: "https://placehold.co/600x400.png",
      infographicAlt: "Advanced stage skills infographic placeholder",
    },
  ] as RoadmapStageData[],
  books: [
    // Beginner
    { id: "b1", title: "The Linux Command Line", author: "William Shotts", description: "Master the Linux CLI.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "linux book", amazonLink: "#", level: "Beginner" },
    { id: "b2", title: "Networking All-in-One For Dummies", author: "Doug Lowe", description: "Comprehensive networking guide.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "networking book", amazonLink: "#", level: "Beginner" },
    { id: "b3", title: "Python Crash Course", author: "Eric Matthes", description: "Hands-on Python introduction.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "python book", amazonLink: "#", level: "Beginner" },
    // Intermediate
    { id: "i1", title: "Black Hat Python", author: "Justin Seitz", description: "Python for Pentesters.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "python hacking book", amazonLink: "#", level: "Intermediate" },
    { id: "i2", title: "Web Application Hacker's Handbook", author: "D. Stuttard, M. Pinto", description: "Essential web hacking guide.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "web hacking book", amazonLink: "#", level: "Intermediate" },
    // Advanced
    { id: "a1", title: "Hacking: The Art of Exploitation", author: "Jon Erickson", description: "Deep dive into exploitation techniques.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "exploit dev book", amazonLink: "#", level: "Advanced" },
    { id: "a2", title: "Practical Malware Analysis", author: "M. Sikorski, A. Honig", description: "Hands-on malware dissection.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "malware analysis book", amazonLink: "#", level: "Advanced" },
  ] as RoadmapBookData[],
  platformsAndLabs: [
    { id: "pl1", name: "TryHackMe", logoUrl: "https://placehold.co/100x50.png", imageHint: "tryhackme logo", url: "https://tryhackme.com", type: "hybrid", description: "Gamified cybersecurity learning." },
    { id: "pl2", name: "Hack The Box", logoUrl: "https://placehold.co/100x50.png", imageHint: "hackthebox logo", url: "https://www.hackthebox.com", type: "hybrid", description: "Advanced penetration testing labs." },
    { id: "pl3", name: "PicoCTF", logoUrl: "https://placehold.co/100x50.png", imageHint: "picoctf logo", url: "https://picoctf.org", type: "free", description: "Beginner-friendly CTF challenges." },
    { id: "pl4", name: "VulnHub", logoUrl: "https://placehold.co/100x50.png", imageHint: "vulnhub logo", url: "https://www.vulnhub.com", type: "free", description: "Offline vulnerable virtual machines." },
    { id: "pl5", name: "PortSwigger Web Security Academy", logoUrl: "https://placehold.co/100x50.png", imageHint: "portswigger logo", url: "https://portswigger.net/web-security", type: "free", description: "Comprehensive web security training." },
    { id: "pl6", name: "PentesterLab", logoUrl: "https://placehold.co/100x50.png", imageHint: "pentesterlab logo", url: "https://pentesterlab.com", type: "paid", description: "Hands-on labs for various vulnerabilities." },
  ] as RoadmapPlatformLab[],
  communitiesAndNews: [
    { id: "cn1", name: "r/cybersecurity", icon: MessageSquare, url: "https://www.reddit.com/r/cybersecurity/", type: "subreddit", description: "General cybersecurity discussions." },
    { id: "cn2", name: "r/netsecstudents", icon: MessageSquare, url: "https://www.reddit.com/r/netsecstudents/", type: "subreddit", description: "For students learning network security." },
    { id: "cn3", name: "The Hacker News", icon: NewspaperIcon, url: "https://thehackernews.com/", type: "news", description: "Latest cybersecurity news." },
    { id: "cn4", name: "Bleeping Computer", icon: NewspaperIcon, url: "https://www.bleepingcomputer.com/", type: "news", description: "Tech news and support." },
    { id: "cn5", name: "Professor Messer", icon: YoutubeIcon, url: "https://www.youtube.com/user/professormesser", type: "youtube", description: "CompTIA certification training." },
    { id: "cn6", name: "David Bombal", icon: YoutubeIcon, url: "https://www.youtube.com/c/DavidBombal", type: "youtube", description: "Networking, ethical hacking, Python." },
    { id: "cn7", name: "InfoSec Write-ups", icon: BookOpen, url: "https://infosecwriteups.com/", type: "blog", description: "CTF write-ups and security articles."},
  ] as RoadmapCommunityNews[],
  footer: {
    socialLinks: [
      { name: "GitHub", url: "https://github.com/tekendraa7", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/tekendraa7/", icon: Linkedin },
      { name: "Twitter", url: "https://twitter.com/yourusername", icon: Twitter }, // Replace with actual Twitter if available
    ]
  }
};

// This export is kept simple to avoid 'use server' issues with complex objects.
// The main data structure 'roadmapPageData' is used directly in the page component.
export const roadmapData = roadmapPageData.stages.map(s => ({
  id: s.id,
  title: s.title,
  level: s.tabName as "Beginner" | "Intermediate" | "Advanced", // A bit of a hack for old component
  description: s.subtitle,
  goals: s.goals,
  categories: s.topics.map(t => ({
      title: t.name,
      iconName: "Cpu" as keyof typeof import("lucide-react"), // Placeholder icon name
      items: t.resources?.map(r => `${r.name} (${r.type})` + (r.url ? ` - ${r.url}` : '')) || []
  }))
}));

export const roadmapBooksData = roadmapPageData.books.map(b => ({
    id: b.id,
    title: b.title,
    author: b.author,
    description: b.description,
    imageUrl: b.coverImageUrl,
    imageHint: b.imageHint,
    amazonLink: b.amazonLink,
    level: b.level
}));

