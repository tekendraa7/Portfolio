import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, BookOpen, Download, Mail, Github, Linkedin, MapPin, ChevronDown } from "lucide-react";
import { aboutData, contactLinks } from "@/data/portfolioData";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
  Email: <Mail className="h-5 w-5" />,
};

export default function Home() {
  return (
    <div className="space-y-0">
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(77,163,255,0.12),transparent)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(77,163,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(77,163,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative flex flex-col items-center max-w-3xl mx-auto">
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/60 to-accent/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={aboutData.profileImageUrl}
              alt={aboutData.name}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-3 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {aboutData.name}
          </h1>

          <p className="text-base md:text-lg text-primary font-semibold mb-2">
            {aboutData.subtitle}
          </p>

          <div className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm mb-8">
            <MapPin className="h-4 w-4" />
            <span>{aboutData.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
            <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <a href="/tekendra_bhandari_cv.pdf" download>
                <Download className="h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-primary/40 hover:border-primary">
              <Link href="/portfolio">
                <Briefcase className="h-4 w-4" /> View Portfolio
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-accent/40 hover:border-accent">
              <Link href="/blog">
                <BookOpen className="h-4 w-4" /> Explore Blog
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200 text-sm font-medium"
              >
                {socialIcons[link.name]}
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </a>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {aboutData.longBio}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="outline" className="gap-2">
              <a href="/tekendra_bhandari_cv.pdf" download>
                <Download className="h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/about">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">What You'll Find Here</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A living CV, portfolio, blog, and roadmap for a future tech professional.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="group hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/60 backdrop-blur-sm">
              <CardHeader className="items-center pb-3">
                <div className="p-3 rounded-xl bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">My Portfolio</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Projects, skills, and my journey in computer engineering and cybersecurity.
                </p>
                <Link href="/portfolio" className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium">
                  View Portfolio <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 bg-card/60 backdrop-blur-sm">
              <CardHeader className="items-center pb-3">
                <div className="p-3 rounded-xl bg-accent/10 mb-2 group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-center">Blog & Writing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Writeups on cybersecurity, Linux, tools, and life as a CS student.
                </p>
                <Link href="/blog" className="inline-flex items-center gap-1 text-accent hover:underline text-sm font-medium">
                  Explore Blog <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/60 backdrop-blur-sm">
              <CardHeader className="items-center pb-3">
                <div className="p-3 rounded-xl bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">Learning Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  A 6-phase structured path from foundations to penetration testing.
                </p>
                <Link href="/roadmap" className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium">
                  View Roadmap <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
