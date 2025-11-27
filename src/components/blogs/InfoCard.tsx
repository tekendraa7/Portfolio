
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  description?: string;
  url: string;
  logoUrl?: string;
  imageHint?: string;
  category?: string;
  tags?: string[];
  icon?: LucideIcon;
  linkText?: string;
  id: string;
}

export function InfoCard({
  title,
  description,
  url,
  logoUrl,
  imageHint,
  category,
  tags,
  icon: Icon,
  linkText = "Visit Resource",
  id,
}: InfoCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          {logoUrl && (
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-secondary/50 rounded-md overflow-hidden flex items-center justify-center p-2">
              <Image
                src={logoUrl}
                alt={`${title} logo`}
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
                data-ai-hint={imageHint || "logo"}
              />
            </div>
          )}
          {!logoUrl && Icon && (
             <div className="p-3 bg-primary/10 rounded-md">
                <Icon className="h-8 w-8 text-primary" />
             </div>
          )}
          <div className="flex-grow">
            <CardTitle className="text-lg text-foreground leading-tight">{title}</CardTitle>
            {category && <Badge variant="secondary" className="mt-1 text-xs">{category}</Badge>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        {description && <CardDescription className="text-sm text-muted-foreground mb-3">{description}</CardDescription>}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {tags.map((tag, index) => (
              <Badge key={`${id}-tag-${index}`} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild variant="link" size="sm" className="w-full justify-start p-0 text-primary hover:underline">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {linkText} <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
