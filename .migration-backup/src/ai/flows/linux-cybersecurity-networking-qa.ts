// Use server directive is required to run in Edge runtime.
'use server';

/**
 * @fileOverview An AI agent to answer questions about Linux, Cybersecurity, and Networking.
 *
 * - linuxCybersecurityNetworkingQA - A function that handles the question answering process.
 * - LinuxCybersecurityNetworkingQAInput - The input type for the linuxCybersecurityNetworkingQA function.
 * - LinuxCybersecurityNetworkingQAOutput - The return type for the linuxCybersecurityNetworkingQA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LinuxCybersecurityNetworkingQAInputSchema = z.object({
  question: z.string().describe('The user question about Linux, cybersecurity, or networking.'),
});
export type LinuxCybersecurityNetworkingQAInput = z.infer<typeof LinuxCybersecurityNetworkingQAInputSchema>;

const LinuxCybersecurityNetworkingQAOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user question.'),
});
export type LinuxCybersecurityNetworkingQAOutput = z.infer<typeof LinuxCybersecurityNetworkingQAOutputSchema>;

export async function linuxCybersecurityNetworkingQA(input: LinuxCybersecurityNetworkingQAInput): Promise<LinuxCybersecurityNetworkingQAOutput> {
  return linuxCybersecurityNetworkingQAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'linuxCybersecurityNetworkingQAPrompt',
  input: {schema: LinuxCybersecurityNetworkingQAInputSchema},
  output: {schema: LinuxCybersecurityNetworkingQAOutputSchema},
  prompt: `You are an AI-powered chatbot specializing in Linux, cybersecurity, and networking.  Answer the following question to the best of your ability.\n\nQuestion: {{{question}}}`,
});

const linuxCybersecurityNetworkingQAFlow = ai.defineFlow(
  {
    name: 'linuxCybersecurityNetworkingQAFlow',
    inputSchema: LinuxCybersecurityNetworkingQAInputSchema,
    outputSchema: LinuxCybersecurityNetworkingQAOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
