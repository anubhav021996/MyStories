import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: "blog" },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CommentModel =
  mongoose.models.comment || mongoose.model("comment", commentSchema);

export default CommentModel;
