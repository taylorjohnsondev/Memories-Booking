const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_image: { type: String, default: "/default.jpg" },
  bio: {
    type: String,
    default: "No bio yet",
  },
  photos: [
    {
      type: ObjectId,
    },
  ],
});

module.exports = User = mongoose.model("user", userSchema);
