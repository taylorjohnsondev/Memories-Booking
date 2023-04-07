const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  const auth = req.get("authorization");
  if (!auth) {
    return res.status(401).json({ error: "Please login to use this route" });
  }
  const token = auth.replace("Bearer ", "");
  jwt.verify(token,     process.env.JWT_SECRET 
    , (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "Please login to use this route" });
    }
    const { id } = payload;
    User.findById(id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
