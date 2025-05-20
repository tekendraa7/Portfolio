
"use client";

import { useFormStatus } from "react-dom"; // useFormStatus is still from react-dom
import { useActionState, useEffect } from "react"; // useActionState is from react
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const initialState: ContactFormState = { message: "", success: false };
  // Updated to useActionState
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset(); // Reset form on successful submission
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to send message.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);
  
  // Update form errors from server action
  useEffect(() => {
    if (state.errors?.name) form.setError("name", { type: "server", message: state.errors.name.join(', ') });
    if (state.errors?.email) form.setError("email", { type: "server", message: state.errors.email.join(', ') });
    if (state.errors?.message) form.setError("message", { type: "server", message: state.errors.message.join(', ') });
  }, [state.errors, form]);


  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Send me a message</CardTitle>
        <CardDescription>I'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...form.register("name")}
              className={form.formState.errors.name ? "border-destructive" : ""}
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className={form.formState.errors.email ? "border-destructive" : ""}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              rows={5}
              className={form.formState.errors.message ? "border-destructive" : ""}
            />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>
          
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
