
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';
import { roadmapPageData } from "@/data/roadmapData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu, MapPinned, BookMarkedIcon, Milestone, BarChart3, TrendingUp, Award, ExternalLink,
  ListChecks, Users, Tv2, Rss, MessageSquare, Youtube, Linkedin, Github, Twitter, FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import RoadmapStageCard from "@/components/roadmap/RoadmapStageCard";
import RoadmapBookCard from "@/components/roadmap/RoadmapBookCard";
import RoadmapResourceItem from "@/components/roadmap/RoadmapResourceItem";

// export const metadata: Metadata = { // Metadata should be exported from page.tsx if it's a server component, or layout.tsx.
//   title: "Cybersecurity Career Roadmap - CyberShield Portfolio",
//   description: "A comprehensive 4-year cybersecurity career roadmap for students and enthusiasts. Covers beginner, intermediate, and advanced stages, resources, books, and more.",
//   openGraph: {
//     title: "Cybersecurity Career Roadmap - CyberShield Portfolio",
//     description: "Your guide to navigating the cybersecurity landscape.",
//     images: [
//       {
//         url: roadmapPageData.hero.backgroundImageUrl, // Use your hero image
//         width: 1200,
//         height: 630,
//         alt: "Cybersecurity Roadmap Hero Image",
//       },
//     ],
//   },
// };


const tabItems = [
  { id: "overview", label: "🗺️ Overview", icon: MapPinned },
  { id: "beginner", label: "🌱 Beginner", icon: Milestone },
  { id: "intermediate", label: "⚙️ Intermediate", icon: BarChart3 },
  { id: "advanced", label: "🚀 Advanced", icon: TrendingUp },
  { id: "books", label: "📚 Books", icon: BookMarkedIcon },
  { id: "resources", label: "🛠️ Resources", icon: ListChecks },
];

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsMobileMenuOpen(false); // Close mobile menu on tab selection
    // Scroll to top of content area if needed, or to specific section
    contentRef.current?.scrollTo(0, 0);
  };
  
  // Helper to get stage data
  const getStage = (id: string) => roadmapPageData.stages.find(s => s.id === id);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Tab Navigation */}
      <div className="sticky top-16 md:top-0 z-40 bg-background/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                {tabItems.map(tab => (
                  <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2 text-xs sm:text-sm">
                    <tab.icon className="h-4 w-4 sm:h-5 sm:w-5" /> {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          {/* Mobile Hamburger Menu for Tabs */}
          <div className="md:hidden flex justify-end py-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <nav className="flex flex-col space-y-2 p-4">
                  {tabItems.map(tab => (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "ghost"}
                      onClick={() => handleTabChange(tab.id)}
                      className="justify-start gap-2"
                    >
                      <tab.icon className="h-5 w-5" /> {tab.label}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div ref={contentRef} className="container mx-auto px-4 py-8 flex-grow">
        {/* Overview / Hero Section */}
        {activeTab === "overview" && (
          <section id="overview" className="relative text-white py-20 md:py-32 rounded-lg overflow-hidden shadow-xl mb-12">
            <Image
              src={roadmapPageData.hero.backgroundImageUrl}
              alt={roadmapPageData.hero.imageHint}
              layout="fill"
              objectFit="cover"
              className="opacity-40"
              data-ai-hint={roadmapPageData.hero.imageHint}
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                {roadmapPageData.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-6 max-w-3xl mx-auto">
                {roadmapPageData.hero.subtitle}
              </p>
              <p className="text-md md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                {roadmapPageData.hero.description}
              </p>
              <Button size="lg" onClick={() => handleTabChange("beginner")} className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
                Get Started
              </Button>
            </div>
          </section>
        )}

        {/* Stage Sections */}
        {activeTab === "beginner" && getStage("beginner") && <RoadmapStageCard stage={getStage("beginner")!} />}
        {activeTab === "intermediate" && getStage("intermediate") && <RoadmapStageCard stage={getStage("intermediate")!} />}
        {activeTab === "advanced" && getStage("advanced") && <RoadmapStageCard stage={getStage("advanced")!} />}

        {/* Recommended Books Section */}
        {activeTab === "books" && (
          <section id="books" className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2 text-center">📚 Recommended Books</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">Curated book list to guide your learning journey at each stage.</p>
            </div>
            
            {["Beginner", "Intermediate", "Advanced"].map(level => (
              <div key={level}>
                <h3 className="text-2xl font-semibold text-accent mb-6">{level} Level Books</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {roadmapPageData.books.filter(book => book.level === level).map(book => (
                    <RoadmapBookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <section id="resources" className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2 text-center">🛠️ Platforms, Labs & Communities</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">Essential platforms for hands-on practice and communities for support and news.</p>
            </div>

            {/* Platforms & Labs */}
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-6">🧪 Platforms & Labs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roadmapPageData.platformsAndLabs.map(platform => (
                  <RoadmapResourceItem
                    key={platform.id}
                    name={platform.name}
                    description={platform.description}
                    url={platform.url}
                    imageUrl={platform.logoUrl}
                    imageHint={platform.imageHint}
                    type={platform.type}
                  />
                ))}
              </div>
            </div>

            {/* Communities & News */}
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-6">🌐 Communities & News</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roadmapPageData.communitiesAndNews.map(community => (
                  <RoadmapResourceItem
                    key={community.id}
                    name={community.name}
                    description={community.description}
                    url={community.url}
                    icon={community.icon}
                    type={community.type}
                  />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Image src="https://placehold.co/800x400.png" alt="Global community hotspots map placeholder" width={800} height={400} className="mx-auto rounded-lg shadow-md" data-ai-hint="world map tech" />
                <p className="text-sm text-muted-foreground mt-2">Conceptual: Global community hotspots.</p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer Call-to-Action */}
      <footer className="bg-secondary/70 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Start Your Cybersecurity Journey Today!
          </h2>
          <Button size="lg" onClick={() => handleTabChange("beginner")} className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105 mb-8">
            Begin with Fundamentals
          </Button>
          <div className="flex justify-center space-x-6">
            {roadmapPageData.footer.socialLinks.map(link => (
              <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <Button variant="outline" size="icon" className="rounded-full text-muted-foreground hover:text-primary hover:border-primary">
                  <link.icon className="h-6 w-6" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
