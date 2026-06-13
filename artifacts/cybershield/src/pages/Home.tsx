import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, User, FolderKanban, MessageSquare, BookOpen, Map } from "lucide-react";
import { MatrixBackground } from "@/components/portfolio/MatrixBackground";
import { aboutData } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
        <MatrixBackground className="absolute inset-0 w-full h-full opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <ShieldCheck className="h-20 w-20 text-primary mx-auto mb-6 drop-shadow-lg" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-4 text-glow">
            {aboutData.name}
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-6 font-semibold">
            {aboutData.title}
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            {aboutData.bio}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary">
              <Link href="/portfolio">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-accent text-accent hover:bg-accent/10">
              <Link href="/qa">
                Ask AI Assistant <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Explore The Site</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/portfolio", icon: FolderKanban, label: "Portfolio", desc: "Projects, skills & contact" },
              { href: "/qa", icon: MessageSquare, label: "Q&A / Chat", desc: "AI chatbot for cybersecurity questions" },
              { href: "/blogs", icon: BookOpen, label: "Research", desc: "Top blogs & resources" },
              { href: "/roadmap", icon: Map, label: "Roadmap", desc: "Learning path & certifications" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="group flex flex-col items-center p-6 rounded-xl border bg-card hover:border-primary hover:shadow-glow-primary transition-all duration-300 cursor-pointer h-full">
                  <item.icon className="h-10 w-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground text-center">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <User className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-muted-foreground mb-6">{aboutData.bio}</p>
          <Button asChild variant="outline">
            <Link href="/portfolio#about">Learn More</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
