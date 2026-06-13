import { SectionTitle } from "@/components/ui/SectionTitle";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { aboutData, projectsData, contactLinks, contactDetails } from "@/data/portfolioData";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-20">
      <section id="about">
        <SectionTitle>About Me</SectionTitle>
        <AboutSection data={aboutData} />
      </section>

      <section id="projects">
        <SectionTitle>My Projects</SectionTitle>
        <ProjectsSection projects={projectsData} />
      </section>

      <section id="contact">
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactSection contactLinks={contactLinks} contactDetails={contactDetails} />
      </section>
    </div>
  );
}
