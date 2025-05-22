
import type { RoadmapBook } from "@/data/roadmapData"; // Using old data type, will be unused
import { ResourceCard } from "@/components/resources/ResourceCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BookOpen } from "lucide-react";

// This component is no longer directly used by the new roadmap page (src/app/roadmap/page.tsx)
// as it now uses RoadmapBookCard.tsx within a tabbed layout.
// Keeping the file for now in case it's referenced elsewhere or for future use.
// If confirmed unused, it can be deleted.

interface OldRoadmapBooksSectionProps {
  books: RoadmapBook[]; // This uses the OLD RoadmapBook type
}

export function RoadmapBooksSection({ books }: OldRoadmapBooksSectionProps) {
  const beginnerBooks = books.filter(book => book.level === "Beginner");
  const intermediateBooks = books.filter(book => book.level === "Intermediate");
  const advancedBooks = books.filter(book => book.level === "Advanced");

  const BookList = ({ title, bookList }: { title: string, bookList: RoadmapBook[] }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
        <BookOpen className="h-7 w-7 mr-3 text-accent" />
        {title}
      </h3>
      {bookList.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bookList.map((book) => (
            <ResourceCard
              key={book.id}
              type="book" // ResourceCard expects a 'type' prop
              title={book.title}
              author={book.author}
              description={book.description}
              imageUrl={book.imageUrl}
              imageHint={book.imageHint || "book cover"}
              linkUrl={book.amazonLink || "#"} // Assuming amazonLink can be used as a general link
              linkText="View Details"
            />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No books listed for this level yet.</p>
      )}
    </div>
  );

  return (
    <div className="space-y-8">
      <SectionTitle>Recommended Books by Level</SectionTitle>
      <p className="text-center text-lg text-muted-foreground -mt-4 mb-10 max-w-3xl mx-auto">
        Supplement your learning with these highly recommended books, categorized by experience level.
        These texts offer deep dives into crucial concepts and practical skills.
      </p>
      <BookList title="Beginner Level Books" bookList={beginnerBooks} />
      <BookList title="Intermediate Level Books" bookList={intermediateBooks} />
      <BookList title="Advanced Level Books" bookList={advancedBooks} />
    </div>
  );
}
