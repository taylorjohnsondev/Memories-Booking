const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.route("/").get((req, res, next) => {
  res.send("review endpoint");
});

router.get("/:uid", async (req, res) => {
  try {
    const photographer = await User.findById(req.params.uid);
    const reviews = photographer.reviews;
    res.json({ reviews }); 
  } catch (error) {
    console.error(error);
  }
});

router.post("/:uid", async (req, res) => {
  const { name, comment, stars } = req.body;

  try {
    const review = await User.findByIdAndUpdate(
      req.params.uid,
      {
        $push: {
          reviews: {
            name,
            comment,
            stars,
          },
        },
      },
      {
        new: true,
      }
    );
    if (!review) {
      return res.status(404).send("User not found");
    }
    if (!name || !comment || !stars) {
      return res.status(422).json({ error: "All fields not filled" });
    }
    res.status(200);
    res.json("Review Sucessfully Posted");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
