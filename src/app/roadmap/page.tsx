
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
  FaServer as FaServerProject,
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
} from "react-icons/fa";
import {
  BookOpen,
  Briefcase,
  Lightbulb,
  ShieldCheck,
  Terminal as TerminalIcon,
  Network,
  Brain,
  Target,
  Award,
  FlaskConical,
  BookMarked,
  Cpu,
  FileLock2,
  Code2,
  Cloud as CloudIcon,
  Binary,
  LockKeyhole,
  Route as RouteIcon,
  GraduationCap as GraduationCapIcon,
  Atom,
  Search as SearchIcon,
  FileText,
  Tv2,
} from "lucide-react";
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

    document
      .querySelectorAll('a[href^="#"]')
      .forEach((anchor) => anchor.addEventListener("click", smoothScroll as EventListener));

    // Highlight active section in TOC
    const sections = document.querySelectorAll("section[id]");
    const tocLinks = document.querySelectorAll(".toc-fixed a[href^='#']");

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
      document
        .querySelectorAll('a[href^="#"]')
        .forEach((anchor) => anchor.removeEventListener("click", smoothScroll as EventListener));
      window.removeEventListener("scroll", highlightActiveSection);
    };
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* Fixed Table of Contents */}
      <nav className="hidden lg:block fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-background/95 backdrop-blur-sm border-r border-border z-40 overflow-y-auto p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary mb-4">
            Table of Contents
          </h3>
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#executive-summary" className="hover:text-accent transition-colors">
              Executive Summary
            </a>
          </li>
          <li>
            <a href="#phase-1" className="hover:text-accent transition-colors">
              Phase 1: Foundational IT & Cybersecurity
            </a>
          </li>
          <li>
            <a href="#phase-2" className="hover:text-accent transition-colors">
              Phase 2: Intermediate Networking & Security
            </a>
          </li>
          <li>
            <a href="#phase-3" className="hover:text-accent transition-colors">
              Phase 3: Operating Systems Deep Dive
            </a>
          </li>
          <li>
            <a href="#phase-4" className="hover:text-accent transition-colors">
              Phase 4: Application Security & Web Tech
            </a>
          </li>
           <li>
            <a href="#phase-5" className="hover:text-accent transition-colors">
             Phase 5: Cryptography & Security Protocols
            </a>
          </li>
           <li>
            <a href="#phase-6" className="hover:text-accent transition-colors">
             Phase 6: Penetration Testing Methodologies
            </a>
          </li>
          <li>
            <a href="#phase-7" className="hover:text-accent transition-colors">
             Phase 7: Project-Based Learning & Portfolio
            </a>
          </li>
          <li>
            <a href="#free-resources" className="hover:text-accent transition-colors">
             Free Resource Starter-Pack
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-white bg-gradient-to-br from-primary/20 via-background to-secondary/20">
          <div className="absolute inset-0">
            <Image
              src="https://i.imgur.com/NGLz3G0.gif"
              alt="Cybersecurity digital landscape"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
              unoptimized
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
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">1</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 1: Foundational IT & Cybersecurity Knowledge</h2>
                    <p className="text-muted-foreground">Weeks 1-12 • Building the Cornerstone</p>
                </div>
            </div>
            {/* ... content for Phase 1 */}
          </div>
        </section>

        {/* Phase 2 */}
        <section id="phase-2" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">2</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 2: Intermediate Networking & Core Security Concepts</h2>
                    <p className="text-muted-foreground">Weeks 13-24 • Deepening Technical Expertise</p>
                </div>
            </div>
             {/* ... content for Phase 2 */}
          </div>
        </section>

        {/* Phase 3 */}
        <section id="phase-3" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">3</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 3: Operating Systems Deep Dive</h2>
                    <p className="text-muted-foreground">Weeks 25-36 • Mastering Linux & Windows</p>
                </div>
            </div>
             {/* ... content for Phase 3 */}
          </div>
        </section>

        {/* Phase 4 */}
        <section id="phase-4" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">4</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 4: Application Security & Web Technologies</h2>
                    <p className="text-muted-foreground">Weeks 37-48 • Web Application Pentesting</p>
                </div>
            </div>
             {/* ... content for Phase 4 */}
          </div>
        </section>
        
        {/* Phase 5 */}
        <section id="phase-5" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">5</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 5: Cryptography & Security Protocols</h2>
                    <p className="text-muted-foreground">Weeks 49-60 • Encryption & Secure Communications</p>
                </div>
            </div>
             {/* ... content for Phase 5 */}
          </div>
        </section>

        {/* Phase 6 */}
        <section id="phase-6" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">6</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 6: Penetration Testing Methodologies & Tools</h2>
                    <p className="text-muted-foreground">Weeks 61-72 • Professional Pentesting Skills</p>
                </div>
            </div>
             {/* ... content for Phase 6 */}
          </div>
        </section>
        
        {/* Phase 7 */}
        <section id="phase-7" className="py-16">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">7</div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Phase 7: Project-Based Learning & Portfolio Development</h2>
                    <p className="text-muted-foreground">Weeks 73-104 • Capstone Projects & Professional Readiness</p>
                </div>
            </div>
             {/* ... content for Phase 7 */}
          </div>
        </section>

        {/* Free Resources Section */}
        <section id="free-resources" className="py-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center gap-3">
              <FaLink className="text-accent" />
              Free Resource Starter-Pack
            </h2>
            <div className="space-y-10">
                {/* Phase 1 Resources */}
                <div>
                    <h3 className="text-xl font-semibold text-secondary mb-4">Phase 1 – Foundations</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Resource items */}
                    </div>
                </div>
                {/* Other phases */}
            </div>
        </section>

        </div>
      </div>
    </div>
  );
}

