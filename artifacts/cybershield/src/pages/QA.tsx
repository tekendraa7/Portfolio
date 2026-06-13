import { SectionTitle } from "@/components/ui/SectionTitle";
import { ChatInterface } from "@/components/qa/ChatInterface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Cpu, Network, ShieldAlert } from "lucide-react";

const suggestedQuestions = [
  "What is the CIA Triad in cybersecurity?",
  "How does a man-in-the-middle attack work?",
  "What are the differences between TCP and UDP?",
  "Explain the OSI model layers.",
  "What is SQL injection and how to prevent it?",
  "How does asymmetric encryption work?",
  "What is a firewall and how does it protect a network?",
  "What is the difference between IDS and IPS?",
];

export default function QA() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center space-y-4">
        <SectionTitle className="text-center">AI-Powered Q&amp;A Assistant</SectionTitle>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Ask any question about Cybersecurity, Linux, or Networking. Powered by Gemini AI.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ChatInterface />
        </div>

        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Bot className="h-5 w-5" /> Suggested Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestedQuestions.map((q, i) => (
                <p key={i} className="text-sm text-muted-foreground border rounded-md px-3 py-2 hover:border-primary hover:text-primary cursor-default transition-colors">
                  {q}
                </p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary text-sm">Topics Covered</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {[
                { label: "Cybersecurity", icon: ShieldAlert },
                { label: "Linux", icon: Cpu },
                { label: "Networking", icon: Network },
              ].map(({ label, icon: Icon }) => (
                <Badge key={label} variant="secondary" className="flex items-center gap-1">
                  <Icon className="h-3 w-3" /> {label}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
