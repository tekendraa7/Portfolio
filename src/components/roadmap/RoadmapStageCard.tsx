
import Image from "next/image";
import Link from "next/link";
import type { RoadmapStageData, RoadmapTopic } from "@/data/roadmapData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapStageCardProps {
  stage: RoadmapStageData;
}

const TopicItem: React.FC<{ topic: RoadmapTopic }> = ({ topic }) => {
  const TopicIcon = topic.icon || CheckCircle2;
  return (
    <div className="mb-4 p-3 bg-card/50 rounded-md shadow-sm">
      <h4 className="flex items-center text-md font-semibold text-primary mb-1">
        <TopicIcon className="h-5 w-5 mr-2 text-accent" />
        {topic.name}
      </h4>
      {topic.description && <p className="text-xs text-muted-foreground mb-2 ml-7">{topic.description}</p>}
      {topic.resources && topic.resources.length > 0 && (
        <ul className="space-y-1 ml-7">
          {topic.resources.map((resource, idx) => {
            const ResourceIcon = resource.icon || ExternalLink;
            return (
            <li key={idx} className="text-xs">
              <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-muted-foreground hover:text-accent hover:underline transition-colors">
                <ResourceIcon className="h-3 w-3 mr-1.5 shrink-0" />
                {resource.name}
                <Badge variant={resource.type === "free" ? "secondary" : "outline"} className="ml-2 text-xs px-1.5 py-0.5">
                  {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                </Badge>
              </Link>
            </li>
          )})}
        </ul>
      )}
    </div>
  );
};

export default function RoadmapStageCard({ stage }: RoadmapStageCardProps) {
  return (
    <section id={stage.id} className="mb-16 scroll-mt-20">
      <div className={cn("p-4 rounded-t-lg text-white", stage.headerColor)}>
        <h2 className="text-3xl font-bold flex items-center">
          <span className="text-4xl mr-3">{stage.emoji}</span>
          {stage.title}
        </h2>
        <p className="text-lg opacity-90">{stage.subtitle}</p>
      </div>

      <Card className="shadow-xl rounded-t-none border-t-0">
        <CardContent className="p-6 grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">🎯 Goals</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
                {stage.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">💡 Key Topics & Concepts</h3>
              {stage.topics.map((topic, index) => (
                <TopicItem key={index} topic={topic} />
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">🏅 Certifications</h3>
              <ul className="space-y-1">
                {stage.certifications.map((cert, index) => {
                  const CertIcon = cert.icon || ExternalLink;
                  return (
                  <li key={index} className="text-sm">
                     <Link href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-muted-foreground hover:text-accent hover:underline transition-colors">
                      <CertIcon className="h-4 w-4 mr-2 shrink-0"/>
                      {cert.name}
                      <Badge variant="outline" className="ml-2 text-xs">{cert.type}</Badge>
                    </Link>
                  </li>
                )})}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">✍️ Practical Tips</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
                {stage.practicalTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Infographic/Chart Placeholder */}
          <div className="md:sticky md:top-24"> {/* Sticky for desktop */}
            <Card className="overflow-hidden shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Visual Learning Aid</CardTitle>
                <CardDescription className="text-xs">Key skills and tools for the {stage.tabName.toLowerCase()} stage.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={stage.infographicImage}
                  alt={stage.infographicAlt}
                  width={600}
                  height={400}
                  className="rounded-md object-cover transition-transform hover:scale-105"
                  data-ai-hint={`${stage.id} skills infographic`}
                />
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  (Chart.js or detailed infographic to be integrated here)
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
