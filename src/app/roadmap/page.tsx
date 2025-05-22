
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RoadmapStageAccordion } from "@/components/roadmap/RoadmapStageAccordion";
import { roadmapData, roadmapBooksData } from "@/data/roadmapData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPinned, BookMarkedIcon, Milestone, BarChart3, TrendingUp, Award } from "lucide-react";
import { RoadmapBooksSection } from "@/components/roadmap/RoadmapBooksSection";

export default function RoadmapPage() {
  const beginnerStage = roadmapData.find(stage => stage.level === "Beginner");
  const intermediateStage = roadmapData.find(stage => stage.level === "Intermediate");
  const advancedStage = roadmapData.find(stage => stage.level === "Advanced");

  return (
    <div className="space-y-12">
      <SectionTitle>Cybersecurity Learning Roadmap</SectionTitle>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 max-w-4xl mx-auto mb-8">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <MapPinned className="h-5 w-5" /> Overview
          </TabsTrigger>
          <TabsTrigger value="beginner" className="flex items-center gap-2">
            <Milestone className="h-5 w-5" /> Beginner
          </TabsTrigger>
          <TabsTrigger value="intermediate" className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" /> Intermediate
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" /> Advanced
          </TabsTrigger>
          <TabsTrigger value="books" className="flex items-center gap-2">
            <BookMarkedIcon className="h-5 w-5" /> Books
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex flex-col items-center text-center">
                <MapPinned className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-3xl">Your Cybersecurity Journey Ahead</CardTitle>
                <CardDescription className="max-w-3xl mx-auto mt-2 text-lg">
                  This roadmap outlines a suggested path for a 4-year computer engineering student
                  specializing in Cybersecurity, Linux, and Networking. It's a comprehensive guide to help you
                  navigate your studies, practical experiences, certifications, and career preparation.
                  Adapt it to your interests and pace—continuous learning is key!
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                    Each stage (Beginner, Intermediate, Advanced) details goals, key technical areas, security concepts, practical labs, recommended certifications, and valuable learning resources. The "Books" tab provides a curated list of readings for each level.
                </p>
                <p className="font-semibold text-primary">
                  Use the tabs above to explore each section.
                </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="beginner">
          {beginnerStage ? (
            <RoadmapStageAccordion stage={beginnerStage} />
          ) : (
            <p>Beginner stage data not found.</p>
          )}
        </TabsContent>

        <TabsContent value="intermediate">
          {intermediateStage ? (
            <RoadmapStageAccordion stage={intermediateStage} />
          ) : (
            <p>Intermediate stage data not found.</p>
          )}
        </TabsContent>

        <TabsContent value="advanced">
          {advancedStage ? (
            <RoadmapStageAccordion stage={advancedStage} />
          ) : (
            <p>Advanced stage data not found.</p>
          )}
        </TabsContent>
        
        <TabsContent value="books">
          <RoadmapBooksSection books={roadmapBooksData} />
        </TabsContent>
      </Tabs>

      <div className="text-center mt-12 py-8 border-t">
        <h3 className="text-2xl font-semibold text-primary mb-3">Start Your Cybersecurity Journey Today!</h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          The field of cybersecurity is challenging yet incredibly rewarding.
          Embrace the learning process, stay curious, and build your skills consistently.
        </p>
      </div>
    </div>
  );
}

    