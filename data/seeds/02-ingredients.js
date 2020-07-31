
exports.seed = function(knex) {
    return knex('ingredients').insert([
      {name: "Spaghetti Pasta"},
      {name: "Ribs"},
      {name: "Salt"},
      {name: "Pepper"},
      {name: "Garlic Powder"},
      {name: "Ground Beef"},
      {name: "BBQ Sauce"},
      {name: "Adobo Seasoning"},
      {name: "Pasta Sauce"}
    ]);
};
