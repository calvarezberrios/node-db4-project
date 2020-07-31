const db = require("../../data/db-config.js");

module.exports = {
    getRecipes, 
    getShoppingList,
    getInstructions,
};

function getRecipes() {
    return db("recipes");
}

function getShoppingList(id) {
    return db("recipe_ingredients as ri")
            .join("recipes as r", "r.id", "ri.recipe_id")
            .join("ingredients as i", "i.id", "ri.ingredient_id")
            .join("units as u", "u.id", "ri.unit_id")
            .select("i.id as IngredientID", "i.name as Ingredient", "ri.quantity as Quantity", "u.name as UnitType", "r.name as RecipeName")
            .where({ recipe_id: id })
            .orderBy("i.name");
}

function getInstructions(id) {
    return db("recipe_steps")
            .join("recipes", "recipes.id", "recipe_steps.recipe_id")
            .select("recipe_steps.step_number", "recipe_steps.description", "recipes.name")
            .where({ recipe_id: id }).orderBy("step_number");
}