
import Image from "next/image";
import Link from "next/link";
import type { RoadmapBookData } from "@/data/roadmapData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

interface RoadmapBookCardProps {
  book: RoadmapBookData;
}

export default function RoadmapBookCard({ book }: RoadmapBookCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-60 bg-muted"> {/* Adjusted height for book cover */}
        <Image
          src={book.coverImageUrl}
          alt={book.title}
          layout="fill"
          objectFit="contain" // Use contain to show full book cover
          className="p-2" // Add some padding around the image
          data-ai-hint={book.imageHint}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-primary leading-tight">{book.title}</CardTitle>
        <p className="text-xs text-accent">by {book.author}</p>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <CardDescription className="text-xs text-muted-foreground h-20 overflow-y-auto">
          {book.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 border-t pt-4">
        {book.amazonLink && (
          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto border-accent text-accent hover:bg-accent/10">
            <Link href={book.amazonLink} target="_blank" rel="noopener noreferrer">
              Buy on Amazon <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        )}
        {book.pdfLink && (
          <Button asChild variant="secondary" size="sm" className="w-full sm:w-auto">
            <Link href={book.pdfLink} target="_blank" rel="noopener noreferrer">
              Free PDF <BookOpen className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        )}
        {!book.amazonLink && !book.pdfLink && (
           <p className="text-xs text-muted-foreground text-center w-full">No links available</p>
        )}
      </CardFooter>
    </Card>
  );
}
