const Projeto = require('../models/Projeto');

const validarProjeto = req => {
  req.checkBody('titulo', 'Um título deve ser informado.').notEmptyString().mustBeDefined().maxLength(255);
  req.checkBody('materia', 'Uma matéria deve ser informada.').notEmptyString().mustBeDefined().maxLength(255);
  req.checkBody('data', 'Uma data deve ser informada.').nullableDate();
  req.checkBody('comentarios', 'Tamanho máximo de 750 caracteres').maxLength(750);
};

exports.obterTodos = (req, res, next) => {
  const hoje = new Date();
  Projeto.forge()
    .query('where', 'data', '>=', hoje)
    .orderBy('data', 'asc')
    .fetchAll()
    .then( (projetos) => res.send(projetos) )
    .catch( error => res.status(500).send(error) );
};


exports.inserir = (req, res, next) => {
  validarProjeto(req);

  const errors = req.validationErrors();
  if(errors){
    return res.status(400).send(errors);
  }

  Projeto.forge()
    .save(req.body)
    .then( projeto => res.status(200).send(projeto) );
    // .catch( error => res.status(500).send(error) );
};
