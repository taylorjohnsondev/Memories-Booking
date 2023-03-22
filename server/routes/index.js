const express = require("express");
const router = express.Router();
const authRouter = require("./loginregister");
const photoRouter = require("./photographers");

router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/auth", authRouter);
router.use("/photographers", photoRouter);

module.exports = router;
