
exports.seed = function(knex) {
    return knex('units').insert([
      {name: "cup"},
      {name: "oz"},
      {name: "gram"},
      {name: "tblsp"},
      {name: "tsp"},
      {name: "pinch"},
      {name: "box"},
      {name: "pound"},
    ]);
};
