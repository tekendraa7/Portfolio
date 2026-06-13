import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { contactLinks, contactDetails } from "@/data/portfolioData";
import { ContactForm } from "@/components/portfolio/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12 max-w-4xl">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a tech chat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Contact Information</h2>

          <div className="space-y-4">
            <Card className="hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <a href={`mailto:${contactDetails.email}`} className="text-foreground hover:text-primary transition-colors text-sm font-medium">
                    {contactDetails.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/40 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                  <p className="text-foreground text-sm font-medium">{contactDetails.location}</p>
                </div>
              </CardContent>
            </Card>

            {contactDetails.phone && (
              <Card className="hover:border-primary/40 transition-colors">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                    <p className="text-foreground text-sm font-medium">{contactDetails.phone}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">Social Links</h3>
            <div className="flex gap-3">
              {contactLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:border-primary hover:text-primary transition-all"
                >
                  <a href={link.url} target={link.name !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
