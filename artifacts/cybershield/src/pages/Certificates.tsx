import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Download, ExternalLink, Hash } from "lucide-react";
import { certificatesData } from "@/data/portfolioData";

export default function Certificates() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12 max-w-4xl">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          Certificates
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto">
          Verified credentials from courses and platforms I've completed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <Card
            key={cert.id}
            className="group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/60 backdrop-blur-sm flex flex-col"
          >
            <CardHeader className="pb-3">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-base text-foreground leading-snug group-hover:text-primary transition-colors">
                {cert.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{cert.issuer}</Badge>
                </div>
                <p className="text-muted-foreground text-xs">{cert.date}</p>
                {cert.credentialId && (
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Hash className="h-3.5 w-3.5" />
                    <span>{cert.credentialId}</span>
                  </div>
                )}
              </div>
              <div className="flex gap-2 pt-2 border-t border-border/50">
                <Button asChild size="sm" variant="outline" className="gap-1.5 flex-1 hover:border-primary">
                  <a href={cert.pdfPath} download>
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="gap-1.5 flex-1 hover:border-accent">
                  <a href={cert.pdfPath} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5" /> View
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-dashed border-2 border-border/50 hover:border-primary/40 transition-colors duration-300 flex items-center justify-center min-h-[200px] bg-muted/20">
          <CardContent className="text-center p-6">
            <Award className="h-8 w-8 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">More certificates coming soon</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
