import { SectionTitle } from "@/components/ui/SectionTitle";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { aboutData, projectsData, contactLinks, contactDetails } from "@/data/portfolioData";

export default function PortfolioPage() {
  return (
    <div className="space-y-16">
      <SectionTitle>About Me</SectionTitle>
      <AboutSection data={aboutData} />

      <SectionTitle>My Projects</SectionTitle>
      <ProjectsSection projects={projectsData} />
      
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactSection contactLinks={contactLinks} contactDetails={contactDetails} />
    </div>
  );
}
