(() => {
  'use strict';

  const ProjetoForm = function(projetosFactory, $filter, $route) {
      const ctrl = this;
      ctrl.criarNovo = false;
      ctrl.data = {};

      ctrl.enviar = () => {
        const dadosDoForm = Object.assign({}, ctrl.data);
        dadosDoForm.data = $filter('date')(dadosDoForm.data, 'yyyy/M/d h:mm:ss');

        projetosFactory.cadastrar(dadosDoForm)
          .then(() => {
            ctrl.data = {};
            ctrl.criarNovo = false;
            $route.reload();
            console.log('Enviado com sucesso.');
          })
          .catch(erro => console.log(erro));
      }

      ctrl.fecharForm = () => ctrl.criarNovo = false;
      ctrl.abrirForm = () => ctrl.criarNovo = true;
  };

  angular.module('MyApp')
        .controller('ProjetoForm', ProjetoForm);

})();
