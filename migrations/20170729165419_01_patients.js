
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patient', (table => {
    table.increments()
    table.text('firstName').notNullable()
    table.text('lastName').notNullable()
    table.text('address').notNullable()
    table.text('city').notNullable()
    table.text('state').notNullable()
    table.integer('zip').notNullable()
    table.text('phone').notNullable()
    table.text('email')
    table.date('birthdate')
    table.boolean('male')
    table.boolean('female')
    table.text('emergencyName')
    table.text('emergencyPhone')
    table.text('emergencyRelationship')
    table.text('notes')
  }))
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('patient')
};
