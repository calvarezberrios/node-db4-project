const express = require("express");
const server = require("../server");

const recipesRouter = require("./recipes/recipesRouter.js");
const ingredientsRouter = require("./ingredients/ingredientsRouter.js");

const router = express.Router();

router.get("/", (req, res) => res.send("API!"));

router.use("/ingredients", ingredientsRouter);

router.use("/recipes", recipesRouter);

module.exports = router;