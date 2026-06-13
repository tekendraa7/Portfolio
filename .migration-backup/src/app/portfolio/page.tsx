
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { aboutData, projectsData, contactLinks, contactDetails } from "@/data/portfolioData";
import { MatrixBackground } from "@/components/portfolio/MatrixBackground";

export default function PortfolioPage() {
  return (
    <div className="relative isolate">
      <MatrixBackground className="absolute inset-0 -z-10 h-full w-full opacity-20" />
      <div className="container mx-auto px-4 py-8 space-y-16">
        <SectionTitle>About Me</SectionTitle>
        <AboutSection data={aboutData} />

        <SectionTitle>Get In Touch</SectionTitle>
        <ContactSection contactLinks={contactLinks} contactDetails={contactDetails} />
        
        <SectionTitle>My Projects</SectionTitle>
        <ProjectsSection projects={projectsData} />
      </div>
    </div>
  );
}
