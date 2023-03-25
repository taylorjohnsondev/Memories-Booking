const express = require("express");
const router = express.Router();
const authRouter = require("./loginregister");
const photoRouter = require("./photographers");
const avatarRouter = require("./uploadavatar");
const bookingRouter = require("./bookings");

router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/auth", authRouter);
router.use("/photographers", photoRouter);
router.use("/upload", avatarRouter);
router.use("/book", bookingRouter);

module.exports = router;
