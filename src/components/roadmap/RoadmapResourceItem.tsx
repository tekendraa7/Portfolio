
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapResourceItemProps {
  name: string;
  description: string;
  url: string;
  imageUrl?: string; // For platform logos
  imageHint?: string;
  icon?: LucideIcon; // For community/news items
  type: string; // e.g., "free", "paid", "subreddit", "blog"
}

export default function RoadmapResourceItem({
  name,
  description,
  url,
  imageUrl,
  imageHint,
  icon: Icon,
  type,
}: RoadmapResourceItemProps) {
  const badgeVariant = (type: string) => {
    if (["free", "hybrid", "paid"].includes(type)) return "secondary";
    return "outline";
  };

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader className="flex-row items-start gap-4 pb-3">
        {imageUrl && (
          <div className="relative w-12 h-12 shrink-0 bg-muted rounded-md overflow-hidden">
            <Image src={imageUrl} alt={`${name} logo`} layout="fill" objectFit="contain" data-ai-hint={imageHint || "logo"} />
          </div>
        )}
        {Icon && !imageUrl && (
          <div className="p-3 bg-accent/20 rounded-md">
            <Icon className="h-6 w-6 text-accent" />
          </div>
        )}
        <div className="flex-grow">
          <CardTitle className="text-md text-primary leading-tight">{name}</CardTitle>
          <Badge variant={badgeVariant(type)} className="mt-1 text-xs capitalize">{type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <CardDescription className="text-xs text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="border-t pt-3">
        <Button asChild variant="link" size="sm" className="w-full justify-start p-0 text-accent hover:underline">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Visit Resource <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
