
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RoadmapStageAccordion } from "@/components/roadmap/RoadmapStageAccordion";
import { roadmapData } from "@/data/roadmapData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinned } from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="space-y-12">
      <SectionTitle>Cybersecurity Learning Roadmap</SectionTitle>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col items-center text-center">
            <MapPinned className="h-12 w-12 text-primary mb-3" />
            <CardTitle className="text-2xl">Your Journey Ahead</CardTitle>
            <CardDescription className="max-w-2xl mx-auto">
              This roadmap outlines a suggested path for a 4-year computer engineering student
              specializing in Cybersecurity, Linux, and Networking. It's a guide to help you
              navigate your studies, practical experiences, and career preparation.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {roadmapData.map((stage) => (
            <RoadmapStageAccordion key={stage.id} stage={stage} />
          ))}
        </CardContent>
      </Card>
       <p className="text-center text-sm text-muted-foreground mt-8">
        Note: This roadmap is a comprehensive guide. Adapt it to your interests and pace.
        Continuous learning is key in the ever-evolving field of cybersecurity.
      </p>
    </div>
  );
}

    