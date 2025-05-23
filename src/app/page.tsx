
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BotMessageSquareIcon, BriefcaseIcon, ShieldCheck, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              <Link href="/portfolio" className="mt-4 text-accent p-0 block mx-auto hover:underline flex items-center justify-center">
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
              <Link href="/qa" className="mt-4 text-accent p-0 block mx-auto hover:underline flex items-center justify-center">
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
                <Link href="/blogs" className="mt-4 text-accent p-0 block mx-auto hover:underline flex items-center justify-center">
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
