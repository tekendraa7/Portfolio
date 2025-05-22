
"use client";

import type { RoadmapStage, RoadmapCategory, RoadmapResource } from "@/data/roadmapData"; // Using old data types for compatibility with old structure, will be unused
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as LucideIcons from "lucide-react"; 

// This component is no longer used by the new roadmap page (src/app/roadmap/page.tsx)
// as it now uses RoadmapStageCard.tsx for a different layout.
// Keeping the file for now in case it's referenced elsewhere or for future use.
// If confirmed unused, it can be deleted.

interface OldRoadmapStageAccordionProps {
  stage: RoadmapStage; // This uses the OLD RoadmapStage type
}

const getIcon = (iconName?: keyof typeof LucideIcons) => {
  if (!iconName) return <LucideIcons.ChevronRight className="h-5 w-5 mr-3 text-accent" />;
  const IconComponent = LucideIcons[iconName] as LucideIcons.LucideIcon;
  return IconComponent ? <IconComponent className="h-5 w-5 mr-3 text-accent group-hover:text-accent-foreground transition-colors" /> : <LucideIcons.ChevronRight className="h-5 w-5 mr-3 text-accent" />;
};

const getResourceIcon = (resource: RoadmapResource) => {
  if (resource.icon) {
    const IconComponent = resource.icon as LucideIcons.LucideIcon; // Assuming resource.icon is LucideIcon
    return <IconComponent className="h-4 w-4 mr-2 text-muted-foreground" />;
  }
  if (resource.url) {
    return <LucideIcons.Link className="h-4 w-4 mr-2 text-muted-foreground" />;
  }
  return <LucideIcons.ChevronsRight className="h-4 w-4 mr-2 text-muted-foreground" />;
}

export function RoadmapStageAccordion({ stage }: OldRoadmapStageAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={stage.id} className="border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <AccordionTrigger className="p-6 text-left hover:no-underline">
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-primary">{stage.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{stage.description}</p>
            </div>
            <Badge variant={stage.level === "Beginner" ? "secondary" : stage.level === "Intermediate" ? "default" : "destructive"} className="mt-2 md:mt-0 md:ml-4 shrink-0">
              {stage.level}
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0">
          <div className="space-y-6">
            {stage.categories.map((category) => (
              <Card key={category.title} className="bg-secondary/30">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center group text-primary/90">
                    {getIcon(category.iconName as keyof typeof LucideIcons | undefined)}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-inside">
                    {category.items.map((item, index) => (
                      <li key={index} className="text-sm text-foreground/90 flex items-start">
                        {typeof item === 'string' ? (
                           <>
                            <LucideIcons.CheckSquare className="h-4 w-4 mr-2 mt-0.5 shrink-0 text-primary/70" />
                            <span>{item}</span>
                           </>
                        ) : (
                          <>
                            {getResourceIcon(item as RoadmapResource)}
                            <div className="flex-grow">
                              <span className="font-medium">{(item as RoadmapResource).name}</span>
                              {(item as RoadmapResource).description && <span className="text-xs text-muted-foreground block"> - {(item as RoadmapResource).description}</span>}
                              {(item as RoadmapResource).url && (
                                <Button variant="link" size="sm" asChild className="p-0 h-auto ml-1 text-accent hover:underline">
                                  <Link href={(item as RoadmapResource).url!} target="_blank" rel="noopener noreferrer">
                                    (Link <LucideIcons.ExternalLink className="inline h-3 w-3 ml-0.5"/>)
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
