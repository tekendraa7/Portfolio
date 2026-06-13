import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import {
  cybersecurityBlogs,
  owaspTop10,
  owaspGeneralLink,
  researchHubs,
  communityFeeds,
  discordServers,
} from "@/data/blogsData";
import { InfoCard } from "@/components/blogs/InfoCard";

export default function Blogs() {
  return (
    <div className="space-y-16 container mx-auto px-4 py-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground text-glow">
          Cybersecurity Research &amp; Knowledge Hub
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          A curated collection of top-tier blogs, frameworks, and community discussions.
        </p>
      </header>

      <section>
        <SectionTitle>World-Class Cybersecurity Blogs</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cybersecurityBlogs.map((blog) => (
            <InfoCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              url={blog.url}
              logoUrl={blog.logoUrl}
              imageHint={blog.imageHint}
              category={blog.category}
              icon={blog.icon}
              linkText="Read Blog"
            />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>🛡️ OWASP Top 10 — 2021</SectionTitle>
        <p className="mb-6 text-muted-foreground md:text-left text-center">
          The OWASP Top 10 is a standard awareness document for developers and web application security, representing a broad consensus about the most critical security risks.{" "}
          <Button variant="link" asChild className="p-1 text-primary">
            <a href={owaspGeneralLink} target="_blank" rel="noopener noreferrer">
              Learn more <ExternalLink className="ml-1 h-4 w-4 inline" />
            </a>
          </Button>
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {owaspTop10.map((item) => (
            <Card key={item.id} className="shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {item.icon && <item.icon className="h-8 w-8 text-destructive" />}
                  <CardTitle className="text-xl text-foreground">{item.code}: {item.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground flex-grow min-h-[60px]">{item.explanation}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant={tag === "Critical" ? "destructive" : "secondary"} className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Research &amp; Framework Hubs</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {researchHubs.map((hub) => (
            <InfoCard
              key={hub.id}
              id={hub.id}
              title={hub.title}
              description={hub.description}
              url={hub.url}
              logoUrl={hub.logoUrl}
              imageHint={hub.imageHint}
              category={hub.category}
              icon={hub.icon}
              linkText="Explore Hub"
            />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Join the Community: Top Discord Servers</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {discordServers.map((server) => (
            <InfoCard
              key={server.id}
              id={server.id}
              title={server.name}
              description={server.description}
              url={server.url}
              icon={server.icon}
              category={server.category}
              linkText="Join Server"
              imageHint="discord community"
            />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Community-Powered News Feeds</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityFeeds.map((feed) => (
            <Card key={feed.id} className="shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-primary/50">
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-foreground">{feed.name}</CardTitle>
                {feed.icon && <feed.icon className="h-6 w-6 text-primary" />}
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3">Community discussions and news from Reddit.</p>
                <Button asChild size="sm" className="w-full">
                  <a href={feed.url} target="_blank" rel="noopener noreferrer">
                    View Feed <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Badge variant="outline" className="mt-3 text-xs">Community Feed</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
