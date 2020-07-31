
exports.seed = function(knex) {
    return knex('recipes').insert([
      {name: "BBQ Ribs"},
      {name: "Spaghetti with Meat Sauce"}
    ]);
};
