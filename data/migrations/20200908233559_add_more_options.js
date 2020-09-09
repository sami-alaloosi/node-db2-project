
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.string("transmission-type", 255);
    tbl.string('title-status', 255);
  })
};

exports.down = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.dropColumn("transmission-type");
        tbl.dropColumn('title-status');
    });
};
