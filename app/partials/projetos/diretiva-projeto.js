angular.module('MyApp')
  .directive('projetoUnico', () => {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'partials/projetos/templates/projeto-unico.html',
      controller: ($scope) => {
        $scope.saibaMais = false;
        $scope.toogleSaibaMais = () => $scope.saibaMais = !$scope.saibaMais;
      }
    }
  });
