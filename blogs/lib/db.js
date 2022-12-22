const mongoose = require("mongoose");
import dotenv from "dotenv"
dotenv.config()
const connect = async () => {
  return mongoose.connect(process.env.MONGO_URI);
};

export default connect;
