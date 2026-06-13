import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Shield, Code2, Network, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutData, educationData } from "@/data/portfolioData";

const interests = [
  { icon: <Shield className="h-5 w-5" />, label: "Cybersecurity", color: "text-primary" },
  { icon: <Code2 className="h-5 w-5" />, label: "Software Development", color: "text-accent" },
  { icon: <Network className="h-5 w-5" />, label: "Networking", color: "text-primary" },
  { icon: <Globe className="h-5 w-5" />, label: "Web Development", color: "text-accent" },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          {aboutData.longBio}
        </p>
        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{aboutData.location}</span>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" /> Education
        </h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent/50 to-transparent" />
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={edu.id} className="relative flex gap-6 pl-14">
                <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/40 text-primary font-bold text-sm z-10">
                  {educationData.length - index}
                </div>
                <Card className="flex-1 hover:border-primary/40 transition-colors duration-300">
                  <CardContent className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{edu.institution}</h3>
                        <p className="text-primary text-sm font-medium">{edu.degree}</p>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="self-start mt-1 whitespace-nowrap shrink-0">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Career Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((interest) => (
            <Card key={interest.label} className="hover:border-primary/40 transition-colors duration-300">
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className={`${interest.color} p-3 rounded-xl bg-current/10`}>
                  <div className={interest.color}>{interest.icon}</div>
                </div>
                <span className="font-medium text-foreground text-sm">{interest.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20">
          <a href="/tekendra_bhandari_cv.pdf" download>
            <Download className="h-4 w-4" /> Download Full CV
          </a>
        </Button>
      </div>
    </div>
  );
}
