(() => {
  'use strict';

  const ProjetoForm = function() {
      const ctrl = this;
      ctrl.criarNovo = false;
      ctrl.data = {};

      ctrl.enviar = () => {
        const dadosDoForm = Object.assign({}, ctrl.data);
        ctrl.data = {};
        ctrl.criarNovo = false;
        console.log(dadosDoForm);
      }

      ctrl.fecharForm = () => ctrl.criarNovo = false;
      ctrl.abrirForm = () => ctrl.criarNovo = true;
  };

  angular.module('MyApp')
        .controller('ProjetoForm', ProjetoForm);

})();
