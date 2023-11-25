import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req) => {
  try {
    const searchParams = new URLSearchParams(req.nextUrl.searchParams);
    const search = searchParams.get("search") || null;
    await connectToDB();

    let prompts = null;
    if (search) {
      prompts = await Prompt.find({ isActive: true, tags: search })
        .sort({ createdAt: -1 })
        .populate("creator");
    } else {
      prompts = await Prompt.find({ isActive: true })
        .sort({ createdAt: -1 })
        .populate("creator");
    }
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
