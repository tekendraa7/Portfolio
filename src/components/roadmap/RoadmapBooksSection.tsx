
import type { RoadmapBook } from "@/data/roadmapData";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BookOpen } from "lucide-react";

interface RoadmapBooksSectionProps {
  books: RoadmapBook[];
}

export function RoadmapBooksSection({ books }: RoadmapBooksSectionProps) {
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
              type="book"
              title={book.title}
              author={book.author}
              description={book.description}
              imageUrl={book.imageUrl}
              imageHint={book.imageHint || "book cover"}
              linkUrl={book.amazonLink || "#"}
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

    