import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { prompt, tags, userId } = await req.json();

  try {
    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      tags,
      prompt,
      createdAt: new Date(),
      isActive: false,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
