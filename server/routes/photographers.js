const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const requireAuth = require("../middleware/requireAuth");
const { ObjectId } = require("mongodb");

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

router.get("/:location", async (req, res) => {
  const users = await User.find({ location: req.params.location });
  res.json(users);
});

router.put("/:uid/edit", requireAuth, async (req, res) => {
  const { bio, password, fullname, location } = req.body;

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
      { $set: { password: encryptedpass, bio, fullname, location } }
    );

    res.json(JSON.stringify(updatePhotographer));
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:uid", requireAuth, async (req, res) => {
  const uid = req.params.uid;

  try {
    const result = await User.deleteOne({ _id: new ObjectId(uid) });
    console.log(result);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting user");
  }
});
module.exports = router; 
