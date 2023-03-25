const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.route("/").get((req, res, next) => {
  res.send("booking endpoint");
});

router.post("/:uid", async (req, res) => {
  const { name, email, phone, date, time, comments } = req.body;

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
    res.json(book);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
