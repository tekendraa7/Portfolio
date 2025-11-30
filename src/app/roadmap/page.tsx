
"use client";
import { useEffect } from "react";
import {
  FaClock,
  FaDollarSign,
  FaGraduationCap,
  FaCompass,
  FaDesktop,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaTerminal,
  FaSearch,
  FaCode,
  FaLayerGroup,
  FaSitemap,
  FaRoute,
  FaFire,
  FaExclamationTriangle,
  FaLinux,
  FaWindows,
  FaCrosshairs,
  FaUnlock,
  FaCog,
  FaDatabase,
  FaEye,
  FaBug,
  FaFlask,
  FaKey,
  FaSignature,
  FaCertificate,
  FaLock,
  FaRocket,
  FaMap,
  FaFileAlt,
  FaRobot,
  FaCloud,
  FaTools,
  FaGithub,
  FaBlog,
  FaLink,
  FaPlayCircle,
  FaFilePdf,
  FaYoutube,
  FaCalculator,
  FaFlag,
  FaDownload,
  FaUniversity,
  FaTrophy,
  FaLightbulb,
  FaArrowUp,
} from "react-icons/fa";
import Image from "next/image";

export default function RoadmapPage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const smoothScroll = (e: MouseEvent) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", smoothScroll as EventListener));

    // Highlight active section in TOC
    const sections = document.querySelectorAll("section[id]");
    const tocLinks = document.querySelectorAll("nav a[href^='#']");

    const highlightActiveSection = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });

      tocLinks.forEach((link) => {
        link.classList.remove("font-semibold", "text-accent");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("font-semibold", "text-accent");
        }
      });
    };

    window.addEventListener("scroll", highlightActiveSection);
    highlightActiveSection(); // Initial call

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", smoothScroll as EventListener));
      window.removeEventListener("scroll", highlightActiveSection);
    };
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* Fixed Table of Contents */}
       <nav className="hidden lg:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-background/95 backdrop-blur-sm border-r border-border z-40 overflow-y-auto p-6">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Table of Contents</h3>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#executive-summary" className="hover:text-accent transition-colors">Executive Summary</a>
          </li>
          <li>
            <a href="#phase-1" className="hover:text-accent transition-colors">Phase 1: Foundational IT &amp; Cybersecurity</a>
          </li>
          <li>
            <a href="#phase-2" className="hover:text-accent transition-colors">Phase 2: Intermediate Networking &amp; Security</a>
          </li>
          <li>
            <a href="#phase-3" className="hover:text-accent transition-colors">Phase 3: Operating Systems Deep Dive</a>
          </li>
          <li>
            <a href="#phase-4" className="hover:text-accent transition-colors">Phase 4: Application Security &amp; Web Tech</a>
          </li>
          <li>
            <a href="#phase-5" className="hover:text-accent transition-colors">Phase 5: Cryptography &amp; Security Protocols</a>
          </li>
          <li>
            <a href="#phase-6" className="hover:text-accent transition-colors">Phase 6: Penetration Testing Methodologies</a>
          </li>
          <li>
            <a href="#phase-7" className="hover:text-accent transition-colors">Phase 7: Project-Based Learning &amp; Portfolio</a>
          </li>
           <li>
            <a href="#free-resources" className="hover:text-accent transition-colors">Free Resource Starter-Pack</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white bg-gradient-to-br from-primary/20 via-background to-secondary/20">
            <div className="absolute inset-0">
                <Image
                src="https://picsum.photos/seed/cyber-landscape/1920/1080"
                alt="Cybersecurity digital landscape"
                fill
                className="object-cover opacity-20"
                unoptimized
                data-ai-hint="digital security"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
                <div className="lg:col-span-7">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-primary">
                    <span className="text-accent">Mastering</span> Cybersecurity
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed">
                    A comprehensive 104-week roadmap for aspiring penetration
                    testers and security engineers.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                    <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                        <FaClock /> 5-6 hours/week
                    </span>
                    <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                        <FaDollarSign /> Free/Low-cost
                    </span>
                    <span className="bg-accent/20 text-accent-foreground px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                        <FaGraduationCap /> Beginner to Advanced
                    </span>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div id="executive-summary" className="bg-background/50 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-border">
                    <h2 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                        <FaCompass className="text-accent" />
                        Executive Summary
                    </h2>
                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                        This comprehensive cybersecurity roadmap provides a
                        structured, <strong>104-week learning path</strong> for
                        computer engineering students aspiring to careers in
                        penetration testing and security engineering.
                        </p>
                         <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-background/20 rounded-lg p-3">
                            <h4 className="font-semibold text-accent mb-2">Target Audience</h4>
                            <p className="text-xs">Computer engineering students with basic networking knowledge</p>
                            </div>
                            <div className="bg-background/20 rounded-lg p-3">
                            <h4 className="font-semibold text-accent mb-2">Time Commitment</h4>
                            <p className="text-xs">5-6 hours per week over 2 years</p>
                            </div>
                            <div className="bg-background/20 rounded-lg p-3">
                            <h4 className="font-semibold text-accent mb-2">Cost Focus</h4>
                            <p className="text-xs">Free and low-cost resources only</p>
                            </div>
                            <div className="bg-background/20 rounded-lg p-3">
                            <h4 className="font-semibold text-accent mb-2">Career Goals</h4>
                            <p className="text-xs">Penetration testing and security engineering</p>
                            </div>
                        </div>
                        <p className="mt-4">
                        The roadmap progresses through{" "}
                        <strong>seven distinct phases</strong>, each building upon
                        the previous, from foundational IT concepts to advanced
                        penetration testing methodologies and portfolio
                        development.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6">
        {/* Phase 1 */}
        <section id="phase-1" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-glow-primary">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">1</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 1: Foundational IT & Cybersecurity Knowledge</h2>
                    <p className="text-muted-foreground">Weeks 1-12 • Building the Cornerstone</p>
                </div>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div id="phase-1-concepts" className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Concepts to Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaDesktop />Core IT Fundamentals</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Computer system components</li>
                        <li>• Hardware architecture</li>
                        <li>• Virtualization basics</li>
                        <li>• System performance factors</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaServer />Operating Systems</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Linux CLI mastery</li>
                        <li>• Windows administration</li>
                        <li>• PowerShell fundamentals</li>
                        <li>• File system navigation</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaNetworkWired />Network Fundamentals</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• OSI &amp; TCP/IP models</li>
                        <li>• Common protocols (HTTP, DNS)</li>
                        <li>• Network security concepts</li>
                        <li>• Firewall &amp; IDS basics</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaShieldAlt />Cybersecurity Fundamentals</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• CIA Triad principles</li>
                        <li>• Threat types and malware</li>
                        <li>• Security controls</li>
                        <li>• Risk assessment basics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="phase-1-hands-on" className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Hands-On Skills Development</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                        <FaTerminal className="text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">System Navigation &amp; Configuration</h4>
                        <p className="text-sm text-muted-foreground">Master command-line operations in Windows and Linux environments, configure network settings, and manage user permissions.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                       <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                        <FaSearch className="text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Network Traffic Analysis</h4>
                        <p className="text-sm text-muted-foreground">Use Wireshark to capture and analyze network traffic, identify protocols, and detect suspicious patterns.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                       <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                        <FaCode className="text-sm" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Scripting Basics</h4>
                        <p className="text-sm text-muted-foreground">Write simple automation scripts in Python, Bash, and PowerShell for security tasks and system administration.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="phase-1-tools">
                <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Essential Tools</h3>
                <div className="space-y-3">
                  <div className="bg-background p-4 rounded-lg border-l-4 border-accent">
                    <h4 className="font-semibold text-accent mb-2">Wireshark</h4>
                    <p className="text-sm text-muted-foreground">Network protocol analyzer for traffic inspection</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border-l-4 border-accent">
                    <h4 className="font-semibold text-accent mb-2">Nmap</h4>
                    <p className="text-sm text-muted-foreground">Network discovery and security auditing</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border-l-4 border-accent">
                    <h4 className="font-semibold text-accent mb-2">OpenVAS</h4>
                    <p className="text-sm text-muted-foreground">Vulnerability scanner for security assessments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2 */}
        <section id="phase-2" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-glow-primary">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">2</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 2: Intermediate Networking & Core Security Concepts</h2>
                    <p className="text-muted-foreground">Weeks 13-24 • Deepening Technical Expertise</p>
                </div>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div id="phase-2-concepts">
                <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Advanced Concepts</h3>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaLayerGroup />OSI Model Mastery</h4>
                    <p className="text-sm text-muted-foreground">In-depth analysis of all seven layers, protocol operations, and troubleshooting frameworks using Wireshark for packet-level inspection.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaSitemap />Advanced IP Addressing</h4>
                    <p className="text-sm text-muted-foreground">Subnetting, supernetting, CIDR notation, and efficient IP scheme design for complex network topologies.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaRoute />Routing &amp; Switching</h4>
                    <p className="text-sm text-muted-foreground">Dynamic routing protocols (OSPF, EIGRP), VLAN implementation, and layer 3 switching concepts.</p>
                  </div>
                </div>
              </div>

              <div id="phase-2-hands-on">
                <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Practical Implementation</h3>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Network Simulation</h4>
                    <p className="text-sm text-muted-foreground">Use GNS3 or Packet Tracer to design and implement complex network topologies with multiple subnets and routing protocols.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Firewall Configuration</h4>
                    <p className="text-sm text-muted-foreground">Master pfSense platform for creating and managing firewall rules, NAT configuration, and VPN setup.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Intrusion Detection</h4>
                    <p className="text-sm text-muted-foreground">Configure Snort/Suricata IDS, create custom detection rules, and analyze network traffic for malicious patterns.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="phase-2-tools" className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Security Infrastructure Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaNetworkWired className="text-3xl text-accent mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">GNS3 / Packet Tracer</h4>
                  <p className="text-xs text-muted-foreground">Network simulation and design</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaFire className="text-3xl text-accent mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">pfSense</h4>
                  <p className="text-xs text-muted-foreground">Enterprise firewall platform</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaExclamationTriangle className="text-3xl text-accent mb-3 mx-auto" />
                  <h4 className="font-semibold mb-2">Snort / Suricata</h4>
                  <p className="text-xs text-muted-foreground">Network intrusion detection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3 */}
        <section id="phase-3" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-glow-primary">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">3</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 3: Operating Systems Deep Dive</h2>
                    <p className="text-muted-foreground">Weeks 25-36 • Mastering Linux & Windows</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div id="phase-3-concepts">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">OS Mastery</h3>
                  <div className="space-y-3">
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaLinux />Linux System Administration</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Advanced command-line operations</li>
                        <li>• File system hierarchy and permissions</li>
                        <li>• Process and service management</li>
                        <li>• Shell scripting for automation</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaWindows />Windows System Internals</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Active Directory administration</li>
                        <li>• Registry and Group Policy</li>
                        <li>• PowerShell automation</li>
                        <li>• Windows security model</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div id="phase-3-hands-on">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Practical Skills</h3>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2">System Hardening</h4>
                      <p className="text-sm text-muted-foreground">Implement security configurations, disable unnecessary services, and apply best practices for system security.</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2">Log Analysis &amp; Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Configure system logging, analyze security events, and set up basic monitoring systems.</p>
                    </div>
                  </div>
                </div>

                <div id="phase-3-tools">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Essential OS Tools</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg text-center">
                      <FaLinux className="text-3xl text-accent mb-2 mx-auto" />
                      <h4 className="font-semibold text-sm">Kali Linux</h4>
                      <p className="text-xs text-muted-foreground">Security-focused distribution</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg text-center">
                      <FaWindows className="text-3xl text-accent mb-2 mx-auto" />
                      <h4 className="font-semibold text-sm">PowerShell</h4>
                      <p className="text-xs text-muted-foreground">Windows automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 4 */}
        <section id="phase-4" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-glow-primary">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">4</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 4: Application Security & Web Technologies</h2>
                    <p className="text-muted-foreground">Weeks 37-48 • Web Application Pentesting</p>
                </div>
            </div>
             <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">OWASP Top 10 Focus</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaCode className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">SQL Injection</h4>
                  <p className="text-xs text-muted-foreground">Database attacks</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaCrosshairs className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">XSS</h4>
                  <p className="text-xs text-muted-foreground">Cross-site scripting</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaUnlock className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">Broken Auth</h4>
                  <p className="text-xs text-muted-foreground">Authentication flaws</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaCog className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">Misconfig</h4>
                  <p className="text-xs text-muted-foreground">Security settings</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaDatabase className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">Data Exposure</h4>
                  <p className="text-xs text-muted-foreground">Sensitive data</p>
                </div>
              </div>
            </div>

            <div id="phase-4-tools" className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Web Security Toolkit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-background p-4 rounded-lg">
                  <FaEye className="text-2xl text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Burp Suite</h4>
                  <p className="text-xs text-muted-foreground">Web proxy &amp; scanner</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <FaBug className="text-2xl text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">OWASP ZAP</h4>
                  <p className="text-xs text-muted-foreground">Free web app scanner</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <FaDatabase className="text-2xl text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">SQLMap</h4>
                  <p className="text-xs text-muted-foreground">SQL injection tool</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <FaFlask className="text-2xl text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">WebGoat</h4>
                  <p className="text-xs text-muted-foreground">Vulnerable web app</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Phase 5 */}
        <section id="phase-5" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-glow-primary">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">5</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 5: Cryptography & Security Protocols</h2>
                    <p className="text-muted-foreground">Weeks 49-60 • Encryption & Secure Communications</p>
                </div>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div id="phase-5-concepts" className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Cryptographic Fundamentals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaKey />Encryption Types</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Symmetric (AES, DES)</li>
                        <li>• Asymmetric (RSA, ECC)</li>
                        <li>• Hybrid encryption systems</li>
                        <li>• Key management principles</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaSignature />Hashing &amp; Signatures</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• SHA family algorithms</li>
                        <li>• Digital signature creation</li>
                        <li>• Message authentication</li>
                        <li>• Integrity verification</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaCertificate />PKI &amp; Certificates</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Certificate authorities</li>
                        <li>• X.509 certificate format</li>
                        <li>• Certificate revocation</li>
                        <li>• Chain of trust</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2 flex items-center gap-2"><FaLock />Security Protocols</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• TLS/SSL for web security</li>
                        <li>• SSH for remote access</li>
                        <li>• IPSec for VPNs</li>
                        <li>• VPN technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div id="phase-5-hands-on">
                  <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Practical Cryptography</h3>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2">OpenSSL Operations</h4>
                      <p className="text-sm text-muted-foreground">Encrypt/decrypt files, generate keys, create certificates, and analyze cryptographic operations.</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2">TLS Analysis</h4>
                      <p className="text-sm text-muted-foreground">Use Wireshark to capture and analyze TLS handshakes, certificate exchanges, and encrypted traffic.</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2">VPN Configuration</h4>
                      <p className="text-sm text-muted-foreground">Set up OpenVPN servers, configure client connections, and troubleshoot VPN tunnels.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 6 */}
        <section id="phase-6" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-glow-primary">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">6</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 6: Penetration Testing Methodologies & Tools</h2>
                    <p className="text-muted-foreground">Weeks 61-72 • Professional Pentesting Skills</p>
                </div>
            </div>
             <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Penetration Testing Lifecycle</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaSearch className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">Recon</h4>
                  <p className="text-xs text-muted-foreground">Information gathering</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaCrosshairs className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">Scanning</h4>
                  <p className="text-xs text-muted-foreground">Network discovery</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaBug className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">Exploitation</h4>
                  <p className="text-xs text-muted-foreground">Vulnerability use</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaArrowUp className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">Post-Exploit</h4>
                  <p className="text-xs text-muted-foreground">Privilege escalation</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <FaFileAlt className="text-2xl text-accent mb-2 mx-auto" />
                  <h4 className="font-semibold text-sm">Reporting</h4>
                  <p className="text-xs text-muted-foreground">Documentation</p>
                </div>
              </div>
            </div>

            <div id="phase-6-tools" className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Professional Pentesting Toolkit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-background p-4 rounded-lg">
                  <FaRocket className="text-2xl text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Metasploit</h4>
                  <p className="text-xs text-muted-foreground">Exploitation framework</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <FaKey className="text-2xl text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Mimikatz</h4>
                  <p className="text-xs text-muted-foreground">Credential harvesting</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <FaMap className="text-2xl text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">BloodHound</h4>
                  <p className="text-xs text-muted-foreground">AD relationship mapping</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <FaTerminal className="text-2xl text-accent mb-2" />
                  <h4 className="font-semibold text-sm mb-1">Cobalt Strike</h4>
                  <p className="text-xs text-muted-foreground">Red team operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Phase 7 */}
        <section id="phase-7" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-glow-primary">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">7</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 7: Project-Based Learning & Portfolio Development</h2>
                    <p className="text-muted-foreground">Weeks 73-104 • Capstone Projects & Professional Readiness</p>
                </div>
            </div>
             <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Capstone Project Ideas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-semibold text-accent mb-3 flex items-center gap-2"><FaServer />Multi-Service Security Assessment</h4>
                  <p className="text-sm text-muted-foreground mb-3">Conduct comprehensive security testing of a complex application with web, API, and database components.</p>
                  <div className="text-xs text-muted-foreground">
                    <span className="bg-accent/20 px-2 py-1 rounded">8-12 weeks</span>
                    <span className="ml-2">Skills: Integration, reporting, advanced testing</span>
                  </div>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-semibold text-accent mb-3 flex items-center gap-2"><FaRobot />Automated Vulnerability Pipeline</h4>
                  <p className="text-sm text-muted-foreground mb-3">Build a CI/CD integrated vulnerability management system with automated scanning and reporting.</p>
                  <div className="text-xs text-muted-foreground">
                    <span className="bg-accent/20 px-2 py-1 rounded">10-14 weeks</span>
                    <span className="ml-2">Skills: Automation, DevSecOps, scripting</span>
                  </div>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-semibold text-accent mb-3 flex items-center gap-2"><FaCloud />Cloud Security Assessment</h4>
                  <p className="text-sm text-muted-foreground mb-3">Evaluate AWS/Azure/GCP environment security, identify misconfigurations, and recommend improvements.</p>
                  <div className="text-xs text-muted-foreground">
                    <span className="bg-accent/20 px-2 py-1 rounded">6-8 weeks</span>
                    <span className="ml-2">Skills: Cloud security, automation, reporting</span>
                  </div>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h4 className="font-semibold text-accent mb-3 flex items-center gap-2"><FaTools />Custom Security Tool Development</h4>
                  <p className="text-sm text-muted-foreground mb-3">Create a specialized security tool or extension for existing frameworks to solve specific testing challenges.</p>
                  <div className="text-xs text-muted-foreground">
                    <span className="bg-accent/20 px-2 py-1 rounded">8-10 weeks</span>
                    <span className="ml-2">Skills: Programming, security concepts, UX</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="phase-7-tools" className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">Professional Portfolio Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <FaGithub className="text-3xl text-accent mb-3" />
                  <h4 className="font-semibold mb-2">GitHub Portfolio</h4>
                  <p className="text-sm text-muted-foreground">Create public repositories for all projects, include detailed documentation, and showcase code quality.</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <FaBlog className="text-3xl text-accent mb-3" />
                  <h4 className="font-semibold mb-2">Technical Blog</h4>
                  <p className="text-sm text-muted-foreground">Write about your learning journey, project challenges, and cybersecurity insights to demonstrate expertise.</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <FaCertificate className="text-3xl text-accent mb-3" />
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <p className="text-sm text-muted-foreground">Document completed courses, earned badges, and prepare for industry certifications like OSCP.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Resources Section */}
        <section id="free-resources" className="py-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center gap-3">
              <FaLink className="text-accent" />
              Free Resource Starter-Pack
            </h2>
             {/* PHASE 1 */}
            <div className="mb-10">
            <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Phase 1 – Foundations</h3>
            <div className="grid gap-4">
                <a href="https://www.cybrary.it/career-path/foundations" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaPlayCircle className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">Cybrary Foundations (videos + labs)</p>
                    <p className="text-xs text-muted-foreground">Full 12-week intro course</p>
                </div>
                </a>
                <a href="https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaCertificate className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">Cisco NetAcad – Intro to Cybersecurity</p>
                    <p className="text-xs text-muted-foreground">Free certificate</p>
                </div>
                </a>
                <a href="https://wcu.edu.az/uploads/files/Cyber%20Security%20Essentials%20(%20PDFDrive%20).pdf" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaFilePdf className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">“Cyber Security Essentials” PDF</p>
                    <p className="text-xs text-muted-foreground">Offline textbook</p>
                </div>
                </a>
                <a href="https://www.youtube.com/c/professormesser" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaYoutube className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">Professor Messer SY0-601 Playlist</p>
                    <p className="text-xs text-muted-foreground">YouTube</p>
                </div>
                </a>
            </div>
            </div>

            {/* PHASE 2 */}
            <div className="mb-10">
            <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Phase 2 – Networking & Core Security</h3>
            <div className="grid gap-4">
                <a href="https://www.gns3.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaNetworkWired className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">GNS3 Network Simulator</p>
                    <p className="text-xs text-muted-foreground">Virtual Cisco labs</p>
                </div>
                </a>
                <a href="https://www.pfsense.org/download" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaFire className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">pfSense Firewall VM</p>
                    <p className="text-xs text-muted-foreground">Enterprise-grade, free</p>
                </div>
                </a>
                <a href="https://www.subnettingquestions.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaCalculator className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">Subnetting Practice</p>
                    <p className="text-xs text-muted-foreground">Drills & calculator</p>
                </div>
                </a>
                <a href="https://youtu.be/OSo1XpahxyU" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaYoutube className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">NetworkChuck – OSI Model Deep Dive</p>
                    <p className="text-xs text-muted-foreground">YouTube</p>
                </div>
                </a>
            </div>
            </div>

            {/* PHASE 3 */}
            <div className="mb-10">
            <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Phase 3 – Operating Systems Deep Dive</h3>
            <div className="grid gap-4">
                <a href="https://kali.training/downloads/Kali-Linux-Revealed.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaFilePdf className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">“Kali Linux Revealed” PDF</p>
                    <p className="text-xs text-muted-foreground">Official 300-page guide</p>
                </div>
                </a>
                <a href="https://www.tcm-sec.com/p/linux-for-hackers" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaPlayCircle className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">TCM “Linux for Hackers”</p>
                    <p className="text-xs text-muted-foreground">Free course</p>
                </div>
                </a>
                <a href="https://overthewire.org/wargames/bandit/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaFlag className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">OverTheWire Bandit</p>
                    <p className="text-xs text-muted-foreground">34-level Linux CTF</p>
                </div>
                </a>
            </div>
            </div>

            {/* PHASE 4 */}
            <div className="mb-10">
            <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Phase 4 – Web Application Security</h3>
            <div className="grid gap-4">
                <a href="https://pdfdrive.com/web-application-hackers-handbook-d18384091.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaFilePdf className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">“Web Application Hacker’s Handbook” PDF</p>
                    <p className="text-xs text-muted-foreground">2nd edition</p>
                </div>
                </a>
                <a href="https://github.com/digininja/DVWA" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaGithub className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">DVWA (Damn Vulnerable Web App)</p>
                    <p className="text-xs text-muted-foreground">Docker or direct download</p>
                </div>
                </a>
                <a href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaGraduationCap className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">PortSwigger Web-Security Academy</p>
                    <p className="text-xs text-muted-foreground">Free labs & theory</p>
                </div>
                </a>
                <a href="https://pwning.owasp-juice.shop" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaFlask className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">OWASP Juice Shop</p>
                    <p className="text-xs text-muted-foreground">Modern vulnerable Node app</p>
                </div>
                </a>
                <a href="https://portswigger.net/burp/communitydownload" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                <FaDownload className="text-accent text-xl mr-4" />
                <div>
                    <p className="font-semibold">Burp Suite Community</p>
                    <p className="text-xs text-muted-foreground">Free download</p>
                </div>
                </a>
            </div>
            </div>
            
            {/* PHASE 5 */}
            <div className="mb-10">
                <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Phase 5 – Cryptography & Protocols</h3>
                <div className="grid gap-4">
                    <a href="https://youtube.com/playlist?list=PL8e3AEx7aHQ" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                        <FaYoutube className="text-accent text-xl mr-4" />
                        <div>
                        <p className="font-semibold">Christof Paar – Complete Crypto Lectures</p>
                        <p className="text-xs text-muted-foreground">24 hrs, YouTube</p>
                        </div>
                    </a>
                    <a href="https://www.feistyduck.com/library/openssl-cookbook.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                        <FaFilePdf className="text-accent text-xl mr-4" />
                        <div>
                        <p className="font-semibold">OpenSSL Cook-book PDF</p>
                        <p className="text-xs text-muted-foreground">70 pages</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* PHASE 6 */}
            <div className="mb-10">
                <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Phase 6 – Penetration Testing & Tools</h3>
                <div className="grid gap-4">
                    <a href="https://youtube.com/playlist?list=PLBfufR7vyJJ7k1H4QnlSRAdT-JZc-8a1s" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                        <FaYoutube className="text-accent text-xl mr-4" />
                        <div>
                        <p className="font-semibold">TCM “Practical Ethical Hacking”</p>
                        <p className="text-xs text-muted-foreground">YouTube mirror</p>
                        </div>
                    </a>
                    <a href="https://www.offensive-security.com/metasploit-unleashed/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                        <FaRocket className="text-accent text-xl mr-4" />
                        <div>
                        <p className="font-semibold">Metasploit Unleashed</p>
                        <p className="text-xs text-muted-foreground">Free complete course</p>
                        </div>
                    </a>
                </div>
            </div>
             {/* ALWAYS-OPEN LIBRARIES */}
            <div className="mb-10">
                <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Always-Open Libraries & References</h3>
                <div className="grid gap-4">
                    <a href="https://opensecuritytraining.info" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                        <FaUniversity className="text-accent text-xl mr-4" />
                        <div>
                        <p className="font-semibold">OpenSecurityTraining Archive</p>
                        <p className="text-xs text-muted-foreground">Whole university curriculum</p>
                        </div>
                    </a>
                    <a href="https://github.com/enaqx/awesome-pentest" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                        <FaGithub className="text-accent text-xl mr-4" />
                        <div>
                        <p className="font-semibold">Awesome-Pentest GitHub List</p>
                        <p className="text-xs text-muted-foreground">Curated tools & blogs</p>
                        </div>
                    </a>
                     <a href="https://ctftime.org" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-card rounded-lg shadow hover:shadow-md transition hover:bg-accent/10">
                        <FaTrophy className="text-accent text-xl mr-4" />
                        <div>
                        <p className="font-semibold">CTFtime.org</p>
                        <p className="text-xs text-muted-foreground">Global CTF calendar</p>
                        </div>
                    </a>
                </div>
            </div>
            {/* tip box */}
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
            <p className="text-sm text-foreground">
                <FaLightbulb className="text-accent mr-2 inline-block" />
                <strong>Pro-tip:</strong> Right-click → “Bookmark All Tabs” after you open a batch of links; revisit each resource only when you reach the matching roadmap week so you don’t drown in tabs!
            </p>
            </div>
        </section>

        </div>
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="#phase-1" className="hover:text-accent transition-colors">Phase 1 Foundations</a></li>
                    <li><a href="#free-resources" className="hover:text-accent transition-colors">Free Resources</a></li>
                    <li><a href="https://github.com/enaqx/awesome-pentest" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Awesome-Pentest GitHub</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Keep Learning</h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="https://ctftime.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">CTFtime – global CTF calendar</a></li>
                    <li><a href="https://opensecuritytraining.info" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">OpenSecurityTraining archive</a></li>
                    <li><a href="https://www.cybrary.it/career-path/foundations" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Cybrary Foundations</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Community</h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="https://www.reddit.com/r/netsec/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">r/netsec</a></li>
                    <li><a href="https://www.reddit.com/r/cybersecurity/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">r/cybersecurity</a></li>
                    <li><a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">TryHackMe</a></li>
                    <li><a href="https://hackthebox.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Hack The Box</a></li>
                    </ul>
                </div>
                </div>

                <div className="border-t border-primary-foreground/30 mt-8 pt-8 text-center text-sm">
                <p>This roadmap and resource list is 100% free and open-source. Share, fork, and improve it freely.</p>
                </div>
            </div>
            </footer>
      </div>
    

</body>

</html>