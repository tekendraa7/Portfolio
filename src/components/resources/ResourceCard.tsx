import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, GraduationCap, Newspaper } from "lucide-react";
import type React from "react";

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  linkUrl: string;
  linkText?: string;
  category?: string;
  provider?: string; // For courses
  author?: string; // For books
  type: "book" | "blog" | "course";
}

const typeIcons: Record<ResourceCardProps["type"], React.ElementType> = {
  book: BookOpen,
  blog: Newspaper,
  course: GraduationCap,
};

export function ResourceCard({
  title,
  description,
  imageUrl,
  imageHint,
  linkUrl,
  linkText = "Learn More",
  category,
  provider,
  author,
  type,
}: ResourceCardProps) {
  const Icon = typeIcons[type];

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="relative w-full h-48 bg-muted">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint || `${type} image`}
          />
        </div>
      )}
      {!imageUrl && (
        <div className="flex items-center justify-center w-full h-48 bg-secondary">
          <Icon className="w-16 h-16 text-muted-foreground" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
        {author && <p className="text-sm text-accent">By {author}</p>}
        {provider && <p className="text-sm text-accent">Provider: {provider}</p>}
        <CardDescription className="text-sm text-muted-foreground h-24 overflow-y-auto pt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {category && (
          <Badge variant="outline" className="text-xs">{category}</Badge>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button asChild variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> {linkText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
