
exports.seed = function(knex) {
    return knex('recipe_steps').insert([
      {step_number: 1, description: "Season beef with Adobo and cook beef until brown", recipe_id: 2},
      {step_number: 2, description: "Fill pot with water, add pasta, add salt and oil, bring to boil, then lower heat and cook until desired texture.", recipe_id: 2},
      {step_number: 3, description: "Drain Water from pasta and Grease from Beef", recipe_id: 2},
      {step_number: 4, description: "Mix Beef, Pasta, and Pasta Sauce. Cook on low for about 5 minutes, stirring occassionally.", recipe_id: 2},
    ]);
};
