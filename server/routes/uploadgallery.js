const express = require("express");
const router = express.Router();
const User = require("../models/user");
const galleryupload = require("../middleware/galleryUpload");
const requireAuth = require("../middleware/requireAuth");

router.route("/").get((req, res, next) => {
  res.send("gallery upload endpoint");
});

router.post(
  "/:uid",
  galleryupload.single("newImage"),
  requireAuth,
  async (req, res) => {
    try {
      const photo = await User.findByIdAndUpdate(
        req.params.uid,
        {
          $push: {
            photos: `galleryuploads/${req.file.filename}`,
          },
        },
        {
          new: true,
        }
      );

      res.status(200);
      res.json("Upload Success");
    } catch (err) {
      res.send(err);
    }
  }
);

module.exports = router;
