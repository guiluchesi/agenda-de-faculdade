angular.module('MyApp')
  .directive('projetoUnico', () => {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'partials/projetos/projeto-unico.html'
    }
  });
