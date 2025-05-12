import { Button } from "@/components/ui/button";
import type { ContactLink, contactDetails as ContactDetailsType } from "@/data/portfolioData";
import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { Smartphone, Mail } from "lucide-react";

interface ContactSectionProps {
  contactLinks: ContactLink[];
  contactDetails: typeof ContactDetailsType;
}

export function ContactSection({ contactLinks, contactDetails }: ContactSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
        <p className="text-muted-foreground mb-6">
          Feel free to reach out via email, phone, or social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="space-y-4 mb-8">
          {contactDetails.email && (
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-accent" />
              <a href={`mailto:${contactDetails.email}`} className="text-foreground hover:text-primary transition-colors">
                {contactDetails.email}
              </a>
            </div>
          )}
          {contactDetails.phone && (
            <div className="flex items-center">
              <Smartphone className="h-5 w-5 mr-3 text-accent" />
              <span className="text-foreground">{contactDetails.phone}</span>
            </div>
          )}
        </div>
        
        <h4 className="text-lg font-medium text-primary mb-3">Connect with me:</h4>
        <div className="flex space-x-4">
          {contactLinks.map((link) => (
            <Button key={link.name} asChild variant="outline" size="icon" className="rounded-full hover:border-accent hover:text-accent">
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
      
      <ContactForm />
    </div>
  );
}
