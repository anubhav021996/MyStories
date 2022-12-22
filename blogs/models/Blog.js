import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String },
    topic: { type: String, required: true },
    date: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.models.blog || mongoose.model("blog", blogSchema);
