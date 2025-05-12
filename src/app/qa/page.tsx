import { SectionTitle } from "@/components/ui/SectionTitle";
import { ChatInterface } from "@/components/qa/ChatInterface";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BotMessageSquareIcon } from "lucide-react";

export default function QAPage() {
  return (
    <div className="space-y-8 flex flex-col items-center">
      <SectionTitle>AI-Powered Q&amp;A</SectionTitle>
      <Card className="w-full max-w-3xl shadow-xl">
        <CardHeader className="text-center">
          <BotMessageSquareIcon className="h-12 w-12 text-primary mx-auto mb-2" />
          <CardTitle className="text-2xl">Cybersecurity & Tech Chatbot</CardTitle>
          <CardDescription>
            Ask me anything about Linux, Cybersecurity, or Networking. I'll do my best to provide helpful answers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChatInterface />
        </CardContent>
      </Card>
    </div>
  );
}
