
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BotMessageSquareIcon, BriefcaseIcon, ShieldCheck, Newspaper, Github, Linkedin, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutData, contactLinks } from "@/data/portfolioData"; // Import portfolio data

export default function Home() {
  const socialIconsToShow = ['GitHub', 'LinkedIn'];
  const filteredContactLinks = contactLinks.filter(link => socialIconsToShow.includes(link.name));

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-secondary/50 rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <ShieldCheck className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
            Welcome to CyberShield Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Tekendra Bhandari - Computer Engineering Student.
            Exploring the realms of Cybersecurity, Linux, and Networking with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/portfolio">
                Explore My Work <BriefcaseIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/qa">
                Ask AI Anything <BotMessageSquareIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New About Me Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-card to-background p-6 md:p-10 rounded-xl shadow-xl border border-border">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Side: Image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                <Image
                  src={aboutData.profileImageUrl || "https://placehold.co/256x256.png"}
                  alt={aboutData.name || "Profile Picture"}
                  width={256}
                  height={256}
                  priority
                  className="rounded-full shadow-lg border-4 border-primary/70 object-cover
                             w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64
                             group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  data-ai-hint={aboutData.profileImageHint || "profile photo"}
                />
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="md:col-span-8 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                Hi, I’m {aboutData.name || "Tekendra Bhandari"} 👋
              </h2>
              <p className="text-md sm:text-lg text-accent font-medium mb-4">
                Cybersecurity Enthusiast | Frontline Explorer in Ethical Hacking | Building @CyberShield
              </p>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base max-w-2xl mx-auto md:mx-0">
                A passionate Computer Engineering student diving deep into the world of cybersecurity, Linux, and networking.
                Dedicated to leveraging technology to build secure and innovative solutions for a safer digital tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground">
                  <a href="/tekendra_bhandari_cv.pdf" download> {/* Replace with actual CV path */}
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
                          className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-200"
                        >
                          <link.icon className="h-6 w-6" />
                        </Link>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">What You'll Find Here</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <BriefcaseIcon className="h-12 w-12 text-accent mb-2" />
              <CardTitle className="text-xl text-center">My Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Discover my projects, skills, and journey in computer engineering.
              </p>
              <Link href="/portfolio" className="mt-4 text-accent hover:underline flex items-center justify-center">
                View Portfolio <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <BotMessageSquareIcon className="h-12 w-12 text-accent mb-2" />
              <CardTitle className="text-xl text-center">AI Q&A Chatbot</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Interact with an AI to get answers on Linux, Cybersecurity, and Networking.
              </p>
              <Link href="/qa" className="mt-4 text-accent hover:underline flex items-center justify-center">
                Try the Chatbot <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <Newspaper className="h-12 w-12 text-accent mb-2" />
              <CardTitle className="text-xl text-center">Blogs & Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-muted-foreground text-center">
                  Curated cybersecurity blogs, OWASP Top 10, research hubs, and community feeds.
                </p>
                <Link href="/blogs" className="mt-4 text-accent hover:underline flex items-center justify-center">
                  Explore Blogs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Featured Image Section (Optional) */}
      <section className="container mx-auto px-4">
         <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/1200x400.png"
              alt="Cybersecurity conceptual image"
              layout="fill"
              objectFit="cover"
              data-ai-hint="cybersecurity network"
              className="opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <h3 className="text-3xl font-semibold text-white">Secure. Learn. Innovate.</h3>
            </div>
          </div>
      </section>
    </div>
  );
}
