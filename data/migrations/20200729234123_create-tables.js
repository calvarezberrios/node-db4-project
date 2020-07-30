
exports.up = function(knex) {
    return knex.schema
            .createTable("recipes", tbl => {
                tbl.increments();
                tbl.string("name", 128).notNullable().unique();
            })
            .createTable("units", tbl => {
                tbl.increments();
                tbl.string("name", 128).notNullable().unique();
            })
            .createTable("ingredients", tbl => {
                tbl.increments();
                tbl.string("name", 128).notNullable().unique();
            })
            .createTable("recipe_steps", tbl => {
                tbl.increments();
                tbl.integer("step_number").notNullable();
                tbl.string("description", 128).notNullable();
                tbl.integer("recipe_id")
                    .unsigned()
                    .notNullable()
                    .references("recipes.id")
                    .onUpdate("CASCADE")
                    .onDelete("CASCADE");
            })
            .createTable("recipe_ingredients", tbl => {
                tbl.integer("recipe_id")
                    .unsigned()
                    .notNullable()
                    .references("recipes.id")
                    .onUpdate("CASCADE")
                    .onDelete("CASCADE");
                tbl.integer("ingredient_id")
                    .unsigned()
                    .notNullable()
                    .references("ingredients.id")
                    .onUpdate("CASCADE")
                    .onDelete("CASCADE");
                tbl.float("quantity", 2).defaultTo(0);
                tbl.integer("unit_id")
                    .unsigned()
                    .references("units.id")
                    .onUpdate("CASCADE")
                    .onDelete("SET NULL");
                tbl.primary(["recipe_id", "ingredient_id"]);
            })
};

exports.down = function(knex) {
    return knex.schema
                .dropTableIfExists("recipe_ingredients")
                .dropTableIfExists("recipe_steps")
                .dropTableIfExists("ingredients")
                .dropTableIfExists("units")
                .dropTableIfExists("recipes")
};
