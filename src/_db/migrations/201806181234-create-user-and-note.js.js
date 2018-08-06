const { standardCols, userIdCol } = require('sharyn/db')

module.exports = {
  up: async knex => {
    await knex.schema.createTable('User', t => {
      standardCols(knex, t)
      t.string('username')
        .unique()
        .notNullable()
      t.string('passwordHash').notNullable()
    })
    await knex.schema.createTable('Note', t => {
      standardCols(knex, t)
      userIdCol(t)
      t.string('title').notNullable()
      t.text('description')
    })
  },
  down: () => {},
}
