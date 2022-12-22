import CommentModel from "../../models/Comment";

import dbConnect from "../../lib/db";

const commentHandler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const comments = await CommentModel.find();
        return res.status(200).send({ comments });
      } catch (error) {
        return res.status(500).send(error);
      }
    case "POST":
      try {
        const comment = await CommentModel.create(req.body);
        return res.status(200).send(comment);
      } catch (error) {
        return res.status(500).send(error);
      }
    default:
      return res.status(500).send({ message: "Something went wrong" });
  }
};

export default commentHandler;
