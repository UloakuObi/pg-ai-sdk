import { inngest } from "@/inngest/client";

export async function POST(req: Request) {

    await inngest.send({
    name: "app/task.created",
    data: { id: "task_generate_text" },
  });

  return Response.json({ status: "started" })
}