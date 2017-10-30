angular.module('MyApp')
  .directive('projetoForm', () => {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'partials/projetos/templates/projeto-form.html',
      controller: ($scope, $route, $filter, projetosFactory) => {
        $scope.criarNovo = false;
        $scope.data = {};

        $scope.fecharForm = () => $scope.criarNovo = false;
        $scope.abrirForm = () => $scope.criarNovo = true;

        $scope.enviar = () => {
          const dadosDoForm = Object.assign({}, $scope.data);
          dadosDoForm.data = $filter('date')(dadosDoForm.data, 'yyyy/M/dd h:mm:ss');

          projetosFactory.cadastrar(dadosDoForm)
            .then(() => {
              $scope.fecharForm();
              $scope.data = {};
              setTimeout(() => $route.reload(), 500);
            })
            .catch(erro => console.log(erro));
        }
      }
    }
  });
