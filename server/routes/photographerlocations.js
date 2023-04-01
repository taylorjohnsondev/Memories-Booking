const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/:location", async (req, res) => {
  const users = await User.find({ location: req.params.location })
    .select("-password")
    .select("-bookings");
  res.json(users); 
});

module.exports = router;
