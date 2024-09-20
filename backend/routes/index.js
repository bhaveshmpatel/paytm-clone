const express = require("express");
const userRouter = require("./user");

const router = express.Router();

module.use("/user", userRouter);

module.exports = router;

