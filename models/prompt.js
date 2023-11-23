import { Schema, models, model } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tags: {
    type: Array,
    required: [true, "Tags is required."],
  },
  createdAt: {
    type: Date,
  },
  isActive: {
    type: Boolean,
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
