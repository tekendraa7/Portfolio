
"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { askAI } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { MatrixBackground } from "@/components/portfolio/MatrixBackground";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector("div[data-radix-scroll-area-viewport]");
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString() + "-user",
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    const aiResponse = await askAI({ question: userMessage.text });
    
    let aiMessageText: string;
    if ('answer' in aiResponse) {
        aiMessageText = aiResponse.answer;
    } else {
        aiMessageText = aiResponse.error || "An unexpected error occurred.";
    }

    const aiMessage: Message = {
      id: Date.now().toString() + "-ai",
      sender: "ai",
      text: aiMessageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="relative flex flex-col h-[60vh] max-h-[700px] border rounded-lg shadow-sm bg-card overflow-hidden">
      <MatrixBackground className="absolute inset-0 w-full h-full opacity-20" />
      <div className="relative z-10 flex flex-col h-full">
        <ScrollArea className="flex-grow p-4 space-y-4" ref={scrollAreaRef}>
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <Bot className="h-16 w-16 mb-4" />
              <p>No messages yet. Start the conversation!</p>
            </div>
          )}
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-end gap-2 mb-4",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.sender === "ai" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-[70%] rounded-lg px-4 py-2 text-sm shadow",
                  message.sender === "user"
                    ? "bg-primary/80 text-primary-foreground"
                    : "bg-secondary/80 text-secondary-foreground"
                )}
              >
                <p style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                <p className={cn("text-xs mt-1", message.sender === 'user' ? 'text-primary-foreground/70 text-right' : 'text-muted-foreground/70 text-left')}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.sender === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center justify-start gap-2 mb-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
              </Avatar>
              <div className="max-w-[70%] rounded-lg px-4 py-3 bg-secondary/80 text-secondary-foreground shadow">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
        </ScrollArea>
        <form onSubmit={handleSubmit} className="border-t p-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm">
          <Input
            type="text"
            placeholder="Type your question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow bg-transparent"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !inputValue.trim()} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
