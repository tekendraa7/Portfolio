export const aboutData = {
  name: "Tekendra Bhandari",
  title: "Computer Engineering Student",
  subtitle: "Cybersecurity Enthusiast | Builder | Learner",
  university: "Far Western University",
  location: "Dhangadhi, Kailali, Nepal",
  bio: "I am a passionate computer engineering student with a strong interest in cybersecurity, Linux systems, and networking. Dedicated to continuous learning and building secure, innovative solutions.",
  longBio:
    "A passionate Computer Engineering student at Far Western University, diving deep into the world of cybersecurity, Linux, and networking. My journey started with curiosity about how systems work — and how they break. I'm focused on building practical skills in ethical hacking, system administration, and secure software development.",
  profileImageUrl: "https://lh3.googleusercontent.com/a/ACg8ocIssHRc7_y55HG7NhNO6DncCrODLm-ebAn1gft4_A0B1aHnySK9=s288-c-no",
  email: "er.tekendra.contact@gmail.com",
  phone: "+977-9848560722",
  github: "https://github.com/tekendraa7",
  linkedin: "https://www.linkedin.com/in/tekendraa7/",
};

export const techSkills = [
  { name: "Linux", icon: "terminal" },
  { name: "Python", icon: "code-slash" },
  { name: "Bash", icon: "terminal-outline" },
  { name: "HTML", icon: "globe-outline" },
  { name: "CSS", icon: "color-palette-outline" },
  { name: "C / C++", icon: "hardware-chip-outline" },
  { name: "Networking", icon: "git-network-outline" },
  { name: "Git", icon: "git-branch-outline" },
  { name: "Wireshark", icon: "eye-outline" },
  { name: "Cybersecurity", icon: "shield-outline" },
  { name: "VS Code", icon: "code-outline" },
  { name: "Docker", icon: "cube-outline" },
];

export const educationData = [
  {
    id: "edu-3",
    institution: "Far Western University",
    degree: "Bachelor's in Computer Engineering",
    location: "School of Engineering, Mahendranagar, Kanchanpur",
    period: "2022 – Present",
    current: true,
  },
  {
    id: "edu-2",
    institution: "Kailali Multiple Campus",
    degree: "SLC (Higher Secondary)",
    location: "Dhangadhi, Kailali",
    period: "2019 – 2021",
    current: false,
  },
  {
    id: "edu-1",
    institution: "Shree Siddhanath Secondary School",
    degree: "Secondary Level Certificate",
    location: "Dhangadhi, Kailali",
    period: "Before 2019",
    current: false,
  },
];

export const projectsData = [
  {
    id: "1",
    title: "Cyber Security Club Website",
    description:
      "Designed and built the frontend and UI for the official Cyber Security Club website at Far Western University.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    repoUrl: "https://github.com/sharppankaj/CSC-FWU",
  },
  {
    id: "2",
    title: "CyberShield Portfolio",
    description:
      "Full-stack portfolio site with an AI chatbot for cybersecurity Q&A, dark cyber theme, and multi-page layout.",
    technologies: ["React", "TypeScript", "Gemini AI", "Express"],
    repoUrl: "https://github.com/tekendraa7/Portfolio-CyberShield",
  },
  {
    id: "3",
    title: "Network Traffic Analyzer",
    description:
      "A Python-based tool to capture and analyze network packets, identifying potential security threats.",
    technologies: ["Python", "Scapy", "Wireshark"],
  },
  {
    id: "4",
    title: "Secure File Encryption Utility",
    description:
      "A CLI utility for encrypting and decrypting files using AES-256, ensuring data confidentiality.",
    technologies: ["Python", "Cryptography", "CLI"],
  },
];

export const certificatesData = [
  {
    id: "cert-1",
    title: "Introduction to Bash",
    issuer: "Online Learning Platform",
    date: "June 12, 2026",
    credentialId: "984317030",
  },
  {
    id: "cert-2",
    title: "Python for Cyber Security",
    issuer: "Online Learning Platform",
    date: "2026",
  },
  {
    id: "cert-3",
    title: "Introduction to Figma",
    issuer: "Design Course",
    date: "January 11, 2025",
    credentialId: "7764775",
  },
];

export const blogPostsData = [
  {
    id: "1",
    title: "Getting Started with Ethical Hacking: A Student's Guide",
    excerpt:
      "A practical intro to ethical hacking concepts, tools, and the mindset you need as a beginner.",
    date: "June 2026",
    tags: ["Cybersecurity", "Ethical Hacking"],
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Linux Essentials Every CS Student Should Know",
    excerpt:
      "The Linux commands and concepts that transformed how I work as an engineering student.",
    date: "May 2026",
    tags: ["Linux", "Bash"],
    readTime: "7 min",
  },
  {
    id: "3",
    title: "How I Built the CSC-FWU Club Website",
    excerpt:
      "A behind-the-scenes look at designing and building the Cyber Security Club website.",
    date: "April 2026",
    tags: ["Web Dev", "Project"],
    readTime: "4 min",
  },
  {
    id: "4",
    title: "Understanding the OSI Model (Finally)",
    excerpt:
      "Breaking down the 7 layers of the OSI model in plain language with real-world examples.",
    date: "March 2026",
    tags: ["Networking", "Fundamentals"],
    readTime: "6 min",
  },
];

export const roadmapPhases = [
  {
    id: "phase-1",
    number: 1,
    title: "Foundations",
    subtitle: "Weeks 1–12 · Building Core Knowledge",
    status: "completed" as const,
    topics: ["Networking Fundamentals", "OSI & TCP/IP", "Linux Basics", "Security Concepts"],
  },
  {
    id: "phase-2",
    number: 2,
    title: "Intermediate Networking & Core Security",
    subtitle: "Weeks 13–24 · Deepening Technical Expertise",
    status: "in-progress" as const,
    topics: ["Firewalls & IDS/IPS", "VPNs & Tunneling", "SIEM Basics", "Vulnerability Assessment"],
  },
  {
    id: "phase-3",
    number: 3,
    title: "Operating Systems Deep Dive",
    subtitle: "Weeks 25–36 · Mastering Linux & Windows",
    status: "upcoming" as const,
    topics: ["Linux Internals", "Windows Security", "Bash Scripting", "PowerShell"],
  },
  {
    id: "phase-4",
    number: 4,
    title: "Application Security & Web Technologies",
    subtitle: "Weeks 37–48 · Web Application Pentesting",
    status: "upcoming" as const,
    topics: ["OWASP Top 10", "SQL Injection", "XSS / CSRF", "Burp Suite"],
  },
  {
    id: "phase-5",
    number: 5,
    title: "Cryptography & Secure Protocols",
    subtitle: "Weeks 49–56 · Encryption Mastery",
    status: "upcoming" as const,
    topics: ["Symmetric/Asymmetric Encryption", "TLS/SSL", "PKI", "Hash Functions"],
  },
  {
    id: "phase-6",
    number: 6,
    title: "Penetration Testing & Tools",
    subtitle: "Weeks 57–72 · Ethical Hacking",
    status: "upcoming" as const,
    topics: ["Kali Linux", "Metasploit", "Nmap", "CTF Competitions"],
  },
];
