
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
  goals: string[]; // Summary of goals for this stage
  categories: RoadmapCategory[];
}

export const roadmapData: RoadmapStage[] = [
  {
    id: "beginner",
    title: "Year 1 (Semesters 1 & 2) - Foundational Knowledge",
    level: "Beginner",
    description: "Focus on building fundamental knowledge in computing, basic programming, networking essentials, and an introduction to Linux and cybersecurity concepts. This stage is about laying a strong groundwork for more advanced topics.",
    goals: [
        "Understand core computing and operating system principles.",
        "Gain proficiency in basic Python programming.",
        "Learn fundamental networking concepts (OSI, TCP/IP).",
        "Become comfortable with the Linux command line interface.",
        "Develop an awareness of common cybersecurity threats and ethical hacking principles.",
        "Set up a personal virtual lab environment for hands-on practice."
    ],
    categories: [
      {
        title: "Core Technical Areas",
        iconName: "Cpu",
        items: [
          "Computer Hardware & Architecture Fundamentals",
          "Operating System Concepts (Windows, macOS, Linux basics)",
          { name: "Introduction to Programming (Python recommended)", description: "Syntax, data types, control flow, basic data structures. Practical tip: Start with small projects like a simple calculator or to-do list." },
          { name: "Basic Networking", description: "OSI Model, TCP/IP suite, common protocols (HTTP, DNS, DHCP, ICMP). Tip: Use Wireshark to visualize traffic." },
          { name: "Introduction to Linux", description: "File system navigation, basic commands (ls, cd, pwd, man, grep, find, pipe), user management. Tip: Install a beginner-friendly distro like Ubuntu or Mint in a VM." },
          "Version Control with Git & GitHub basics (essential for collaboration and project management).",
          "Introduction to Virtualization (VirtualBox, VMware Player for setting up labs).",
        ],
      },
      {
        title: "Security Concepts",
        iconName: "ShieldCheck",
        items: [
          "CIA Triad (Confidentiality, Integrity, Availability) - the cornerstone of information security.",
          "Common Cyber Threats (Malware, Phishing, Social Engineering, DoS/DDoS). Tip: Learn to identify phishing emails.",
          "Password Security and Management Best Practices (use strong, unique passwords and a password manager).",
          "Introduction to Ethical Hacking Principles & Legal Frameworks (understand the rules of engagement).",
          "Digital Footprint and Online Privacy Awareness.",
          "Basic Data Security and Backups (why they are important and how to do them).",
        ],
      },
      {
        title: "Practical Labs & Studies",
        iconName: "TerminalSquare",
        items: [
          "Setting up a virtual lab environment with Kali Linux and vulnerable machines (e.g., Metasploitable).",
          "Basic Python scripting for automation (e.g., file organization, simple network checks).",
          "Navigating and customizing a Linux distribution (e.g., Ubuntu Desktop, Kali Linux).",
          "Analyzing network traffic with Wireshark (basics - identify protocols, follow conversations).",
          "Completing introductory modules on platforms like TryHackMe ('Intro to Cyber Security' path) or HackTheBox Academy ('Fundamentals' module).",
          "Practical Tip: Document everything you learn. Start a digital notebook or blog."
        ],
      },
      {
        title: "Introductory Certifications (Consider towards end of Year 1/start of Year 2)",
        iconName: "Award",
        items: [
          { name: "CompTIA A+", description: "Foundational IT skills, good if completely new to IT." },
          { name: "CompTIA Network+", description: "Networking fundamentals. Highly recommended.", url: "https://www.comptia.org/certifications/network" },
        ],
      },
      {
        title: "Learning Platforms & Communities",
        iconName: "Tv2",
        items: [
          { name: "TryHackMe", url: "https://tryhackme.com", description: "Gamified learning platform, great for beginners." },
          { name: "HackTheBox Academy", url: "https://academy.hackthebox.com", description: "Structured modules, from fundamental to advanced." },
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org", description: "Excellent for learning Python and web basics." },
          { name: "Cybrary (free courses)", url: "https://www.cybrary.it", description: "Offers a range of introductory cybersecurity courses." },
          { name: "Cisco Networking Academy (Packet Tracer)", url: "https://www.netacad.com", description: "Networking simulation tool and courses." },
          { name: "Practical Tip", description: "Join online communities (e.g., Reddit's r/cybersecurity, r/linux, specific Discord servers) to ask questions and learn from others."}
        ],
      },
      {
        title: "Key YouTube Channels",
        iconName: "Youtube",
        items: [
          { name: "Professor Messer", url: "https://www.youtube.com/user/professormesser", description: "Comprehensive videos for CompTIA certs." },
          { name: "NetworkChuck", url: "https://www.youtube.com/c/NetworkChuck", description: "Energetic and engaging IT/Cybersecurity content." },
          { name: "David Bombal", url: "https://www.youtube.com/c/DavidBombal", description: "Networking, ethical hacking, and Python." },
          { name: "LiveOverflow", url: "https://www.youtube.com/c/LiveOverflow", description: "More advanced, but good for understanding hacker mindset." },
        ],
      },
    ],
  },
  {
    id: "intermediate",
    title: "Year 2 & 3 (Semesters 3-6) - Intermediate Skills & Specialization",
    level: "Intermediate",
    description: "Deepen technical skills in networking, Linux administration, scripting, and core cybersecurity domains. Start exploring specialized areas and gain hands-on experience through more complex labs and CTFs.",
    goals: [
        "Master advanced Linux administration and shell scripting.",
        "Understand intermediate networking protocols and configurations.",
        "Develop Python scripting skills for security tasks.",
        "Gain knowledge of web application vulnerabilities and testing.",
        "Learn database fundamentals and basic SQL.",
        "Explore cloud computing basics and security implications.",
        "Deepen understanding of vulnerability assessment, penetration testing methodologies, and network security.",
        "Participate actively in CTFs and build practical skills."
    ],
    categories: [
      {
        title: "Core Technical Areas",
        iconName: "Server",
        items: [
          { name: "Advanced Linux Administration", description: "Shell scripting (Bash), process management, cron jobs, system monitoring (htop, vmstat), package management (apt, yum), log analysis. Tip: Automate common admin tasks with scripts." },
          { name: "Intermediate Networking", description: "Routing protocols (OSPF, EIGRP basics), VLANs, NAT/PAT, VPN concepts (IPSec, OpenVPN), network troubleshooting tools (ping, traceroute, netstat, ss). Tip: Set up a pfSense or OPNsense firewall in your lab." },
          { name: "Python for Security", description: "Socket programming for network tools, web scraping with requests/BeautifulSoup, API interaction (e.g., Shodan), basic tool development for recon or exploitation. Tip: Try to replicate simple existing tools." },
          { name: "Web Application Basics", description: "HTTP/HTTPS, HTML, CSS, JS, understanding common vulnerabilities like XSS, SQLi, CSRF, LFI/RFI. Tip: Use OWASP Juice Shop for hands-on practice." },
          "Database Fundamentals (SQL basics - SELECT, INSERT, UPDATE, DELETE; understanding relational databases).",
          "Introduction to Cloud Computing (AWS, Azure, GCP - core services like EC2/VMs, S3/Blob, IAM, VPC/VNet).",
        ],
      },
      {
        title: "Security Concepts & Domains",
        iconName: "FileLock2",
        items: [
          "Vulnerability Assessment & Management (using tools like Nessus, OpenVAS, Nikto).",
          "Penetration Testing Methodologies (PTES, OWASP Testing Guide). Understand the phases: Recon, Scanning, Exploitation, Post-Exploitation, Reporting.",
          "Network Security (Firewalls, IDS/IPS - Snort/Suricata basics, NAC concepts).",
          "Cryptography Basics (Symmetric/Asymmetric encryption, Hashing, Digital Signatures, PKI). Tip: Understand how SSL/TLS works.",
          "Incident Response Fundamentals (Phases: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned).",
          "Security Information and Event Management (SIEM) concepts (log collection, correlation, alerting).",
          "Identity and Access Management (IAM - principles of least privilege, MFA, RBAC).",
        ],
      },
      {
        title: "Practical Labs & Studies",
        iconName: "Code2",
        items: [
          "Building more complex Python scripts (e.g., simple port scanner, subdomain enumerator, basic web fuzzer).",
          "Setting up and configuring a home lab with multiple VMs, a pfSense/OPNsense firewall, and a simple SIEM (e.g., Wazuh).",
          "Participating in CTF competitions (beginner to intermediate level on CTFtime, PicoCTF, HTB). Tip: Focus on learning, not just winning.",
          "Working through vulnerable machines on TryHackMe, HackTheBox (Retired Machines), VulnHub.",
          "Exploring web application testing with OWASP ZAP or Burp Suite Community Edition.",
          "Basic SIEM setup and log analysis (e.g., Wazuh or basic ELK stack exploration).",
          "Practical Tip: Start building a portfolio of your projects and CTF write-ups on GitHub."
        ],
      },
      {
        title: "Cloud & Emerging Tech",
        iconName: "Cloud",
        items: [
          "Cloud Security Fundamentals (Shared Responsibility Model, common cloud threats, misconfigurations).",
          "Serverless Computing Concepts (AWS Lambda, Azure Functions - how they work and security considerations).",
          "Introduction to Infrastructure as Code (IaC - Terraform basics for automating cloud resource deployment).",
          "Awareness of Quantum Computing and its potential impact on cryptography (conceptual understanding).",
        ],
      },
      {
        title: "Certifications (Consider during these years)",
        iconName: "Award",
        items: [
          { name: "CompTIA Security+", description: "Core cybersecurity skills, often a good starting point for intermediate roles.", url: "https://www.comptia.org/certifications/security" },
          { name: "Cisco CCNA", description: "Strong networking skills, very valuable.", url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html" },
          { name: "eJPT (eLearnSecurity Junior Penetration Tester)", description: "Practical, hands-on penetration testing certification.", url: "https://elearnsecurity.com/product/ejpt-certification/" },
          { name: "Linux Professional Institute LPIC-1 or CompTIA Linux+", description: "Demonstrates Linux administration proficiency." },
          { name: "Practical Tip", description: "Focus on one or two certs that align with your interests, don't try to get them all. Hands-on skills are paramount."}
        ],
      },
      {
        title: "Learning Platforms & Communities",
        iconName: "Users",
        items: [
          { name: "PentesterLab", url: "https://pentesterlab.com", description: "Hands-on labs for web and system vulnerabilities." },
          { name: "Offensive Security Proving Grounds (PG Play/Practice)", url: "https://www.offensive-security.com/labs/", description: "Vulnerable machines by the creators of OSCP." },
          "Local cybersecurity meetups and online forums (Reddit r/cybersecurity, r/netsecstudents, specific Discord servers). Actively participate!",
        ],
      },
      {
        title: "CTF Platforms",
        iconName: "Puzzle",
        items: [
          { name: "CTFtime", url: "https://ctftime.org", description: "Aggregator for upcoming CTF events." },
          { name: "PicoCTF", url: "https://picoctf.org", description: "Great for learning, especially for beginners/intermediate." },
          { name: "OverTheWire", url: "https://overthewire.org/wargames/", description: "Wargames to learn security concepts through challenges." },
          { name: "Hack The Box (HTB)", url: "https://www.hackthebox.com", description: "Popular platform for CTFs and labs."}
        ],
      },
    ],
  },
  {
    id: "advanced",
    title: "Year 4 & Beyond (Semesters 7-8 & Post-Graduation) - Advanced Topics & Career Specialization",
    level: "Advanced",
    description: "Focus on advanced cybersecurity domains, specialization (e.g., pentesting, forensics, cloud security), real-world project experience, and preparing for entry-level to mid-level career roles. Continuous learning is key.",
    goals: [
        "Master advanced penetration testing techniques and exploit development basics.",
        "Gain an understanding of reverse engineering and malware analysis.",
        "Learn digital forensics and incident response (DFIR) processes.",
        "Specialize in areas like cloud security, application security, or threat intelligence.",
        "Develop a capstone project or contribute to significant open-source work.",
        "Prepare for and obtain advanced certifications relevant to chosen specialization.",
        "Build a professional network and prepare for job applications and interviews."
    ],
    categories: [
      {
        title: "Advanced Technical Areas",
        iconName: "Binary",
        items: [
          { name: "Advanced Penetration Testing", description: "Exploit development basics (buffer overflows, ROP chains - conceptual to practical), custom tool development, evasion techniques, red teaming concepts. Tip: Study publicly available exploits." },
          { name: "Reverse Engineering Basics", description: "Understanding assembly (x86/ARM), using tools like Ghidra/IDA Free for static analysis, debuggers like GDB/x64dbg for dynamic analysis." },
          { name: "Malware Analysis Fundamentals", description: "Static and dynamic analysis techniques, sandboxing, identifying IOCs. Tip: Analyze malware samples in a safe, isolated environment." },
          "Digital Forensics & Incident Response (DFIR) - Memory forensics, disk forensics, log analysis, timeline creation.",
          "Cloud Security Architecture & DevSecOps - Securely designing and deploying cloud infrastructure, integrating security into CI/CD pipelines.",
          "Threat Hunting and Intelligence - Proactively searching for threats, understanding adversary TTPs (MITRE ATT&CK framework).",
        ],
      },
      {
        title: "Security Concepts & Domains",
        iconName: "LockKeyhole",
        items: [
          "Advanced Persistent Threats (APTs) - Understanding their lifecycle and detection.",
          "Security Orchestration, Automation and Response (SOAR) - Tools and techniques for automating security operations.",
          "Industrial Control Systems (ICS) / SCADA Security (awareness of unique challenges and security measures).",
          "Cryptography Implementation & Attacks - Understanding common cryptographic vulnerabilities and attacks.",
          "Application Security (Secure SDLC, Threat Modeling, SAST/DAST tools).",
          "Governance, Risk, and Compliance (GRC) basics (understanding frameworks like NIST, ISO 27001).",
        ],
      },
      {
        title: "Practical Labs & Capstone Projects",
        iconName: "GraduationCap",
        items: [
          "Developing custom security tools or scripts for advanced tasks (e.g., custom C2 framework, advanced recon tools).",
          "Contributing to open-source security projects (e.g., Metasploit, Nmap, security libraries).",
          "Conducting a comprehensive penetration test on a complex lab environment, including reporting.",
          "Capstone project focusing on a specific cybersecurity challenge (e.g., building a secure application with threat modeling, designing a secure cloud architecture, advanced malware analysis project).",
          "Participating in advanced CTFs (e.g., DEF CON CTF qualifiers) and bug bounty programs (responsibly and ethically).",
          "Practical Tip: Simulate real-world scenarios in your lab. Build an Active Directory environment and practice attacking/defending it."
        ],
      },
      {
        title: "Cloud & Quantum (Advanced)",
        iconName: "Atom",
        items: [
          "Advanced Cloud Security (e.g., Kubernetes security, container security with tools like Falco, Aqua Security).",
          "Cloud-Native Security Tools and Practices (CNAPP, CSPM, CWPP).",
          "Understanding Post-Quantum Cryptography (PQC) developments and ongoing standardization efforts.",
          "Exploring Quantum Key Distribution (QKD) concepts and potential applications.",
        ],
      },
      {
        title: "Career Paths & Certifications (Consider)",
        iconName: "Route",
        items: [
          "Potential Career Paths: Security Analyst, Penetration Tester, Cybersecurity Engineer, Incident Responder, Cloud Security Engineer, Malware Analyst, Security Researcher, Threat Hunter.",
          { name: "OSCP (Offensive Security Certified Professional)", description: "Highly practical, hands-on penetration testing certification. Industry standard for pentesters.", url: "https://www.offensive-security.com/pwk-oscp/" },
          { name: "GIAC Certifications (e.g., GCIH, GCFA, GPEN, GXPN)", description: "Specialized SANS certifications, highly respected.", url: "https://www.giac.org/certifications/" },
          { name: "Cloud Provider Security Certifications (AWS Certified Security - Specialty, Azure Security Engineer Associate, Google Professional Cloud Security Engineer)", description: "Cloud-specific security skills." },
          "Specialized vendor certifications based on interest (e.g., Palo Alto PCNSE, Fortinet NSE).",
          "Practical Tip: Tailor your resume and cover letter for each job application. Highlight relevant skills and projects."
        ],
      },
      {
        title: "Learning & Professional Development",
        iconName: "Lightbulb",
        items: [
          "Attending industry conferences and webinars (virtual or in-person, e.g., DEF CON, Black Hat, local BSides).",
          "Building a professional network (LinkedIn, local groups, conference networking).",
          "Mentorship (seeking guidance from experienced professionals or mentoring juniors).",
          "Contributing to security research, publishing write-ups, or presenting at local meetups.",
          "Continuous learning: The cybersecurity landscape is always evolving. Dedicate time to stay updated with new threats, vulnerabilities, and technologies.",
          "Practical Tip: Practice your communication skills. Being able to explain technical concepts clearly is crucial."
        ],
      },
    ],
  },
];


export interface RoadmapBook {
  id: string;
  title: string;
  author: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  amazonLink?: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export const roadmapBooksData: RoadmapBook[] = [
  // Beginner Books
  {
    id: "b1",
    title: "The Linux Command Line: A Complete Introduction",
    author: "William Shotts",
    description: "An excellent starting point for mastering the Linux command line, essential for any cybersecurity professional.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "linux book", amazonLink: "#",
    level: "Beginner",
  },
  {
    id: "b2",
    title: "Networking All-in-One For Dummies",
    author: "Doug Lowe",
    description: "Covers networking fundamentals broadly, making it accessible for beginners.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "networking book", amazonLink: "#",
    level: "Beginner",
  },
  {
    id: "b3",
    title: "Python Crash Course",
    author: "Eric Matthes",
    description: "A hands-on, project-based introduction to programming in Python.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "python book", amazonLink: "#",
    level: "Beginner",
  },
  {
    id: "b4",
    title: "Cybersecurity For Dummies",
    author: "Joseph Steinberg",
    description: "Provides a general overview of cybersecurity concepts and threats.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "cybersecurity book", amazonLink: "#",
    level: "Beginner",
  },
  // Intermediate Books
  {
    id: "i1",
    title: "Black Hat Python, 2nd Edition",
    author: "Justin Seitz & Tim Arnold",
    description: "Learn to write Python scripts for offensive security tasks, networking, and tool development.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "python hacking book", amazonLink: "#",
    level: "Intermediate",
  },
  {
    id: "i2",
    title: "The Web Application Hacker's Handbook",
    author: "Dafydd Stuttard & Marcus Pinto",
    description: "A comprehensive guide to discovering and exploiting web application vulnerabilities.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "web hacking book", amazonLink: "#",
    level: "Intermediate",
  },
  {
    id: "i3",
    title: "Linux Bible",
    author: "Christopher Negus",
    description: "A more in-depth guide to Linux administration and commands.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "linux admin book", amazonLink: "#",
    level: "Intermediate",
  },
  {
    id: "i4",
    title: "Serious Cryptography: A Practical Introduction to Modern Encryption",
    author: "Jean-Philippe Aumasson",
    description: "Delves into the practical aspects of cryptography, beyond the basics.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "cryptography book", amazonLink: "#",
    level: "Intermediate",
  },
  // Advanced Books
  {
    id: "a1",
    title: "The Art of Memory Forensics",
    author: "Michael Hale Ligh, Andrew Case, Jamie Levy, AAron Walters",
    description: "Detecting and analyzing malware and threats in volatile memory.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "memory forensics book", amazonLink: "#",
    level: "Advanced",
  },
  {
    id: "a2",
    title: "Practical Malware Analysis",
    author: "Michael Sikorski & Andrew Honig",
    description: "A hands-on guide to dissecting malicious software.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "malware analysis book", amazonLink: "#",
    level: "Advanced",
  },
  {
    id: "a3",
    title: "RTFM: Red Team Field Manual",
    author: "Ben Clark",
    description: "A concise command reference for red teamers and penetration testers.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "red team book", amazonLink: "#",
    level: "Advanced",
  },
  {
    id: "a4",
    title: "Blue Team Handbook: Incident Response Edition",
    author: "Don Murdoch",
    description: "A practical guide for incident responders and blue teamers.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "blue team book", amazonLink: "#",
    level: "Advanced",
  },
  {
    id: "a5",
    title: "Hacking: The Art of Exploitation, 2nd Edition",
    author: "Jon Erickson",
    description: "Goes deep into the technicalities of hacking and exploit development.",
    imageUrl: "https://placehold.co/200x300.png", imageHint: "exploit dev book", amazonLink: "#",
    level: "Advanced",
  }
];

    