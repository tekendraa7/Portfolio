import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Download } from "lucide-react";
import { projectsData, techSkills } from "@/data/portfolioData";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 max-w-5xl">
      <section>
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/60 backdrop-blur-sm flex flex-col"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  {project.repoUrl && (
                    <Button asChild size="sm" variant="outline" className="gap-1.5 hover:border-primary">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="outline" className="gap-1.5 hover:border-accent">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Technologies & Skills</SectionTitle>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techSkills.map((skill) => (
            <Card
              key={skill.name}
              className="group hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 bg-card/60"
            >
              <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center py-8">
        <Card className="inline-block bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-lg shadow-primary/10">
          <CardContent className="p-8 flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-foreground">Download My CV</h3>
            <p className="text-muted-foreground max-w-sm">
              Get a full overview of my education, skills, projects, and experience.
            </p>
            <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <a href="/tekendra_bhandari_cv.pdf" download>
                <Download className="h-4 w-4" /> Download CV
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
