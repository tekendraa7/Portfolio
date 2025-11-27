
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BotMessageSquareIcon, BriefcaseIcon, ShieldCheck, Newspaper, Github, Linkedin, Download, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutData, contactLinks } from "@/data/portfolioData";

export default function Home() {
  const socialIconsToShow = ['GitHub', 'LinkedIn'];
  const filteredContactLinks = contactLinks.filter(link => socialIconsToShow.includes(link.name));

  return (
    <div className="space-y-16 container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-28 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(var(--primary-rgb),0.08)_0%,_transparent_40%)] -z-10 animate-[spin_20s_linear_infinite]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
              <Image
                  src={aboutData.profileImageUrl || "https://placehold.co/128x128.png"}
                  alt={aboutData.name || "Profile Picture"}
                  width={128}
                  height={128}
                  priority
                  className="rounded-full shadow-lg border-4 border-background/80 object-cover mx-auto mb-6"
                  data-ai-hint={aboutData.profileImageHint || "profile photo"}
                />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 text-glow">
                Tekendra Bhandari
              </h1>
              <p className="text-lg md:text-xl text-primary font-semibold max-w-3xl mx-auto mb-8">
                 Cyber Researcher & Developer <br />
                 <span className="text-muted-foreground font-normal text-base">Cybersecurity | Linux | AI & Stock Market Analysis</span>
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/portfolio">
                    Explore Portfolio <BriefcaseIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/blogs">
                    View Research <BookOpen className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
          </div>
      </section>

      {/* About Me Section - Simplified */}
       <section className="py-12">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                A passionate Computer Engineering student diving deep into the world of cybersecurity, Linux, and networking.
                Dedicated to leveraging technology to build secure and innovative solutions for a safer digital tomorrow.
            </p>
            <div className="flex items-center justify-center gap-4">
                 <Button asChild variant="outline">
                  <a href="/tekendra_bhandari_cv.pdf" download>
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <div className="flex space-x-4">
                  {filteredContactLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.name}
                          className="text-muted-foreground hover:text-primary transition-all duration-200"
                        >
                          <link.icon className="h-6 w-6" />
                        </Link>
                      ))}
                </div>
              </div>
        </div>
      </section>


      {/* Overview Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">What You'll Find Here</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
            <CardHeader className="items-center">
              <BriefcaseIcon className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl text-center">My Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Discover my projects, skills, and journey in computer engineering.
              </p>
              <Link href="/portfolio" className="mt-4 text-primary hover:underline flex items-center justify-center">
                View Portfolio <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
            <CardHeader className="items-center">
              <BotMessageSquareIcon className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl text-center">AI Q&A Chatbot</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Interact with an AI to get answers on Linux, Cybersecurity, and Networking.
              </p>
              <Link href="/qa" className="mt-4 text-primary hover:underline flex items-center justify-center">
                Try the Chatbot <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
            <CardHeader className="items-center">
              <Newspaper className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl text-center">Blogs & Research</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-muted-foreground text-center">
                  Curated cybersecurity blogs, market analysis, and research papers.
                </p>
                <Link href="/blogs" className="mt-4 text-primary hover:underline flex items-center justify-center">
                  Explore Posts <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
    </div>
  );
}
