const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
});

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
  location: { type: String, default: "No location set" },
  bio: {
    type: String,
    default: "No bio yet",
  },
  photos: [
    {
      type: String,
    },
  ],
  bookings: [bookingSchema],
  reviews: [reviewSchema],
});

module.exports = User = mongoose.model("user", userSchema);
