import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, ArrowRight, Mail, Rss } from "lucide-react";
import { blogPostsData } from "@/data/portfolioData";
import { useToast } from "@/hooks/use-toast";

export default function Blog() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Subscribed!",
      description: `You'll get updates at ${email}. Thanks for subscribing!`,
    });
    setEmail("");
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-16 max-w-5xl">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          Blog & Writings
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto">
          Writeups, guides, and thoughts on cybersecurity, Linux, tools, and student life in tech.
        </p>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-lg shadow-primary/5">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary mb-2">
                <Rss className="h-5 w-5" />
                <span className="font-semibold text-sm uppercase tracking-wide">Newsletter</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Stay in the Loop</h3>
              <p className="text-muted-foreground text-sm">
                Get new posts on cybersecurity, Linux, and tech delivered straight to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto min-w-[300px]">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="gap-1.5 shrink-0">
                <Mail className="h-4 w-4" /> Subscribe
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPostsData.map((post) => (
            <Card
              key={post.id}
              className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/60 backdrop-blur-sm flex flex-col cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                  <span>{post.date}</span>
                  <span>·</span>
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
