import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, Clock, Target } from "lucide-react";
import {
  FaShieldAlt, FaTerminal, FaSearch, FaCode, FaLayerGroup,
  FaSitemap, FaRoute, FaNetworkWired, FaFire, FaExclamationTriangle,
  FaLinux, FaWindows, FaCrosshairs, FaUnlock, FaCog, FaDatabase,
  FaGithub, FaYoutube, FaFilePdf, FaGraduationCap, FaFlask,
  FaDownload, FaRocket, FaUniversity, FaTrophy, FaLightbulb,
  FaPlayCircle, FaFlag,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

interface Phase {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  status: "completed" | "in-progress" | "upcoming";
}

const phases: Phase[] = [
  { id: "phase-1", number: 1, title: "Foundations", subtitle: "Weeks 1–12 • Building Core Knowledge", status: "completed" },
  { id: "phase-2", number: 2, title: "Intermediate Networking & Core Security", subtitle: "Weeks 13–24 • Deepening Technical Expertise", status: "in-progress" },
  { id: "phase-3", number: 3, title: "Operating Systems Deep Dive", subtitle: "Weeks 25–36 • Mastering Linux & Windows", status: "upcoming" },
  { id: "phase-4", number: 4, title: "Application Security & Web Technologies", subtitle: "Weeks 37–48 • Web Application Pentesting", status: "upcoming" },
  { id: "phase-5", number: 5, title: "Cryptography & Secure Protocols", subtitle: "Weeks 49–56 • Encryption Mastery", status: "upcoming" },
  { id: "phase-6", number: 6, title: "Penetration Testing & Tools", subtitle: "Weeks 57–72 • Ethical Hacking", status: "upcoming" },
];

const statusConfig = {
  completed: { icon: CheckCircle2, label: "Completed", color: "text-green-500", badgeVariant: "default" as const },
  "in-progress": { icon: Clock, label: "In Progress", color: "text-accent", badgeVariant: "secondary" as const },
  upcoming: { icon: Target, label: "Upcoming", color: "text-muted-foreground", badgeVariant: "outline" as const },
};

export default function Roadmap() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="text-center mb-12">
        <SectionTitle className="text-center">Cybersecurity Learning Roadmap</SectionTitle>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A structured, phased approach to mastering cybersecurity — from foundations to penetration testing.
        </p>
      </header>

      {/* Phase Progress Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
        {phases.map((phase) => {
          const { icon: StatusIcon, label, color } = statusConfig[phase.status];
          return (
            <a key={phase.id} href={`#${phase.id}`} className="group">
              <div className="flex flex-col items-center p-3 rounded-xl border bg-card hover:border-primary transition-all text-center gap-1">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center font-bold text-primary text-lg">
                  {phase.number}
                </div>
                <StatusIcon className={cn("h-4 w-4", color)} />
                <span className="text-xs text-muted-foreground leading-tight">{label}</span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Phase 1 */}
      <section id="phase-1" className="py-8">
        <Card className="hover:shadow-glow-primary transition-all">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">1</div>
              <div>
                <CardTitle className="text-2xl text-primary">Phase 1: Foundations</CardTitle>
                <p className="text-muted-foreground text-sm">Weeks 1–12 • Building Core Knowledge</p>
              </div>
              <Badge variant="default" className="ml-auto bg-green-600">Completed</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Core Concepts</h3>
                <div className="space-y-3">
                  {[
                    { icon: FaNetworkWired, title: "Networking Fundamentals", items: ["OSI & TCP/IP model", "IP addressing & subnetting", "DNS, DHCP, HTTP/S"] },
                    { icon: FaShieldAlt, title: "Cybersecurity Fundamentals", items: ["CIA Triad principles", "Threat types and malware", "Security controls", "Risk assessment basics"] },
                  ].map(({ icon: Icon, title, items }) => (
                    <div key={title} className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><Icon />{title}</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {items.map(i => <li key={i}>• {i}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Hands-On Skills</h3>
                <div className="space-y-3">
                  {[
                    { icon: FaTerminal, title: "System Navigation & Configuration", desc: "Master command-line operations in Windows and Linux, configure network settings, and manage user permissions." },
                    { icon: FaSearch, title: "Network Traffic Analysis", desc: "Use Wireshark to capture and analyze network traffic, identify protocols, and detect suspicious patterns." },
                    { icon: FaCode, title: "Scripting Basics", desc: "Write automation scripts in Python, Bash, and PowerShell for security tasks." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                        <Icon className="text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{title}</h4>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Phase 2 */}
      <section id="phase-2" className="py-8">
        <Card className="hover:shadow-glow-primary transition-all">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">2</div>
              <div>
                <CardTitle className="text-2xl text-primary">Phase 2: Intermediate Networking & Core Security</CardTitle>
                <p className="text-muted-foreground text-sm">Weeks 13–24 • Deepening Technical Expertise</p>
              </div>
              <Badge variant="secondary" className="ml-auto">In Progress</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Advanced Concepts</h3>
                <div className="space-y-3">
                  {[
                    { icon: FaLayerGroup, title: "OSI Model Mastery", desc: "In-depth analysis of all seven layers, protocol operations, and troubleshooting with Wireshark." },
                    { icon: FaSitemap, title: "Advanced IP Addressing", desc: "Subnetting, supernetting, CIDR notation, and efficient IP scheme design." },
                    { icon: FaRoute, title: "Routing & Switching", desc: "Dynamic routing protocols (OSPF, EIGRP), VLAN implementation, and layer 3 switching." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><Icon />{title}</h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Tools</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: FaNetworkWired, name: "GNS3 / Packet Tracer", desc: "Network simulation" },
                    { icon: FaFire, name: "pfSense", desc: "Enterprise firewall" },
                    { icon: FaExclamationTriangle, name: "Snort / Suricata", desc: "Intrusion detection" },
                  ].map(({ icon: Icon, name, desc }) => (
                    <div key={name} className="bg-background p-4 rounded-lg text-center">
                      <Icon className="text-3xl text-accent mb-3 mx-auto" />
                      <h4 className="font-semibold text-sm mb-1">{name}</h4>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Phase 3 */}
      <section id="phase-3" className="py-8">
        <Card className="hover:shadow-glow-primary transition-all opacity-80">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-muted text-muted-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">3</div>
              <div>
                <CardTitle className="text-2xl text-primary">Phase 3: Operating Systems Deep Dive</CardTitle>
                <p className="text-muted-foreground text-sm">Weeks 25–36 • Mastering Linux & Windows</p>
              </div>
              <Badge variant="outline" className="ml-auto">Upcoming</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">OS Mastery</h3>
                <div className="space-y-3">
                  {[
                    { icon: FaLinux, title: "Linux System Administration", items: ["Advanced command-line operations", "File system hierarchy and permissions", "Process and service management", "Shell scripting for automation"] },
                    { icon: FaWindows, title: "Windows System Internals", items: ["Active Directory administration", "Registry and Group Policy", "PowerShell automation", "Windows security model"] },
                  ].map(({ icon: Icon, title, items }) => (
                    <div key={title} className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><Icon />{title}</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {items.map(i => <li key={i}>• {i}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Practical Skills</h3>
                <div className="space-y-3">
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">System Hardening</h4>
                    <p className="text-sm text-muted-foreground">Implement security configurations, disable unnecessary services, and apply best practices.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Log Analysis & Monitoring</h4>
                    <p className="text-sm text-muted-foreground">Configure system logging, analyze security events, and set up basic monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Phase 4 */}
      <section id="phase-4" className="py-8">
        <Card className="hover:shadow-glow-primary transition-all opacity-70">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="bg-muted text-muted-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">4</div>
              <div>
                <CardTitle className="text-2xl text-primary">Phase 4: Application Security & Web Technologies</CardTitle>
                <p className="text-muted-foreground text-sm">Weeks 37–48 • Web Application Pentesting</p>
              </div>
              <Badge variant="outline" className="ml-auto">Upcoming</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">OWASP Top 10 Focus</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { icon: FaCode, title: "SQL Injection", desc: "Database attacks" },
                { icon: FaCrosshairs, title: "XSS", desc: "Cross-site scripting" },
                { icon: FaUnlock, title: "Broken Auth", desc: "Authentication flaws" },
                { icon: FaCog, title: "Misconfig", desc: "Security settings" },
                { icon: FaDatabase, title: "Data Exposure", desc: "Sensitive data" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-background p-4 rounded-lg text-center">
                  <Icon className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">{title}</h4>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Phases 5 & 6 simplified */}
      <div className="grid md:grid-cols-2 gap-6 py-4">
        {[
          { id: "phase-5", num: 5, title: "Cryptography & Secure Protocols", subtitle: "Weeks 49–56", items: ["Symmetric & asymmetric encryption", "TLS/SSL deep dive", "OpenSSL hands-on", "PKI & certificate management"] },
          { id: "phase-6", num: 6, title: "Penetration Testing & Tools", subtitle: "Weeks 57–72", items: ["Metasploit framework", "Burp Suite professional", "OSCP preparation", "CTF competitions"] },
        ].map(({ id, num, title, subtitle, items }) => (
          <section key={id} id={id}>
            <Card className="hover:shadow-glow-primary transition-all opacity-60 h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-muted text-muted-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">{num}</div>
                  <div>
                    <CardTitle className="text-lg text-primary">{title}</CardTitle>
                    <p className="text-muted-foreground text-xs">{subtitle}</p>
                  </div>
                  <Badge variant="outline" className="ml-auto text-xs">Upcoming</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      {/* Free Resources */}
      <section id="free-resources" className="py-8">
        <SectionTitle>Free Learning Resources</SectionTitle>
        <div className="space-y-8">
          {[
            {
              phase: "Phase 1 – Foundations",
              resources: [
                { icon: FaYoutube, label: "Professor Messer – CompTIA Network+", desc: "Free on YouTube", url: "https://www.youtube.com/user/professormesser" },
                { icon: FaGraduationCap, label: "Cisco Networking Academy", desc: "Intro to Networks", url: "https://www.netacad.com/" },
                { icon: FaFilePdf, label: "CompTIA Security+ Study Guide PDF", desc: "Official study guide", url: "https://www.comptia.org/certifications/security" },
              ]
            },
            {
              phase: "Phase 2 – Networking & Security",
              resources: [
                { icon: FaYoutube, label: "NetworkChuck – OSI Model Deep Dive", desc: "YouTube", url: "https://youtu.be/OSo1XpahxyU" },
                { icon: FaGithub, label: "TryHackMe", desc: "Hands-on labs", url: "https://tryhackme.com" },
              ]
            },
            {
              phase: "Phase 3 – Operating Systems",
              resources: [
                { icon: FaFilePdf, label: '"Kali Linux Revealed" PDF', desc: "Official 300-page guide", url: "https://kali.training/downloads/Kali-Linux-Revealed.pdf" },
                { icon: FaPlayCircle, label: 'TCM "Linux for Hackers"', desc: "Free course", url: "https://www.tcm-sec.com/p/linux-for-hackers" },
                { icon: FaFlag, label: "OverTheWire Bandit", desc: "34-level Linux CTF", url: "https://overthewire.org/wargames/bandit/" },
              ]
            },
            {
              phase: "Phase 4 – Web Application Security",
              resources: [
                { icon: FaGithub, label: "DVWA (Damn Vulnerable Web App)", desc: "Docker or direct download", url: "https://github.com/digininja/DVWA" },
                { icon: FaGraduationCap, label: "PortSwigger Web Security Academy", desc: "Free labs & theory", url: "https://portswigger.net/web-security" },
                { icon: FaFlask, label: "OWASP Juice Shop", desc: "Modern vulnerable Node app", url: "https://pwning.owasp-juice.shop" },
                { icon: FaDownload, label: "Burp Suite Community", desc: "Free download", url: "https://portswigger.net/burp/communitydownload" },
              ]
            },
            {
              phase: "Phase 6 – Penetration Testing",
              resources: [
                { icon: FaYoutube, label: 'TCM "Practical Ethical Hacking"', desc: "YouTube mirror", url: "https://youtube.com/playlist?list=PLBfufR7vyJJ7k1H4QnlSRAdT-JZc-8a1s" },
                { icon: FaRocket, label: "Metasploit Unleashed", desc: "Free complete course", url: "https://www.offensive-security.com/metasploit-unleashed/" },
              ]
            },
            {
              phase: "Always-Open Libraries",
              resources: [
                { icon: FaUniversity, label: "OpenSecurityTraining Archive", desc: "Whole university curriculum", url: "https://opensecuritytraining.info" },
                { icon: FaGithub, label: "Awesome-Pentest GitHub List", desc: "Curated tools & blogs", url: "https://github.com/enaqx/awesome-pentest" },
                { icon: FaTrophy, label: "CTFtime.org", desc: "Global CTF calendar", url: "https://ctftime.org" },
              ]
            },
          ].map(({ phase, resources }) => (
            <div key={phase}>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-4">{phase}</h3>
              <div className="grid gap-3">
                {resources.map(({ icon: Icon, label, desc, url }) => (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10 border hover:border-accent">
                    <Icon className="text-accent text-xl mr-4 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-4 rounded mt-8">
          <p className="text-sm text-foreground flex items-start gap-2">
            <FaLightbulb className="text-accent mt-0.5 shrink-0" />
            <span><strong>Pro-tip:</strong> Right-click → "Bookmark All Tabs" after you open a batch of links; revisit each resource only when you reach the matching roadmap week so you don't drown in tabs!</span>
          </p>
        </div>
      </section>

      {/* Community footer */}
      <section className="py-8 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#phase-1" className="hover:text-accent transition-colors">Phase 1 Foundations</a></li>
              <li><a href="#free-resources" className="hover:text-accent transition-colors">Free Resources</a></li>
              <li><a href="https://github.com/enaqx/awesome-pentest" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">Awesome-Pentest <ExternalLink className="h-3 w-3" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-primary">Keep Learning</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://ctftime.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">CTFtime – global CTF calendar <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://opensecuritytraining.info" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">OpenSecurityTraining <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">Cybrary Foundations <ExternalLink className="h-3 w-3" /></a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-primary">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                { label: "r/netsec", url: "https://www.reddit.com/r/netsec/" },
                { label: "r/cybersecurity", url: "https://www.reddit.com/r/cybersecurity/" },
                { label: "TryHackMe", url: "https://tryhackme.com" },
                { label: "Hack The Box", url: "https://hackthebox.com" },
              ].map(({ label, url }) => (
                <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">{label} <ExternalLink className="h-3 w-3" /></a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
