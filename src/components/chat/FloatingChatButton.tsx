
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogPortal
} from "@/components/ui/dialog";
import { ChatWindow } from "./ChatWindow";
import { MessageSquare, X, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className={cn(
            "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg btn-cyberpunk-hover-glow-primary",
            "bg-primary text-primary-foreground border-2 border-primary/50 hover:bg-primary/90",
            "flex items-center justify-center transition-all duration-300 ease-in-out",
            isOpen ? "scale-90 opacity-0 pointer-events-none" : "scale-100 opacity-100"
          )}
          aria-label="Open chat"
        >
          <Bot className="h-7 w-7" />
        </Button>
      </DialogTrigger>
      <DialogPortal>
        {/* DialogOverlay is part of ShadCN DialogContent now and might not be needed explicitly or causes issues if used like this.
            If DialogContent manages its own overlay, this can be removed.
            Keeping it for now to see if it's handled correctly by ShadCN's Dialog.
        */}
        {/* <DialogOverlay className="bg-black/60 backdrop-blur-sm" /> */}
        <DialogContent 
          className={cn(
            "fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 p-0 w-full max-w-md h-[80vh] sm:h-auto sm:max-h-[calc(100vh-3rem)] rounded-t-lg sm:rounded-lg shadow-2xl border-2 border-primary bg-background flex flex-col",
            "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-full sm:data-[state=open]:slide-in-from-right-full data-[state=open]:duration-500",
            "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full sm:data-[state=closed]:slide-out-to-right-full data-[state=closed]:duration-300"
          )}
          onInteractOutside={(e) => {
            // Allow interaction inside the dialog
            // e.preventDefault(); // This might prevent closing, depending on exact needs
          }}
          hideCloseButton // We'll use a custom close button or let header handle it
        >
          <ChatWindow />
           <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground z-10 h-8 w-8"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

// Helper to hide Dialog's default close button if needed
declare module "@radix-ui/react-dialog" {
  interface DialogContentProps {
    hideCloseButton?: boolean;
  }
}
