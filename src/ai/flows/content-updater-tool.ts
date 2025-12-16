'use server';

/**
 * @fileOverview A GenAI tool to generate content for the portfolio, allowing users to easily update their profile, skills, and projects.
 *
 * - generatePortfolioContent - A function that generates content for the portfolio.
 * - PortfolioContentInput - The input type for the generatePortfolioContent function.
 * - PortfolioContentOutput - The return type for the generatePortfolioContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioContentInputSchema = z.object({
  contentType: z
    .enum(['profile', 'skills', 'projects'])
    .describe('The type of content to generate: profile, skills, or projects.'),
  topic: z.string().describe('The specific topic or keywords for the content.'),
  style: z
    .string()
    .optional()
    .describe('The desired style or tone of the content (e.g., modern, professional).'),
  example: z
    .string()
    .optional()
    .describe('Example content to base the generation off of.'),
});
export type PortfolioContentInput = z.infer<typeof PortfolioContentInputSchema>;

const PortfolioContentOutputSchema = z.object({
  content: z.string().describe('The generated content for the specified type.'),
});
export type PortfolioContentOutput = z.infer<typeof PortfolioContentOutputSchema>;

export async function generatePortfolioContent(
  input: PortfolioContentInput
): Promise<PortfolioContentOutput> {
  return generatePortfolioContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioContentPrompt',
  input: {schema: PortfolioContentInputSchema},
  output: {schema: PortfolioContentOutputSchema},
  prompt: `You are a helpful assistant that generates content for a portfolio.

  You will receive a content type, a topic, a style, and an optional example. You will then generate content for the portfolio based on these inputs.

  Content Type: {{{contentType}}}
  Topic: {{{topic}}}
  Style: {{{style}}}
  Example: {{{example}}}

  Content:`,
});

const generatePortfolioContentFlow = ai.defineFlow(
  {
    name: 'generatePortfolioContentFlow',
    inputSchema: PortfolioContentInputSchema,
    outputSchema: PortfolioContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
