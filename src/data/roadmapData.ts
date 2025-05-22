
'use server';
/**
 * @fileOverview Data for the Cybersecurity, Linux, and Networking Roadmap.
 */
import type { LucideIcon } from "lucide-react";
import {
  Cpu, ShieldCheck, TerminalSquare, Network, Cloud, Bot, Atom,
  BookOpen, Youtube, Users, Puzzle, Lightbulb, Award, Tv2,
  Server, Code2, Binary, LockKeyhole, Route, FileLock2, GraduationCap
} from "lucide-react";

export interface RoadmapResource {
  name: string;
  url?: string;
  description?: string;
  icon?: LucideIcon; // Specific icon for a resource if needed
}

export interface RoadmapCategory {
  title: string;
  iconName: keyof typeof import("lucide-react"); // Name of the Lucide icon
  items: (string | RoadmapResource)[];
}

export interface RoadmapStage {
  id: string;
  title: string; // e.g., "Year 1 (Semesters 1 & 2) - Beginner Foundations"
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string; // Brief overview of the stage's focus
  categories: RoadmapCategory[];
}

export const roadmapData: RoadmapStage[] = [
  {
    id: "beginner",
    title: "Year 1 (Semesters 1 & 2) - Foundational Knowledge",
    level: "Beginner",
    description: "Focus on building fundamental knowledge in computing, basic programming, networking essentials, and an introduction to Linux and cybersecurity concepts.",
    categories: [
      {
        title: "Core Technical Areas",
        iconName: "Cpu",
        items: [
          "Computer Hardware & Architecture Fundamentals",
          "Operating System Concepts (Windows, macOS, Linux basics)",
          { name: "Introduction to Programming (Python recommended)", description: "Syntax, data types, control flow, basic data structures." },
          { name: "Basic Networking", description: "OSI Model, TCP/IP suite, common protocols (HTTP, DNS, DHCP, ICMP)." },
          { name: "Introduction to Linux", description: "File system navigation, basic commands (ls, cd, pwd, man, grep, find, pipe), user management." },
          "Version Control with Git & GitHub basics",
          "Introduction to Virtualization (VirtualBox, VMware Player)",
        ],
      },
      {
        title: "Security Concepts",
        iconName: "ShieldCheck",
        items: [
          "CIA Triad (Confidentiality, Integrity, Availability)",
          "Common Cyber Threats (Malware, Phishing, Social Engineering, DoS/DDoS)",
          "Password Security and Management Best Practices",
          "Introduction to Ethical Hacking Principles & Legal Frameworks",
          "Digital Footprint and Online Privacy Awareness",
          "Basic Data Security and Backups",
        ],
      },
      {
        title: "Practical Labs & Studies",
        iconName: "TerminalSquare",
        items: [
          "Setting up a virtual lab environment.",
          "Basic Python scripting for automation (e.g., file organization).",
          "Navigating and customizing a Linux distribution (e.g., Ubuntu Desktop).",
          "Analyzing network traffic with Wireshark (basics).",
          "Completing introductory modules on platforms like TryHackMe or HackTheBox Academy.",
        ],
      },
      {
        title: "Introductory Certifications (Consider towards end of Year 1/start of Year 2)",
        iconName: "Award",
        items: [
          { name: "CompTIA A+", description: "Foundational IT skills." },
          { name: "CompTIA Network+", description: "Networking fundamentals.", url: "https://www.comptia.org/certifications/network" },
        ],
      },
      {
        title: "Learning Platforms",
        iconName: "Tv2",
        items: [
          { name: "TryHackMe", url: "https://tryhackme.com" },
          { name: "HackTheBox Academy", url: "https://academy.hackthebox.com" },
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org" },
          { name: "Cybrary (free courses)", url: "https://www.cybrary.it" },
          { name: "Cisco Networking Academy (Packet Tracer)", url: "https://www.netacad.com" }
        ],
      },
      {
        title: "Key YouTube Channels",
        iconName: "Youtube",
        items: [
          { name: "Professor Messer", url: "https://www.youtube.com/user/professormesser" },
          { name: "NetworkChuck", url: "https://www.youtube.com/c/NetworkChuck" },
          { name: "David Bombal", url: "https://www.youtube.com/c/DavidBombal" },
          { name: "LiveOverflow", url: "https://www.youtube.com/c/LiveOverflow" },
        ],
      },
      {
        title: "Book Recommendations",
        iconName: "BookOpen",
        items: [
          { name: "The Linux Command Line: A Complete Introduction", description: "by William Shotts" },
          { name: "Networking All-in-One For Dummies", description: "by Doug Lowe" },
          { name: "Python Crash Course", description: "by Eric Matthes" },
        ],
      },
    ],
  },
  {
    id: "intermediate",
    title: "Year 2 & 3 (Semesters 3-6) - Intermediate Skills & Specialization",
    level: "Intermediate",
    description: "Deepen technical skills in networking, Linux administration, scripting, and core cybersecurity domains. Start exploring specialized areas.",
    categories: [
      {
        title: "Core Technical Areas",
        iconName: "Server",
        items: [
          { name: "Advanced Linux Administration", description: "Shell scripting (Bash), process management, cron jobs, system monitoring, package management (apt, yum)." },
          { name: "Intermediate Networking", description: "Routing protocols (OSPF, EIGRP basics), VLANs, NAT/PAT, VPN concepts, network troubleshooting." },
          { name: "Python for Security", description: "Socket programming, web scraping with requests/BeautifulSoup, API interaction, basic tool development." },
          "Web Application Basics (HTTP/HTTPS, HTML, CSS, JS, common vulnerabilities like XSS, SQLi overview)",
          "Database Fundamentals (SQL basics, understanding relational databases)",
          "Introduction to Cloud Computing (AWS, Azure, GCP - core services, IAM)",
        ],
      },
      {
        title: "Security Concepts & Domains",
        iconName: "FileLock2",
        items: [
          "Vulnerability Assessment & Management",
          "Penetration Testing Methodologies (PTES, OWASP Testing Guide)",
          "Network Security (Firewalls, IDS/IPS, NAC)",
          "Cryptography Basics (Symmetric/Asymmetric encryption, Hashing, Digital Signatures)",
          "Incident Response Fundamentals",
          "Security Information and Event Management (SIEM) concepts",
          "Identity and Access Management (IAM)",
        ],
      },
      {
        title: "Practical Labs & Studies",
        iconName: "Code2",
        items: [
          "Building more complex Python scripts (e.g., simple port scanner, subdomain enumerator).",
          "Setting up and configuring a home lab with multiple VMs, a pfSense firewall.",
          "Participating in CTF competitions (beginner to intermediate level).",
          "Working through vulnerable machines on TryHackMe, HackTheBox, VulnHub.",
          "Exploring web application testing with OWASP ZAP or Burp Suite Community.",
          "Basic SIEM setup and log analysis (e.g., Wazuh or ELK stack basics).",
        ],
      },
      {
        title: "Cloud & Emerging Tech",
        iconName: "Cloud",
        items: [
          "Cloud Security Fundamentals (Shared Responsibility Model, common cloud threats).",
          "Serverless Computing Concepts (AWS Lambda, Azure Functions).",
          "Introduction to Infrastructure as Code (IaC - Terraform basics).",
          "Awareness of Quantum Computing and its potential impact on cryptography (conceptual).",
        ],
      },
      {
        title: "Certifications (Consider during these years)",
        iconName: "Award",
        items: [
          { name: "CompTIA Security+", description: "Core cybersecurity skills.", url: "https://www.comptia.org/certifications/security" },
          { name: "Cisco CCNA", description: "Networking skills.", url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html" },
          { name: "eJPT (eLearnSecurity Junior Penetration Tester)", description: "Practical penetration testing.", url: "https://elearnsecurity.com/product/ejpt-certification/" },
          { name: "Linux Professional Institute LPIC-1 or CompTIA Linux+", description: "Linux administration." },
        ],
      },
      {
        title: "Learning Platforms & Communities",
        iconName: "Users",
        items: [
          { name: "PentesterLab", url: "https://pentesterlab.com" },
          { name: "Offensive Security Proving Grounds (PG Play/Practice)", url: "https://www.offensive-security.com/labs/" },
          "Local cybersecurity meetups and online forums (Reddit r/cybersecurity, r/netsecstudents, specific Discord servers).",
        ],
      },
      {
        title: "CTF Platforms",
        iconName: "Puzzle",
        items: [
          { name: "CTFtime", url: "https://ctftime.org" },
          { name: "PicoCTF", url: "https://picoctf.org" },
          { name: "OverTheWire", url: "https://overthewire.org/wargames/" },
        ],
      },
      {
        title: "Book Recommendations",
        iconName: "BookOpen",
        items: [
          { name: "Black Hat Python, 2nd Edition", description: "by Justin Seitz & Tim Arnold" },
          { name: "The Web Application Hacker's Handbook", description: "by Dafydd Stuttard & Marcus Pinto" },
          { name: "Linux Bible", description: "by Christopher Negus" },
          { name: "Serious Cryptography", description: "by Jean-Philippe Aumasson" },
        ],
      },
    ],
  },
  {
    id: "advanced",
    title: "Year 4 (Semesters 7 & 8) - Advanced Topics & Career Specialization",
    level: "Advanced",
    description: "Focus on advanced cybersecurity domains, specialization, real-world project experience, and preparing for entry-level career roles.",
    categories: [
      {
        title: "Advanced Technical Areas",
        iconName: "Binary",
        items: [
          { name: "Advanced Penetration Testing", description: "Exploit development basics, post-exploitation techniques, red teaming concepts." },
          { name: "Reverse Engineering Basics", description: "Understanding assembly (x86/ARM), using tools like Ghidra/IDA Free." },
          { name: "Malware Analysis Fundamentals", description: "Static and dynamic analysis techniques." },
          "Digital Forensics & Incident Response (DFIR)",
          "Cloud Security Architecture & DevSecOps",
          "Threat Hunting and Intelligence",
        ],
      },
      {
        title: "Security Concepts & Domains",
        iconName: "LockKeyhole",
        items: [
          "Advanced Persistent Threats (APTs)",
          "Security Orchestration, Automation and Response (SOAR)",
          "Industrial Control Systems (ICS) / SCADA Security (awareness)",
          "Cryptography Implementation & Attacks",
          "Application Security (Secure SDLC, Threat Modeling)",
          "Governance, Risk, and Compliance (GRC) basics",
        ],
      },
      {
        title: "Practical Labs & Capstone Projects",
        iconName: "GraduationCap",
        items: [
          "Developing custom security tools or scripts.",
          "Contributing to open-source security projects.",
          "Conducting a comprehensive penetration test on a complex lab environment.",
          "Capstone project focusing on a specific cybersecurity challenge (e.g., building a secure application, designing a secure network, malware analysis project).",
          "Participating in advanced CTFs and bug bounty programs (responsibly).",
        ],
      },
      {
        title: "Cloud & Quantum (Advanced)",
        iconName: "Atom",
        items: [
          "Advanced Cloud Security (e.g., Kubernetes security, container security).",
          "Cloud-Native Security Tools and Practices.",
          "Understanding Post-Quantum Cryptography (PQC) developments.",
          "Exploring Quantum Key Distribution (QKD) concepts.",
        ],
      },
      {
        title: "Career Paths & Certifications (Consider)",
        iconName: "Route",
        items: [
          "Potential Career Paths: Security Analyst, Penetration Tester, Cybersecurity Engineer, Incident Responder, Cloud Security Engineer.",
          { name: "OSCP (Offensive Security Certified Professional)", description: "Highly practical penetration testing.", url: "https://www.offensive-security.com/pwk-oscp/" },
          { name: "GIAC Certifications (e.g., GCIH, GCFA, GPEN)", description: "Specialized SANS certifications.", url: "https://www.giac.org/certifications/" },
          { name: "Cloud Provider Security Certifications (AWS Certified Security - Specialty, Azure Security Engineer Associate)", description: "Cloud-specific security skills." },
          "Specialized vendor certifications based on interest (e.g., Palo Alto, Fortinet).",
        ],
      },
      {
        title: "Learning & Professional Development",
        iconName: "Lightbulb",
        items: [
          "Attending industry conferences and webinars (virtual or in-person).",
          "Building a professional network (LinkedIn, local groups).",
          "Mentorship (seeking or providing).",
          "Contributing to security research or blogs.",
          "Continuous learning and staying updated with new threats and technologies.",
        ],
      },
      {
        title: "Book Recommendations",
        iconName: "BookOpen",
        items: [
          { name: "The Art of Memory Forensics", description: "by Michael Hale Ligh et al." },
          { name: "Practical Malware Analysis", description: "by Michael Sikorski & Andrew Honig" },
          { name: "RTFM: Red Team Field Manual", description: "by Ben Clark" },
          { name: "Blue Team Handbook series", description: "by various authors for different editions" },
        ],
      },
    ],
  },
];

    