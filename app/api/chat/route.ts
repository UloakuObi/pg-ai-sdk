import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { inngest } from "@/inngest/client"


export async function POST(req: Request) {
 
  const response =  await generateText({
  model: google('gemini-2.5-flash'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});

  return Response.json({ response })
  
}




