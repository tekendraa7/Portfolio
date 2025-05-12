import type { Book } from "@/data/resourcesData";
import { ResourceCard } from "./ResourceCard";

interface BooksSectionProps {
  books: Book[];
}

export function BooksSection({ books }: BooksSectionProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Recommended Books</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <ResourceCard
            key={book.id}
            type="book"
            title={book.title}
            author={book.author}
            description={book.description}
            imageUrl={book.imageUrl}
            imageHint={book.imageHint}
            linkUrl={book.amazonLink || "#"}
            linkText="View on Amazon"
          />
        ))}
      </div>
    </div>
  );
}
