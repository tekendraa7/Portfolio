
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Rss } from 'lucide-react';
import { cybersecurityBlogs, owaspTop10, owaspGeneralLink, researchHubs, communityFeeds } from '@/data/blogsData';
import { InfoCard } from '@/components/blogs/InfoCard';

export const metadata: Metadata = {
  title: 'Cybersecurity Blogs & Resources - CyberShield Portfolio',
  description: 'Stay updated with the latest exploits, research, OWASP Top 10, and expert insights in cybersecurity.',
  openGraph: {
    title: 'Cybersecurity Blogs & Resources - CyberShield Portfolio',
    description: 'Curated cybersecurity blogs, OWASP Top 10, research hubs, and community feeds.',
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=Cybersecurity+Blogs',
        width: 1200,
        height: 630,
        alt: 'Cybersecurity Blogs & Resources',
      },
    ],
  },
};

export default function BlogsPage() {
  return (
    <div className="space-y-16 container mx-auto px-4 py-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
          📰 Top Cybersecurity Blogs & Knowledge Hub
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with the latest exploits, research, OWASP Top 10, and expert insights.
        </p>
      </header>

      {/* Section 1: World-Class Cybersecurity Blogs */}
      <section>
        <SectionTitle className="md:text-left">World-Class Cybersecurity Blogs</SectionTitle>
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

      {/* Section 2: OWASP Top 10 */}
      <section>
        <SectionTitle className="md:text-left">🛡️ OWASP Top 10 - 2021</SectionTitle>
        <p className="mb-6 text-muted-foreground md:text-left text-center">
          The OWASP Top 10 is a standard awareness document for developers and web application security.
          It represents a broad consensus about the most critical security risks to web applications.
          <Button variant="link" asChild className="p-1 ml-1 text-accent">
            <Link href={owaspGeneralLink} target="_blank" rel="noopener noreferrer">
               Learn more <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {owaspTop10.map((item) => (
            <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {item.icon && <item.icon className="h-8 w-8 text-destructive" />}
                  <CardTitle className="text-xl text-destructive">{item.code}: {item.title}</CardTitle>
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

      {/* Section 3: Research & Framework Hubs */}
      <section>
        <SectionTitle className="md:text-left">📚 Research & Framework Hubs</SectionTitle>
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

      {/* Section 4: Community-Powered News Feeds */}
      <section>
        <SectionTitle className="md:text-left">🌐 Community-Powered News Feeds</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityFeeds.map((feed) => (
            <Card key={feed.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-primary">{feed.name}</CardTitle>
                {feed.icon && <feed.icon className="h-6 w-6 text-accent" />}
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3">
                  Community discussions and news from Reddit.
                </p>
                <Button asChild variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={feed.url} target="_blank" rel="noopener noreferrer">
                    View Feed <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
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
