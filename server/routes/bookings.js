const express = require("express");
const User = require("../models/user");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const mongoose = require("mongoose");

router.route("/").get((req, res, next) => {
  res.send("booking endpoint");
});

router.get("/:uid", requireAuth, async (req, res) => {
  try {
    const photographer = await User.findById(req.params.uid);
    const bookings = photographer.bookings;
    res.json({ bookings });
  } catch (error) {
    console.error(error);
  }
});

router.post("/:uid", async (req, res) => {
  const { name, email, phone, date, location, time, comments } = req.body;

  try {
    const book = await User.findByIdAndUpdate(
      req.params.uid,
      {
        $push: {
          bookings: {
            name,
            email,
            phone,
            date,
            location,
            time,
            comments,
          },
        },
      },
      {
        new: true,
      }
    );
    if (!book) {
      return res.status(404).send("User not found");
    }
    res.status(200);
    res.json("Book Success");
  } catch (err) {
    res.send(err);
  }
});
 
router.delete("/:uid/:bookingId", requireAuth, async (req, res) => {
  try {
    const { uid, bookingId } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(bookingId);

    if (!isValidObjectId) {
      return res.status(400).send("Invalid booking ID");
    }

    const updatedUser = await User.findByIdAndUpdate(
      uid,
      { $pull: { bookings: { _id: bookingId } } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.status(200).json("Booking deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
