(() => {
  'use strict';

  const ProjetoUnico = function() {
      const ctrl = this;

      ctrl.saibaMais = false;
      ctrl.toogleSaibaMais = () => ctrl.saibaMais = !ctrl.saibaMais;
  };

  angular.module('MyApp')
        .controller('ProjetoUnico', ProjetoUnico);

})();
