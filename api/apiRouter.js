const express = require("express");
const server = require("../server");

const router = express.Router();

router.get("/", (req, res) => res.send("API!"));

module.exports = router;