const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const requireAuth = require("../middleware/requireAuth");

router.get("/", async (req, res) => {
  try {
    const photographers = await User.find()
      .select("-password")
      .select("-bookings");
    res.status(200).json(photographers);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
}); 

router.get("/:uid", async (req, res) => {
  try {
    User.findById(req.params.uid)
      .select("-password")
      .select("-bookings")
      .then((user) => {
        return res.status(200).json(user);
      });
  } catch (err) {
    console.log(err);
    res.status(404);
  }
});

router.put("/:uid/edit", requireAuth, async (req, res) => {
  const { bio, password, fullname } = req.body;

  const encryptedpass = await bcrypt.hash(password, 12);

  if (!password) {
    return res.status(422).json({ error: "Please enter a new password" });
  }

  if (password.length < 7) {
    return res
      .status(423)
      .json({ error: "Password must be atleast 7 characters" });
  }

  try {
    const updatePhotographer = await User.updateOne(
      { _id: req.params.uid },
      { $set: { password: encryptedpass, bio, fullname } }
    );

    res.json(JSON.stringify(updatePhotographer));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
