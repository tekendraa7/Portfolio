
'use server';
/**
 * @fileOverview A conversational AI chat flow.
 *
 * - conversationalChat - A function to handle chat interactions.
 * - ConversationalChatInput - The input type for the conversationalChat function.
 * - ConversationalChatOutput - The return type for the conversationalChat function.
 * - ChatMessage - The structure for individual messages in the history.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type {MessageData} from 'genkit'; // Import MessageData

export const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

export const ConversationalChatInputSchema = z.object({
  currentMessage: z.string().describe('The latest message from the user.'),
  history: z.array(ChatMessageSchema).optional().describe('The conversation history.'),
});
export type ConversationalChatInput = z.infer<typeof ConversationalChatInputSchema>;

export const ConversationalChatOutputSchema = z.object({
  reply: z.string().describe('The AI-generated reply.'),
});
export type ConversationalChatOutput = z.infer<typeof ConversationalChatOutputSchema>;

export async function conversationalChat(input: ConversationalChatInput): Promise<ConversationalChatOutput> {
  return conversationalChatFlow(input);
}

const conversationalChatFlow = ai.defineFlow(
  {
    name: 'conversationalChatFlow',
    inputSchema: ConversationalChatInputSchema,
    outputSchema: ConversationalChatOutputSchema,
  },
  async (input) => {
    const messages: MessageData[] = [];

    messages.push({
      role: 'system',
      content: [{ text: "You are a friendly and helpful AI assistant. Your expertise includes Linux, Cybersecurity, and Networking. Provide clear, accurate, and up-to-date answers. You can include command examples and learning resources when it's helpful. Keep your responses concise and easy to understand." }],
    });

    if (input.history) {
      input.history.forEach((turn) => {
        // Ensure content is an array of Part objects, in this case, a single text Part
        messages.push({ role: turn.role, content: [{ text: turn.content }] });
      });
    }

    messages.push({ role: 'user', content: [{ text: input.currentMessage }] });

    const llmResponse = await ai.generate({
      messages: messages, // Use 'messages' for chat-style interaction
      config: {
        temperature: 0.7,
      },
      // Example safety settings (adjust as needed)
      // safetySettings: [
      //   {
      //     category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      //     threshold: 'BLOCK_ONLY_HIGH',
      //   },
      // ],
    });

    return { reply: llmResponse.text ?? "Sorry, I couldn't generate a response at this moment." };
  }
);
