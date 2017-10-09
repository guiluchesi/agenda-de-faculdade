angular.module('MyApp')
  .directive('projetoForm', () => {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'partials/projetos/projeto-form.html'
    }
  });
