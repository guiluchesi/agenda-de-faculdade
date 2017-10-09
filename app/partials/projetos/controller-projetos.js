(() => {
  'use strict';

  const ProjetosCtrl = function(projetosFactory) {
      const ctrl = this;
      ctrl.lista = false;

      projetosFactory.listar()
        .then(projetos => ctrl.lista = projetos.data)
        .catch(erro => console.log(erro));
  };

  angular.module('MyApp')
    .controller('ProjetosCtrl', ProjetosCtrl);

})();
