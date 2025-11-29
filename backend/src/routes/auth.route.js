/** @format */

import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Signed up successfully");
});

router.get("/signin", (req, res) => {
  res.send("Signed in successfully");
});

router.get("/signout", (req, res) => {
  res.send("Signed out successfully");
});

export default router;
