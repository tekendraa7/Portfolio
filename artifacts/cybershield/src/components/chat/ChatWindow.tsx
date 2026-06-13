import { useState, useRef, useEffect, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Send, User, Bot, Loader2, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}

export function ChatWindow() {
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
    const currentInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      const historyForApi = messages.map(msg => ({
        role: msg.sender === "user" ? "user" : "model" as "user" | "model",
        content: msg.text,
      }));

      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentMessage: currentInput, history: historyForApi }),
      });
      const data = await response.json();
      const aiMessage: Message = {
        id: Date.now().toString() + "-ai",
        sender: "ai",
        text: data.reply || data.error || "An unexpected error occurred.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [...prev, {
        id: Date.now().toString() + "-error",
        sender: "ai",
        text: "Sorry, something went wrong. Please try again.",
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[60vh] sm:h-[70vh] max-h-[500px] sm:max-h-[600px] w-full bg-transparent text-card-foreground rounded-lg">
      <div className="p-4 border-b flex items-center gap-2">
        <Bot className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Cyber Assistant</h3>
      </div>
      <ScrollArea className="flex-grow p-4 space-y-4" ref={scrollAreaRef}>
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-6 text-center">
            <MessageSquare className="h-12 w-12 mb-4 text-primary/70" />
            <p className="text-sm">Hi there! Ask me anything about Cybersecurity, Linux, or Networking.</p>
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
              <Avatar className="h-8 w-8 bg-secondary p-1.5 rounded-full">
                <Bot className="h-full w-full text-primary" />
              </Avatar>
            )}
            <div
              className={cn(
                "max-w-[75%] sm:max-w-[70%] rounded-lg px-3 py-2 text-sm shadow-md",
                message.sender === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-secondary text-secondary-foreground rounded-bl-none"
              )}
            >
              <p className="whitespace-pre-wrap break-words">{message.text}</p>
              <p className={cn("text-xs mt-1 opacity-70", message.sender === 'user' ? 'text-right' : 'text-left')}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            {message.sender === "user" && (
              <Avatar className="h-8 w-8 bg-muted/50 p-1.5 rounded-full">
                <User className="h-full w-full text-muted-foreground" />
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center justify-start gap-2 mb-4">
            <Avatar className="h-8 w-8 bg-secondary p-1.5 rounded-full">
              <Bot className="h-full w-full text-primary" />
            </Avatar>
            <div className="max-w-[70%] rounded-lg px-4 py-3 bg-secondary text-secondary-foreground shadow-md">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="border-t p-3 flex items-center gap-2 bg-background/70 rounded-b-lg">
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow bg-background/50 focus:ring-primary focus:border-primary"
          disabled={isLoading}
          autoComplete="off"
        />
        <Button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          size="icon"
          className="rounded-full w-10 h-10"
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
