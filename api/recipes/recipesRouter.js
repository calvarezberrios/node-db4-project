const express = require("express");

const recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res, next) => {
    recipes.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(() => next({ code: 500, message: "Error retrieving recipes from database" }));
});

router.get("/:id/shoppingList", (req, res, next) => {
    const { id } = req.params;

    recipes.getShoppingList(id)
        .then(list => res.status(200).json(list))
        .catch(() => next({ code: 500, message: "Error retrieving recipe ingredients" }));
});

router.get("/:id/instructions", (req, res, next) => {
    const { id } = req.params;

    recipes.getInstructions(id)
        .then(steps => res.status(200).json(steps))
        .catch(() => next({ code: 500, message: "Error retrieving instructions data" }));
});

module.exports = router;