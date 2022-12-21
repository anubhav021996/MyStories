const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String , required: [true, "Please provide a name"]},
    email: {type: String , required: [true, "Please provide an email"], unique: true},
    password: {type: String, required: [true, "Please provide the passwod"], maxLength:7},
    age: {type: Number}
},
{
    versionKey: false,
    timestamps : true
});

const UserModel = mongoose.models.user || mongoose.model("user" , userSchema);

module.exports = UserModel;