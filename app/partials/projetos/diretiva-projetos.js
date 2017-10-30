angular.module('MyApp')
  .directive('listaProjetos', () => {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'partials/projetos/templates/lista-projetos.html',
      controller: ($rootScope, projetosFactory) => {
        $rootScope.projetos = [];

        projetosFactory.listar()
          .then(projetos => $rootScope.projetos = projetos.data)
          .catch(erro => console.log(erro));
      }
    }
  });
