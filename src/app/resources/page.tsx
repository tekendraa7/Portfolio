import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { recommendedBooks, curatedBlogs, freeCourseSuggestions } from "@/data/resourcesData";
import { BooksSection } from "@/components/resources/BooksSection";
import { BlogsSection } from "@/components/resources/BlogsSection";
import { CoursesSection } from "@/components/resources/CoursesSection";
import { BookMarked, Newspaper, GraduationCap } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="space-y-12">
      <SectionTitle>Learning Resources</SectionTitle>
      <p className="text-center text-lg text-muted-foreground -mt-8 mb-12 max-w-2xl mx-auto">
        Dive into the world of technology with these handpicked books, insightful blogs, and valuable free courses.
      </p>

      <Tabs defaultValue="books" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto">
          <TabsTrigger value="books" className="flex items-center gap-2">
            <BookMarked className="h-5 w-5" /> Books
          </TabsTrigger>
          <TabsTrigger value="blogs" className="flex items-center gap-2">
            <Newspaper className="h-5 w-5" /> Blogs
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" /> Courses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="books" className="mt-8">
          <BooksSection books={recommendedBooks} />
        </TabsContent>
        <TabsContent value="blogs" className="mt-8">
          <BlogsSection blogs={curatedBlogs} />
        </TabsContent>
        <TabsContent value="courses" className="mt-8">
          <CoursesSection courses={freeCourseSuggestions} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
