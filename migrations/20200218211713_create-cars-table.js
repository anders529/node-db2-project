exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl.string('VIN', 256)
         .notNullable()
         .index()
      tbl.string("Make", 256)
         .notNullable()
      tbl.string("Model", 256)
         .notNullable()
      tbl.integer("mileage", 128)
         .notNullable()
      tbl.string("Transmission Type", 128)
      tbl.string("Title", 128)
  })
};
exports.down = function(knex)
    {return knex.schema.dropTableIfExists('cars')};
