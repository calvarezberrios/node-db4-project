const express = require("express")

const ingredients = require("./ingredients-model.js");

const router = express.Router();

router.get("/:id/recipes", (req, res, next) => {
    const { id } = req.params;

    ingredients.getRecipesForIngredient(id)
        .then(recipes => {
            const recipeNames = [];
            recipes.forEach(recipe => recipeNames.push(recipe.RecipeName));
            res.status(200).json(recipeNames);
        })
        .catch(() => next({ code: 500, message: "Error retrieving recipes for ingredient" }));
});

module.exports = router;