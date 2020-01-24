
exports.up = async function(knex) {

    await knex.schema.createTable("projects", tbl => {
        tbl.increments("id")
        tbl.string("name").notNull()
        tbl.string("description").notNull()
        tbl.boolean("completed").defaultTo(false)
    })

    await knex.schema.createTable("tasks", tbl => {
        tbl.increments("id")
        tbl.string("description").notNull()
        tbl.string("notes").notNull()
        tbl.boolean("completed").defaultTo(false)
        tbl.integer("projectId").unsigned().notNull().references("id").inTable("projects")
    })

    await knex.schema.createTable("resources", tbl => {
        tbl.increments("id")
        tbl.string("name").notNull()
        tbl.string("description").notNull()
        tbl.integer("projectId").unsigned().notNull().references("id").inTable("projects")
    })

};

exports.down = async function(knex) {

    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")

};
