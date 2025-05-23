
import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Twitter, BookOpen, Laptop, Users, MessageSquare, YoutubeIcon, NewspaperIcon, ExternalLink, MapPin, Briefcase, Lightbulb, ShieldCheck, Terminal, Network, Brain, Target, Award, FlaskConical, BookMarked, Cpu, FileLock2, Code2, Cloud, Binary, LockKeyhole, Route, GraduationCap, Atom, Search, FileText, Tv2 } from "lucide-react";

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
  type: "free" | "paid" | "hybrid"; // hybrid added for platforms
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
        {
          name: "Computer Fundamentals",
          icon: Cpu,
          resources: [
            { name: "Professor Messer A+ Videos", url: "https://www.professormesser.com/free-a-plus-training/220-1101/220-1101-video/220-1101-training-course/", type: "free", icon: YoutubeIcon },
            { name: "CompTIA A+ Core 1 (220-1101) Full Course (PowerCert)", url: "https://www.youtube.com/watch?v=gLXg_Q27QcI", type: "free", icon: YoutubeIcon},
            { name: "ITProTV A+ Course", url: "https://www.itpro.tv/courses/comptia/a-1101-1102/", type: "paid", icon: Tv2 },
            { name: "Coursera - Google IT Support Professional Certificate", url: "https://www.coursera.org/professional-certificates/google-it-support", type: "paid", icon: Laptop }
          ]
        },
        {
          name: "Intro to Python",
          icon: Code2,
          resources: [
            { name: "freeCodeCamp Python", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/", type: "free", icon: Laptop },
            { name: "Codecademy Learn Python 3", url: "https://www.codecademy.com/learn/learn-python-3", type: "free", icon: Laptop }, // Free tier available
            { name: "Automate the Boring Stuff with Python (Book/Online)", url: "https://automatetheboringstuff.com/", type: "free", icon: BookMarked },
            { name: "Python for Everybody (Coursera/edX)", url: "https://www.py4e.com/book", type: "free", icon: Laptop }
          ]
        },
        {
          name: "Networking Basics",
          icon: Network,
          resources: [
            { name: "Cisco NetAcad Networking Essentials", url: "https://www.netacad.com/courses/networking/networking-essentials", type: "free", icon: Laptop},
            { name: "Professor Messer Network+ Videos", url: "https://www.professormesser.com/network-plus/n10-008/n10-008-training-course/", type: "free", icon: YoutubeIcon },
            { name: "TryHackMe Network Fundamentals", url: "https://tryhackme.com/module/network-fundamentals", type: "free", icon: Laptop }, // Has free rooms
            { name: "Udemy - The Complete Networking Fundamentals Course", url: "https://www.udemy.com/course/the-complete-networking-fundamentals-course-your-ccna-start/", type: "paid", icon: Laptop }
          ]
        },
        {
          name: "Linux Essentials",
          icon: Terminal,
          resources: [
            { name: "TryHackMe Linux Fundamentals Path", url: "https://tryhackme.com/path/outline/linux-fundamentals", type: "free", icon: Laptop }, // Has free rooms
            { name: "Linux Journey", url: "https://linuxjourney.com/", type: "free", icon: Laptop },
            { name: "OverTheWire: Bandit Wargame", url: "https://overthewire.org/wargames/bandit/", type: "free", icon: Terminal },
            { name: "Linux Professional Institute (LPI) Essentials", url: "https://www.lpi.org/our-certifications/linux-essentials-overview", type: "paid", icon: Award } // Certification
          ]
        },
        {
          name: "Intro to Cybersecurity",
          icon: ShieldCheck,
          resources: [
            { name: "TryHackMe Intro to Cyber Security Path", url: "https://tryhackme.com/path/outline/intro-to-cyber-security", type: "free", icon: Laptop }, // Has free rooms
            { name: "SANS Cyber Aces Online", url: "https://www.sans.org/cyber-aces/", type: "free", icon: Laptop },
            { name: "Cybrary - Intro to Cybersecurity", url: "https://www.cybrary.it/course/introduction-to-it-and-cybersecurity/", type: "free", icon: Laptop}, // Free introductory course
            { name: "ISC2 Certified in Cybersecurity (CC)", url: "https://www.isc2.org/Certifications/CC", type: "paid", icon: Award } // Certification, offers free training at times
          ]
        },
      ],
      certifications: [
        { name: "CompTIA A+", url: "https://www.comptia.org/certifications/a", type: "paid", icon: Award },
        { name: "Cisco CCST Networking", url: "https://www.netacad.com/careers/certifications/ccst-networking", type: "paid", icon: Award },
        { name: "ISC2 Certified in Cybersecurity (CC)", url: "https://www.isc2.org/Certifications/CC", type: "paid", icon: Award },
      ],
      practicalTips: [
        "Set up a virtual lab (VirtualBox/VMware).",
        "Practice basic Linux commands daily.",
        "Start simple Python projects for automation.",
        "Follow cybersecurity news blogs.",
        "Join a beginner-friendly online community.",
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
        "Database fundamentals (SQL) & basic security.",
      ],
      topics: [
        {
          name: "Advanced Linux & Scripting",
          icon: Terminal,
          resources: [
            { name: "Linux Upskill Challenge", url: "https://linuxupskillchallenge.com/", type: "free", icon: Laptop},
            { name: "Bash Scripting Tutorial (Ryan's Tutorials)", url: "https://ryanstutorials.net/bash-scripting-tutorial/", type: "free", icon: FileText },
            { name: "KodeKloud - Linux Challenges", url: "https://kodekloud.com/topic/linux-challenges/", type: "paid", icon: Laptop },
            { name: "The Linux Bible (Book)", url: "https://www.amazon.com/Linux-Bible-Christopher-Negus/dp/111957888X", type: "paid", icon: BookMarked }
          ]
        },
        {
          name: "Python for Security",
          icon: Code2,
          resources: [
            { name: "Black Hat Python (Book)", url: "https://nostarch.com/blackhatpython", type: "paid", icon: BookMarked},
            { name: "The Cyber Mentor - Python for Pentesters (YouTube)", url: "https://www.youtube.com/watch?v=bvLpL22gT5A&list=PLLKT__MCUeixqQcM3z7GWAGw1V3nL0Tz-", type: "free", icon:YoutubeIcon },
            { name: "Automating Cybersecurity with Python (Udemy)", url: "https://www.udemy.com/course/python-for-cybersecurity-professionals/", type: "paid", icon: Laptop },
            { name: "Violent Python (Book - older but concepts useful)", url: "https://www.amazon.com/Violent-Python-Cookbook-Penetration-Engineers/dp/1597499579", type: "paid", icon: BookMarked }
          ]
        },
        {
          name: "Web App Security",
          icon: FileLock2,
          resources: [
            { name: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/", type: "free", icon: Laptop },
            { name: "PortSwigger Web Security Academy", url:"https://portswigger.net/web-security", type:"free", icon:Laptop},
            { name: "TryHackMe Web Fundamentals Path", url: "https://tryhackme.com/path/outline/web-fundamentals", type: "free", icon: Laptop }, // Has free rooms
            { name: "PentesterLab - Web for Pentester", url: "https://pentesterlab.com/pro", type: "paid", icon: Laptop }
          ]
        },
        {
          name: "Network Security & Monitoring",
          icon: ShieldCheck,
          resources: [
            { name: "TryHackMe Network Security Path", url: "https://tryhackme.com/path/outline/network-security", type: "free", icon: Laptop }, // Has free rooms
            { name: "Security Onion (IDS/NSM Platform)", url: "https://securityonionsolutions.com/software/", type: "free", icon: Cpu },
            { name: "Wireshark University (Documentation & Videos)", url: "https://www.wireshark.org/docs/", type: "docs", icon:FileText },
            { name: "Snort (IDS/IPS)", url: "https://www.snort.org/", type: "free", icon: Cpu }
          ]
        },
        {
          name: "Databases & SQL",
          icon: Cpu,
          resources: [
            { name: "SQLZoo", url: "https://sqlzoo.net/", type: "free", icon: Laptop },
            { name: "Khan Academy SQL", url: "https://www.khanacademy.org/computing/computer-programming/sql", type: "free", icon: GraduationCap },
            { name: "PostgreSQL Exercises", url: "https://pgexercises.com/", type: "free", icon: Laptop },
            { name: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/", type: "free", icon: Laptop }
          ]
        },
      ],
      certifications: [
        { name: "CompTIA Network+", url: "https://www.comptia.org/certifications/network", type: "paid", icon: Award },
        { name: "CompTIA Security+", url: "https://www.comptia.org/certifications/security", type: "paid", icon: Award },
        { name: "eJPT (eLearnSecurity/INE)", url: "https://ine.com/learning/certifications/ejpt-certification-exam", type: "paid", icon: Award },
        { name: "Blue Team Level 1 (BTL1)", url: "https://securityblue.team/courses/blue-team-level-1/", type:"paid", icon:Award }
      ],
      practicalTips: [
        "Participate in CTFs regularly (PicoCTF, TryHackMe CTFs, CTFTime).",
        "Build a home lab: pfSense/OPNsense router, Security Onion, vulnerable VMs.",
        "Start learning basic vulnerability assessment tools (Nessus Essentials, OpenVAS).",
        "Document your learning and projects on GitHub or a blog.",
        "Explore tools like Burp Suite Community Edition.",
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
        "Specialize (cloud, appsec, threat intel, OT/ICS).",
        "Capstone project or significant open-source contribution.",
      ],
      topics: [
        {
          name: "Advanced PenTesting & Exploit Dev",
          icon: Binary,
          resources: [
            {name: "Hack The Box Labs", url: "https://www.hackthebox.com/", type: "paid", icon: Laptop}, // "hybrid" if considering free starting points.
            {name: "TryHackMe Offensive Pentesting Path", url: "https://tryhackme.com/path/outline/pentesting", type: "paid", icon: Laptop}, // "hybrid"
            { name: "Offensive Security Proving Grounds (PG Play & Practice)", url: "https://www.offensive-security.com/labs/", type: "free", icon: Laptop }, // PG Play is free
            { name: "Corelan Team Exploit Writing Tutorials", url: "https://www.corelan.be/index.php/exploitation-tutorials/", type: "free", icon: NewspaperIcon },
            { name: "Exploit Database", url: "https://www.exploit-db.com/", type: "free", icon: Search}
          ]
        },
        {
          name: "Malware Analysis & Reverse Engineering",
          icon: FlaskConical,
          resources: [
            { name: "Practical Malware Analysis (Book)", url: "https://nostarch.com/malware", type: "paid", icon: BookMarked },
            { name: "MalwareUnicorn RE101/102 Workshops", url: "https://malwareunicorn.org/workshops", type: "free", icon: Laptop },
            { name: "Any.Run Sandbox", url: "https://any.run/", type: "free", icon: Search }, // Free community version
            { name: "GHIDRA (NSA Reverse Engineering Tool)", url: "https://ghidra-sre.org/", type: "free", icon: Cpu }
          ]
        },
        {
          name: "Digital Forensics & Incident Response (DFIR)",
          icon: FileLock2,
          resources: [
            { name: "SANS DFIR Posters & Cheat Sheets", url: "https://www.sans.org/posters/?focus-area=digital-forensics-incident-response", type: "free", icon: NewspaperIcon },
            { name: "Autopsy (Open Source DFIR Platform)", url: "https://www.autopsy.com/", type: "free", icon: Cpu },
            { name: "Eric Zimmerman's Tools", url: "https://ericzimmerman.github.io/#!index.md", type: "free", icon: Cpu },
            { name: "The SIFT Workstation (SANS)", url: "https://www.sans.org/tools/sift-workstation/", type: "free", icon: Laptop}
          ]
        },
        {
          name: "Cloud Security (AWS/Azure/GCP)",
          icon: Cloud,
          resources: [
            { name: "AWS Skill Builder - Security Learning Plans", url: "https://explore.skillbuilder.aws/learn/public/learning_plan/view/109/security-learning-plan", type: "free", icon: Laptop},
            { name: "Azure Security Documentation", url: "https://learn.microsoft.com/en-us/azure/security/", type: "docs", icon: FileText},
            { name: "GCP Security Best Practices", url: "https://cloud.google.com/security/best-practices", type: "docs", icon: FileText },
            { name: "Cloud Security Alliance (CSA) Resources", url: "https://cloudsecurityalliance.org/research/guidance/", type: "free", icon: Cloud},
            { name: "CloudGoat (OWASP Vulnerable Cloud Env)", url: "https://github.com/RhinoSecurityLabs/cloudgoat", type: "free", icon: Github}
          ]
        },
        {
          name: "Threat Intelligence & OSINT",
          icon: Atom, // Consider Brain or Search icon
          resources: [
            { name: "OSINT Framework", url: "https://osintframework.com/", type: "free", icon: Search },
            { name: "SANS Reading Room - Threat Intel", url: "https://www.sans.org/reading-room/whitepapers/threats/", type: "free", icon: NewspaperIcon },
            { name: "MISP (Open Source Threat Sharing)", url: "https://www.misp-project.org/", type: "free", icon: Cpu },
            { name: "Bellingcat OSINT Toolkit", url: "https://www.bellingcat.com/resources/how-tos/2019/11/06/bellingcats-online-investigation-toolkit/", type: "docs", icon: NewspaperIcon}
          ]
        },
      ],
      certifications: [
        { name: "OSCP (Offensive Security)", url: "https://www.offensive-security.com/pwk-oscp/", type: "paid", icon: Award },
        { name: "GIAC Certifications (GCIH, GCFA, GPEN, etc.)", url: "https://www.giac.org/certifications/", type: "paid", icon: Award },
        { name: "Cloud Security Certs (AWS Security Specialty, AZ-500, GCP Professional Cloud Security Engineer)", url: "https://aws.amazon.com/certification/certified-security-specialty/", type: "paid", icon: Award }, // Link to one example
        { name: "CREST Certifications (CRT, CCT)", url: "https://www.crest-approved.org/certification-careers/", type: "paid", icon:Award}
      ],
      practicalTips: [
        "Deep dive into chosen specialization (e.g., red team, blue team, cloud sec, DFIR).",
        "Contribute to open-source security projects or research.",
        "Participate in bug bounty programs (ethically and with permission).",
        "Network actively: attend conferences (virtual/physical), join local meetups.",
        "Mentor beginners and share your knowledge.",
        "Develop your own security tools or scripts and share them on GitHub."
      ],
      infographicImage: "https://placehold.co/600x400.png",
      infographicAlt: "Advanced stage skills infographic placeholder",
    },
  ] as RoadmapStageData[],
  books: [
    // Beginner
    { id: "b1", title: "The Linux Command Line", author: "William Shotts", description: "Master the Linux CLI. Comprehensive and practical.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "linux book", amazonLink: "https://www.amazon.com/Linux-Command-Line-5th-Introduction/dp/1593279523/", pdfLink: "http://linuxcommand.org/tlcl.php", level: "Beginner" },
    { id: "b2", title: "Networking All-in-One For Dummies", author: "Doug Lowe", description: "Comprehensive networking guide, good for fundamentals.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "networking book", amazonLink: "https://www.amazon.com/Networking-All-One-Dummies-Computer/dp/111947555X/", level: "Beginner" },
    { id: "b3", title: "Python Crash Course", author: "Eric Matthes", description: "Hands-on Python introduction, great for project-based learning.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "python book", amazonLink: "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/", level: "Beginner" },
    { id: "b4", title: "Cybersecurity For Dummies", author: "Joseph Steinberg", description: "An accessible introduction to core cybersecurity concepts.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "cybersecurity intro book", amazonLink: "https://www.amazon.com/Cybersecurity-Dummies-Joseph-Steinberg/dp/1119566687/", level: "Beginner" },
    // Intermediate
    { id: "i1", title: "Black Hat Python, 2nd Edition", author: "Justin Seitz & Tim Arnold", description: "Python for Pentesters, creating offensive tools.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "python hacking book", amazonLink: "https://www.amazon.com/Black-Hat-Python-2nd-Programming/dp/1718501129/", level: "Intermediate" },
    { id: "i2", title: "The Web Application Hacker's Handbook", author: "D. Stuttard, M. Pinto", description: "Essential web hacking guide, though a bit dated, concepts are gold.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "web hacking book", amazonLink: "https://www.amazon.com/Web-Application-Hackers-Handbook-Finding/dp/1118026470/", level: "Intermediate" },
    { id: "i3", title: "Linux Bible", author: "Christopher Negus", description: "A comprehensive guide to Linux administration.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "linux admin book", amazonLink: "https://www.amazon.com/Linux-Bible-Christopher-Negus/dp/111957888X/", level: "Intermediate" },
    { id: "i4", title: "Practical Packet Analysis", author: "Chris Sanders", description: "Using Wireshark to solve real-world network problems.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "wireshark book", amazonLink: "https://www.amazon.com/Practical-Packet-Analysis-Wireshark-Real-World/dp/1098160089/", level: "Intermediate"},
    // Advanced
    { id: "a1", title: "Hacking: The Art of Exploitation, 2nd Ed", author: "Jon Erickson", description: "Deep dive into exploitation techniques from a C programming perspective.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "exploit dev book", amazonLink: "https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441/", level: "Advanced" },
    { id: "a2", title: "Practical Malware Analysis", author: "M. Sikorski, A. Honig", description: "Hands-on guide to dissecting malicious software.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "malware analysis book", amazonLink: "https://www.amazon.com/Practical-Malware-Analysis-Hands-Dissecting/dp/1593272908/", level: "Advanced" },
    { id: "a3", title: "The Hacker Playbook 3: Practical Guide To Penetration Testing", author: "Peter Kim", description: "A playbook-style guide for red teamers and pentesters.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "pentesting book", amazonLink: "https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing/dp/1980901759/", level: "Advanced" },
    { id: "a4", title: "Applied Cryptography", author: "Bruce Schneier", description: "A classic, comprehensive text on cryptographic protocols and techniques.", coverImageUrl: "https://placehold.co/200x300.png", imageHint: "cryptography book", amazonLink: "https://www.amazon.com/Applied-Cryptography-Protocols-Algorithms-Source/dp/1119096723/", level: "Advanced" },
  ] as RoadmapBookData[],
  platformsAndLabs: [
    { id: "pl1", name: "TryHackMe", logoUrl: "https://placehold.co/100x50.png", imageHint: "tryhackme logo", url: "https://tryhackme.com", type: "hybrid", description: "Gamified cybersecurity learning for all levels." },
    { id: "pl2", name: "Hack The Box", logoUrl: "https://placehold.co/100x50.png", imageHint: "hackthebox logo", url: "https://www.hackthebox.com", type: "hybrid", description: "Challenging penetration testing labs for intermediate/advanced users." },
    { id: "pl3", name: "PicoCTF", logoUrl: "https://placehold.co/100x50.png", imageHint: "picoctf logo", url: "https://picoctf.org", type: "free", description: "Beginner-friendly CTF challenges, great for starting out." },
    { id: "pl4", name: "VulnHub", logoUrl: "https://placehold.co/100x50.png", imageHint: "vulnhub logo", url: "https://www.vulnhub.com", type: "free", description: "Downloadable vulnerable virtual machines for offline practice." },
    { id: "pl5", name: "PortSwigger Web Security Academy", logoUrl: "https://placehold.co/100x50.png", imageHint: "portswigger logo", url: "https://portswigger.net/web-security", type: "free", description: "Comprehensive, free web security training from Burp Suite creators." },
    { id: "pl6", name: "PentesterLab", logoUrl: "https://placehold.co/100x50.png", imageHint: "pentesterlab logo", url: "https://pentesterlab.com", type: "paid", description: "Hands-on labs covering a wide range of web vulnerabilities." },
    { id: "pl7", name: "LetsDefend", logoUrl: "https://placehold.co/100x50.png", imageHint: "letsdefend logo", url: "https://letsdefend.io/", type: "hybrid", description: "Blue team focused training platform with SOC simulations." },
    { id: "pl8", name: "Immersive Labs", logoUrl: "https://placehold.co/100x50.png", imageHint: "immersive labs logo", url: "https://www.immersivelabs.com/", type: "paid", description: "Enterprise-grade platform for hands-on cyber skill development." },
  ] as RoadmapPlatformLab[],
  communitiesAndNews: [
    { id: "cn1", name: "r/cybersecurity", icon: MessageSquare, url: "https://www.reddit.com/r/cybersecurity/", type: "subreddit", description: "General cybersecurity discussions and news." },
    { id: "cn2", name: "r/netsecstudents", icon: MessageSquare, url: "https://www.reddit.com/r/netsecstudents/", type: "subreddit", description: "For students and beginners in network security." },
    { id: "cn3", name: "The Hacker News", icon: NewspaperIcon, url: "https://thehackernews.com/", type: "news", description: "Latest cybersecurity news and threat intelligence." },
    { id: "cn4", name: "Bleeping Computer", icon: NewspaperIcon, url: "https://www.bleepingcomputer.com/", type: "news", description: "Tech news, cybersecurity, and support." },
    { id: "cn5", name: "Professor Messer", icon: YoutubeIcon, url: "https://www.youtube.com/user/professormesser", type: "youtube", description: "Free CompTIA certification training videos (A+, Net+, Sec+)." },
    { id: "cn6", name: "David Bombal", icon: YoutubeIcon, url: "https://www.youtube.com/c/DavidBombal", type: "youtube", description: "Networking, ethical hacking, Python, CCNA, and more." },
    { id: "cn7", name: "InfoSec Write-ups (Medium)", icon: BookOpen, url: "https://infosecwriteups.com/", type: "blog", description: "CTF write-ups, bug bounty, and security articles."},
    { id: "cn8", name: "SANS Internet Storm Center", icon: NewspaperIcon, url: "https://isc.sans.edu/", type: "blog", description: "Daily analysis of threats and vulnerabilities."},
    { id: "cn9", name: "John Hammond", icon: YoutubeIcon, url: "https://www.youtube.com/c/JohnHammond010", type: "youtube", description: "CTF walkthroughs, programming, and cybersecurity tools."},
  ] as RoadmapCommunityNews[],
  footer: {
    socialLinks: [
      { name: "GitHub", url: "https://github.com/tekendraa7", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/tekendraa7/", icon: Linkedin },
      { name: "Twitter", url: "https://twitter.com/TekendraB", icon: Twitter },
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
