
exports.up = async function(knex) {

    await knex.schema.createTable("projects", tbl => {
        tbl.increments("id")
        tbl.string("name").notNullable()
        tbl.string("description").notNullable()
        tbl.boolean("completed").notNullable().defaultTo(Number("0"))
    })

    await knex.schema.createTable("tasks", tbl => {
        tbl.increments("id")
        tbl.string("description").notNullable()
        tbl.string("notes").notNullable()
        tbl.boolean("completed").notNullable().defaultTo(Number("0"))
        tbl.integer("projectId").unsigned().notNullable().references("id").inTable("projects")
    })

    await knex.schema.createTable("resources", tbl => {
        tbl.increments("id")
        tbl.string("name").notNullable()
        tbl.string("description").notNullable()
        tbl.integer("projectId").unsigned().notNullable().references("id").inTable("projects")
    })

};

exports.down = async function(knex) {

    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")

};
