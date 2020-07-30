
exports.seed = function(knex) {
    return knex('recipe_ingredients').insert([
      {recipe_id: 2, ingredient_id: 1, quantity: 1, unit_id: 7},
      {recipe_id: 2, ingredient_id: 3, quantity: 1, unit_id: 6},
      {recipe_id: 2, ingredient_id: 6, quantity: 1, unit_id: 8},
    ]);
};
