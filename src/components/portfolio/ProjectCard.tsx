
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/portfolioData";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {project.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageHint || "project image"}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-20 overflow-y-auto">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 border-t pt-4">
        {project.liveUrl && (
          <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
