import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { aboutData as AboutDataType } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

interface AboutSectionProps {
  data: typeof AboutDataType;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <Card className="overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/3 relative min-h-[300px] md:min-h-full">
          {data.profileImageUrl && (
            <Image
              src={data.profileImageUrl}
              alt={data.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={data.profileImageHint}
            />
          )}
        </div>
        <div className="md:w-2/3 p-6 md:p-8">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-3xl font-bold text-primary">{data.name}</CardTitle>
            <p className="text-lg text-accent">{data.title}</p>
            <div className="flex items-center text-muted-foreground mt-1">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>{data.university}</span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-foreground/90 mb-6">{data.bio}</p>
            
            <h3 className="text-xl font-semibold text-primary mb-3">Skills</h3>
            <div className="space-y-3">
              {data.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                    {skill.level && <span className="text-sm text-accent">{skill.level}%</span>}
                  </div>
                  {skill.level && <Progress value={skill.level} className="h-2" />}
                </div>
              ))}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
