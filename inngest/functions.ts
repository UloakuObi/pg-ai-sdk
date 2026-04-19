// src/inngest/functions.ts
import { inngest } from "./client";
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

// export const processTask = inngest.createFunction(
//   { id: "process-task", triggers: { event: "app/task.created" } },
//   async ({ event, step }) => {
//     const result = await step.run("handle-task", async () => {
//       return { processed: true, id: event.data.id };
//     });

//     await step.sleep("pause", "1s");

//     return { message: `Task ${event.data.id} complete`, result };
//   }
// );

/**
 * 
 * export const generateText = inngest.createFunction(
 * {})
*/

export const generate = inngest.createFunction(
  {
    id: "generateText", triggers: {event: "app/text.generate"}
  },
  async({event, step}) => {
    const response =  await generateText({
        model: google('gemini-2.5-flash'),
        prompt: 'Write a vegetarian lasagna recipe for 4 people.',
    });

    await step.sleep("pause", "1s");

    return { message: `Task ${event.data.id} complete`, response };
  }


)
