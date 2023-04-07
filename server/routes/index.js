const express = require("express");
const router = express.Router();
const authRouter = require("./loginregister");
const photoRouter = require("./photographers");
const avatarRouter = require("./uploadavatar");
const bookingRouter = require("./bookings");
const reviewRouter = require("./reviews");
const galleryRouter = require("./uploadgallery");
const locationRouter = require("./photographerlocations");

router.get("/api", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/auth", authRouter);
router.use("/photographers", photoRouter);
router.use("/upload", avatarRouter);
router.use("/book", bookingRouter);
router.use("/review", reviewRouter);
router.use("/gallery", galleryRouter);
router.use("/location", locationRouter);

module.exports = router;
