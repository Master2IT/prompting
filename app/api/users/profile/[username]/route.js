import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { username } = params;
  try {
    await connectToDB();

    if (!username)
      return new Response("Username is required!", { status: 403 });

    const user = await User.findOne({ username });

    if (!user) return new Response("User not found!", { status: 404 });

    const prompts = await Prompt.find({
      creator: user._id,
    })
      .sort({ createdAt: -1 })
      .populate("creator");

    return new Response(
      JSON.stringify({
        prompts,
        user,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Failed to fetch user prompts!", { status: 500 });
  }
};
