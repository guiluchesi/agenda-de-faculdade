
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projetos', (table) => {
      table.increments();

      table.string('titulo');
      table.string('materia');
      table.date('data');
      table.text('comentarios');

      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
   knex.schema.dropTable('consultores')
 ])
};
