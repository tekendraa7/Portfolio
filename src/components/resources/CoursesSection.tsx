import type { Course } from "@/data/resourcesData";
import { ResourceCard } from "./ResourceCard";

interface CoursesSectionProps {
  courses: Course[];
}

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Free Course Suggestions</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <ResourceCard
            key={course.id}
            type="course"
            title={course.title}
            provider={course.provider}
            description={course.description}
            imageUrl={course.imageUrl}
            imageHint={course.imageHint}
            linkUrl={course.url}
            linkText="Go to Course"
            category={course.category}
          />
        ))}
      </div>
    </div>
  );
}
