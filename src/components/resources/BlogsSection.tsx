import type { Blog } from "@/data/resourcesData";
import { ResourceCard } from "./ResourceCard";

interface BlogsSectionProps {
  blogs: Blog[];
}

export function BlogsSection({ blogs }: BlogsSectionProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Curated Blogs</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <ResourceCard
            key={blog.id}
            type="blog"
            title={blog.title}
            description={blog.snippet}
            imageUrl={blog.imageUrl}
            imageHint={blog.imageHint}
            linkUrl={blog.url}
            linkText="Read Full Article"
            category={blog.category}
          />
        ))}
      </div>
    </div>
  );
}
