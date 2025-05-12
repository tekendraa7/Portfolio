"use server";

import { z } from "zod";
import { linuxCybersecurityNetworkingQA as genAIQuery } from "@/ai/flows/linux-cybersecurity-networking-qa";
import type { LinuxCybersecurityNetworkingQAInput, LinuxCybersecurityNetworkingQAOutput } from "@/ai/flows/linux-cybersecurity-networking-qa";


// Schema for contact form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real app, you'd send an email or save to a database here.
  // For this example, we'll just log it and simulate success.
  console.log("Contact form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}


// Action for AI Q&A
export async function askAI(
  input: LinuxCybersecurityNetworkingQAInput
): Promise<LinuxCybersecurityNetworkingQAOutput | { error: string }> {
  try {
    const result = await genAIQuery(input);
    return result;
  } catch (error) {
    console.error("Error calling AI flow:", error);
    return { error: "Sorry, I couldn't process your question right now. Please try again later." };
  }
}
