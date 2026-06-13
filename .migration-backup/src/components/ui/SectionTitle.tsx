import { cn } from "@/lib/utils";
import type React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-8 text-center md:text-left",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
