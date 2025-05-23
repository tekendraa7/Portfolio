
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
    <Card className="shadow-lg">
      <div className="p-6 md:p-8">
        {/* Image container - centered circle */}
        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative rounded-full overflow-hidden shadow-md mb-6 border-2 border-primary/50">
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
        
        {/* Text content container */}
        <div>
          <CardHeader className="p-0 mb-4 text-center"> {/* Centered Header */}
            <CardTitle className="text-3xl font-bold text-primary">{data.name}</CardTitle>
            <p className="text-lg text-accent">{data.title}</p>
            <div className="flex items-center justify-center text-muted-foreground mt-1">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>{data.university}</span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Bio: centered block, text also centered for consistency as it's short */}
            <p className="text-foreground/90 mb-6 max-w-xl mx-auto text-center">{data.bio}</p>

            {/* Skills: centered heading, then centered block for skills */}
            <h3 className="text-xl font-semibold text-primary mb-3 mt-8 text-center">Skills</h3>
            <div className="space-y-3 max-w-md mx-auto"> {/* Centers the block of skills */}
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
