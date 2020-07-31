const db = require("../../data/db-config.js");

module.exports = {
    getRecipesForIngredient
}

function getRecipesForIngredient(id) {
    return db("recipe_ingredients as ri")
            .join("recipes as r", "r.id", "ri.recipe_id")
            .select("r.name as RecipeName")
            .where({ ingredient_id: id });
}