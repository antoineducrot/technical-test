exports.up = async function (knex) {
  await knex.schema.createTable('todo', (table) => {
    table.increments('id').primary()
    table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable()
    table.string('type').notNullable()
    table.boolean('is_done').notNullable()
    table.string('text')
    table.string('title').notNullable()
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('todo')
}
