import CommentModel from "../../models/Comment";

import dbConnect from "../../lib/db";

const commentHandler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (req.query.id) {
            console.log("here")
            console.log(req.query.id)
          const comments = await CommentModel.find({ blogId: req.query.id });

          return res.status(200).send({ comments });
        } else {
          const comments = await CommentModel.find();

          return res.status(200).send({ comments });
        }
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
    case "DELETE":
      try {
        const comment = await CommentModel.findOne({ _id: req.body.commentId });

        if (comment.userId == req.body.userId) {
          const deleted_comment = await CommentModel.findByIdAndDelete(
            comment._id
          );
          return res.status(200).send(deleted_comment);
        } else {
          return res.status(401).send({ message: "Unauthorized" });
        }
      } catch (error) {
        return res
          .status(500)
          .send({ message: "Something went terribly worng" });
      }
    default:
      return res.status(500).send({ message: "Something went wrong" });
  }
};

export default commentHandler;
