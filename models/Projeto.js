const bookshelf = require('../config/bookshelf');

bookshelf.plugin('registry');

const Projeto = bookshelf.model('Projeto', {
  tableName: 'projetos',
  hasTimestamps: true,
  hidden: ['created_at', 'updated_at', 'deleted_at'],
});

module.exports = Projeto;
