import Blog from "../../models/Blog";
import dbConnect from "../../lib/db.js";

const handler = async (req, res) => {
  try {
    await dbConnect();
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
  if (req.method === "POST") {
    try {
      let blog = await Blog.create(req.body);
      blog.save();
      return res.status(201).send(blog);
    } catch (error) {
      return res.status(500).send(error);
    }
  } else if (req.method === "GET" && req.query.id) {
    try {
      console.log(req.query.id);
      //   console.log(req.params.id);
      let blog = await Blog.findById(req.query.id).populate("userId");
      return res.status(200).send(blog);
    } catch (error) {
      return res.status(500).send(error);
    }
  } else if (req.method == "GET") {
    try {
      let blogs = await Blog.find().populate("userId");
      return res.status(200).send(blogs);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  } else if (req.method === "PATCH") {
    try {
      let blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      }).populate("userId");
      blog.save();
      return res.status(201).send(blog);
    } catch (error) {
      return res.status(500).send(error);
    }
  } else if (req.method === "DELETE") {
    try {
      let blog = await Blog.findByIdAndDelete(req.params.id);
      return res.status(201).send({ message: "blog deleted successfully" });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
};

export default handler;
