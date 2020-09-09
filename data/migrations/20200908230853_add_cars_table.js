
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments('id');

      tbl.string('maker', 255).notNullable().index();
      tbl.string('modle', 255).notNullable().index();
      tbl.integer("VIN")
      tbl.integer("mileage").defaultTo(20)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
