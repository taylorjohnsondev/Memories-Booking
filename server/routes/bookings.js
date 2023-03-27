const express = require("express");
const User = require("../models/user");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

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

module.exports = router;
