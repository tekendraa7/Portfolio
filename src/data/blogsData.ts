
import type { LucideIcon } from "lucide-react";
import { Rss, BookOpen, ShieldAlert, Landmark, Users, Globe, ExternalLink, Newspaper, MessageSquare } from "lucide-react";
import imageData from '@/lib/placeholder-images.json';

export interface BlogResource {
  id: string;
  title: string;
  description: string;
  url: string;
  logoUrl?: string; // Placeholder for actual logo
  imageHint?: string; // For data-ai-hint
  category?: string; // e.g., "Blog", "News"
  icon?: LucideIcon; // Fallback if no logo
}

export interface OwaspItem {
  id: string;
  code: string;
  title: string;
  explanation: string;
  tags: string[];
  icon?: LucideIcon;
}

export interface CommunityFeed {
  id: string;
  name: string;
  url: string;
  icon?: LucideIcon;
}

export interface DiscordServer {
  id: string;
  name: string;
  url: string;
  description?: string;
  icon: LucideIcon;
  category: string;
}

export const cybersecurityBlogs: BlogResource[] = [
  {
    id: "cb1",
    title: "KrebsOnSecurity",
    description: "In-depth security news and investigation by Brian Krebs.",
    url: "https://krebsonsecurity.com/",
    logoUrl: imageData.cybersecurityBlogs.krebsonsecurity.url,
    imageHint: imageData.cybersecurityBlogs.krebsonsecurity.hint,
    category: "Investigative Journalism",
    icon: Newspaper,
  },
  {
    id: "cb2",
    title: "The Hacker News",
    description: "Trusted source for cybersecurity news, vulnerabilities, and events.",
    url: "https://thehackernews.com/",
    logoUrl: imageData.cybersecurityBlogs.thehackernews.url,
    imageHint: imageData.cybersecurityBlogs.thehackernews.hint,
    category: "News",
    icon: Newspaper,
  },
  {
    id: "cb3",
    title: "BleepingComputer",
    description: "Tech news, security threat updates, and support forums.",
    url: "https://www.bleepingcomputer.com/",
    logoUrl: imageData.cybersecurityBlogs.bleepingcomputer.url,
    imageHint: imageData.cybersecurityBlogs.bleepingcomputer.hint,
    category: "News & Support",
    icon: Newspaper,
  },
  {
    id: "cb4",
    title: "Exploit Database",
    description: "Archive of publicly available exploits and vulnerable software.",
    url: "https://www.exploit-db.com/",
    logoUrl: imageData.cybersecurityBlogs.exploitdb.url,
    imageHint: imageData.cybersecurityBlogs.exploitdb.hint,
    category: "Vulnerability Research",
    icon: ShieldAlert,
  },
  {
    id: "cb5",
    title: "Dark Reading",
    description: "News and commentary on IT security, helping professionals manage risk.",
    url: "https://www.darkreading.com/",
    logoUrl: imageData.cybersecurityBlogs.darkreading.url,
    imageHint: imageData.cybersecurityBlogs.darkreading.hint,
    category: "News & Analysis",
    icon: Newspaper,
  },
  {
    id: "cb6",
    title: "CISA",
    description: "Cybersecurity & Infrastructure Security Agency - US official alerts and guidance.",
    url: "https://www.cisa.gov/",
    logoUrl: imageData.cybersecurityBlogs.cisa.url,
    imageHint: imageData.cybersecurityBlogs.cisa.hint,
    category: "Government Agency",
    icon: Landmark,
  },
  {
    id: "cb7",
    title: "Daniel Miessler Blog",
    description: "Essays on security, technology, and society by Daniel Miessler.",
    url: "https://danielmiessler.com/blog/",
    logoUrl: imageData.cybersecurityBlogs.danielmiessler.url,
    imageHint: imageData.cybersecurityBlogs.danielmiessler.hint,
    category: "Expert Blog",
    icon: BookOpen,
  },
  {
    id: "cb8",
    title: "Null Byte",
    description: "Hands-on hacking tutorials, guides, and news for ethical hackers.",
    url: "https://null-byte.wonderhowto.com/",
    logoUrl: imageData.cybersecurityBlogs.nullbyte.url,
    imageHint: imageData.cybersecurityBlogs.nullbyte.hint,
    category: "Tutorials & How-Tos",
    icon: BookOpen,
  },
];

export const owaspTop10: OwaspItem[] = [
  { id: "ow1", code: "A01:2021", title: "Broken Access Control", explanation: "Restrictions on what authenticated users are allowed to do are often not properly enforced.", tags: ["Web", "API", "Critical"], icon: ShieldAlert },
  { id: "ow2", code: "A02:2021", title: "Cryptographic Failures", explanation: "Failures related to cryptography (or lack thereof) which can lead to sensitive data exposure.", tags: ["Data", "Critical"], icon: ShieldAlert },
  { id: "ow3", code: "A03:2021", title: "Injection", explanation: "Untrusted data is sent to an interpreter as part of a command or query, leading to unintended commands or data access.", tags: ["Web", "API", "Critical"], icon: ShieldAlert },
  { id: "ow4", code: "A04:2021", title: "Insecure Design", explanation: "Flaws in design and architecture, missing or ineffective control design.", tags: ["Architecture", "Important"], icon: ShieldAlert },
  { id: "ow5", code: "A05:2021", title: "Security Misconfiguration", explanation: "Missing appropriate security hardening across any part of the application stack.", tags: ["Config", "Web", "API"], icon: ShieldAlert },
  { id: "ow6", code: "A06:2021", title: "Vulnerable and Outdated Components", explanation: "Using components with known vulnerabilities that undermine application defenses.", tags: ["Software", "Dependencies"], icon: ShieldAlert },
  { id: "ow7", code: "A07:2021", title: "Identification and Authentication Failures", explanation: "Incorrectly implemented functions related to user identity, authentication, or session management.", tags: ["Auth", "Critical"], icon: ShieldAlert },
  { id: "ow8", code: "A08:2021", title: "Software and Data Integrity Failures", explanation: "Failures relating to software updates, critical data, and CI/CD pipelines without verifying integrity.", tags: ["DevOps", "Data"], icon: ShieldAlert },
  { id: "ow9", code: "A09:2021", title: "Security Logging and Monitoring Failures", explanation: "Insufficient logging, monitoring, or incident response.", tags: ["Operations", "Detection"], icon: ShieldAlert },
  { id: "ow10", code: "A10:2021", title: "Server-Side Request Forgery (SSRF)", explanation: "Web applications fetching a remote resource without validating the user-supplied URL.", tags: ["Web", "API", "Critical"], icon: ShieldAlert },
];
export const owaspGeneralLink = "https://owasp.org/Top10/";


export const researchHubs: BlogResource[] = [
  {
    id: "rh1",
    title: "MITRE ATT&CK®",
    description: "A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.",
    url: "https://attack.mitre.org/",
    logoUrl: imageData.researchHubs.mitre.url,
    imageHint: imageData.researchHubs.mitre.hint,
    category: "Framework",
    icon: Globe,
  },
  {
    id: "rh2",
    title: "NIST Cybersecurity Framework",
    description: "Voluntary guidance, based on existing standards, guidelines, and practices for organizations to better manage and reduce cybersecurity risk.",
    url: "https://www.nist.gov/cyberframework",
    logoUrl: imageData.researchHubs.nist.url,
    imageHint: imageData.researchHubs.nist.hint,
    category: "Framework",
    icon: Landmark,
  },
  {
    id: "rh3",
    title: "CIS Benchmarks",
    description: "Consensus-based configuration guidelines for various technology groups to safeguard systems against today's evolving cyber threats.",
    url: "https://www.cisecurity.org/cis-benchmarks/",
    logoUrl: imageData.researchHubs.cis.url,
    imageHint: imageData.researchHubs.cis.hint,
    category: "Standards",
    icon: ShieldAlert,
  },
  {
    id: "rh4",
    title: "OWASP Cheat Sheet Series",
    description: "A collection of concise cheat sheets on specific application security topics.",
    url: "https://cheatsheetseries.owasp.org/",
    logoUrl: imageData.researchHubs.owaspcheatsheet.url,
    imageHint: imageData.researchHubs.owaspcheatsheet.hint,
    category: "Guidance",
    icon: BookOpen,
  },
];

export const communityFeeds: CommunityFeed[] = [
  { id: "cf1", name: "r/netsec", url: "https://www.reddit.com/r/netsec/", icon: Rss },
  { id: "cf2", name: "r/cybersecurity", url: "https://www.reddit.com/r/cybersecurity/", icon: Rss },
  { id: "cf3", name: "r/netsecstudents", url: "https://www.reddit.com/r/netsecstudents/", icon: Rss },
];

export const discordServers: DiscordServer[] = [
  {
    id: "ds1",
    name: "TryHackMe Official Discord",
    url: "https://discord.gg/tryhackme",
    description: "The official Discord server for TryHackMe users.",
    icon: MessageSquare,
    category: "Platform Community",
  },
  {
    id: "ds2",
    name: "Hack The Box Discord",
    url: "https://discord.gg/hackthebox",
    description: "Connect with the Hack The Box community.",
    icon: MessageSquare,
    category: "Platform Community",
  },
  {
    id: "ds3",
    name: "The Cyber Mentor Community",
    url: "https://discord.gg/thecybermentor",
    description: "Heath Adams' (The Cyber Mentor) community server.",
    icon: MessageSquare,
    category: "Influencer Community",
  },
  {
    id: "ds4",
    name: "InfoSec Prep",
    url: "https://discord.gg/infosec",
    description: "A general server for InfoSec discussions and preparation.",
    icon: MessageSquare,
    category: "General InfoSec",
  },
  {
    id: "ds5",
    name: "John Hammond's Discord",
    url: "https://discord.gg/johnhammond",
    description: "Community server for John Hammond's followers.",
    icon: MessageSquare,
    category: "Influencer Community",
  },
  {
    id: "ds6",
    name: "TCM Security Discord",
    url: "https://discord.gg/tcmsecurity",
    description: "Official Discord for TCM Security and its courses.",
    icon: MessageSquare,
    category: "Training Provider",
  },
  {
    id: "ds7",
    name: "Blue Team Village",
    url: "https://discord.gg/blueteamvillage",
    description: "A community focused on blue team skills and defense.",
    icon: MessageSquare,
    category: "Blue Team",
  },
  // { // Uncomment and add URL if known
  //   id: "ds8",
  //   name: "Nepali Ethical Hackers",
  //   url: "#", // Replace with actual link
  //   description: "A community for ethical hackers in Nepal.",
  //   icon: MessageSquare,
  //   category: "Local Community",
  // },
];
