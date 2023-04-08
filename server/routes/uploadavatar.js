const express = require("express");
const router = express.Router();
const User = require("../models/user");
const upload = require("../middleware/avatarUpload");
const requireAuth = require("../middleware/requireAuth");

router.route("/").get((req, res, next) => {
  res.send("upload endpoint");
});

router.put(
  "/:uid",
  upload.single("newImage"),
  requireAuth,
  async (req, res) => {
    try {
      const updateAvatar = await User.findByIdAndUpdate(
        {
          _id: req.params.uid,
        },
        {
          profile_image: `/uploads/${req.file.filename}`,
        },
        {
          new: true,
        }
      );
      res.send("Successful");
    } catch (error) {
      res.send("Failed");
    }
  }
);

module.exports = router;
