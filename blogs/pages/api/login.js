import UserModel from "../../models/User";
import dbConnect from "../../lib/db";
const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  await dbConnect();
  try {
    if (req.method === "POST") {
      let user = await UserModel.findOne({ email: req.body.email });
      if (user) {
        if (
          req.body.email === user.email &&
          req.body.password === user.password
        ) {
          // console.log("user", user);
          let token = jwt.sign(
            {
              success: true,
              message: "User Login Successfully",
              email: user.email,
              name: user.name,
            },
            "SECRET1996",
            { expiresIn: "7 days" }
          );
          console.log(token);
          let refreshToken = jwt.sign(
            {
              success: true,
              message: "User Login Successfully",
              email: user.email,
              name: user.name,
            },
            "NEWSECRET1995",
            { expiresIn: "28 days" }
          );
          res.status(200).json({ token, refreshToken });
        } else {
          res
            .status(400)
            .json({ success: false, message: "Invalid Credentials" });
        }
      } else {
        res.status(400).json({ success: false, message: "No user found" });
      }
    } else {
      res.status(400).json({ success: false, message: "User Login Failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default handler;
