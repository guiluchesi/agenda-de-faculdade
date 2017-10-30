'use strict';

angular.module('MyApp', ['ngRoute']).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'partials/home.html'
  }).otherwise({
    templateUrl: 'partials/404.html'
  });
}]).run(["$rootScope", "$window", function ($rootScope, $window) {
  if ($window.localStorage.user) {
    $rootScope.currentUser = JSON.parse($window.localStorage.user);
  }
}]);
'use strict';

angular.module('MyApp').directive('projetoForm', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'partials/projetos/templates/projeto-form.html',
    controller: ["$scope", "$route", "$filter", "projetosFactory", function controller($scope, $route, $filter, projetosFactory) {
      $scope.criarNovo = false;
      $scope.data = {};

      $scope.fecharForm = function () {
        return $scope.criarNovo = false;
      };
      $scope.abrirForm = function () {
        return $scope.criarNovo = true;
      };

      $scope.enviar = function () {
        var dadosDoForm = Object.assign({}, $scope.data);
        dadosDoForm.data = $filter('date')(dadosDoForm.data, 'yyyy/M/dd h:mm:ss');

        projetosFactory.cadastrar(dadosDoForm).then(function () {
          $scope.fecharForm();
          $scope.data = {};
          setTimeout(function () {
            return $route.reload();
          }, 500);
        }).catch(function (erro) {
          return console.log(erro);
        });
      };
    }]
  };
});
'use strict';

angular.module('MyApp').directive('projetoUnico', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'partials/projetos/templates/projeto-unico.html',
    controller: ["$scope", function controller($scope) {
      $scope.saibaMais = false;
      $scope.toogleSaibaMais = function () {
        return $scope.saibaMais = !$scope.saibaMais;
      };
    }]
  };
});
'use strict';

angular.module('MyApp').directive('listaProjetos', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'partials/projetos/templates/lista-projetos.html',
    controller: ["$rootScope", "projetosFactory", function controller($rootScope, projetosFactory) {
      $rootScope.projetos = [];

      projetosFactory.listar().then(function (projetos) {
        return $rootScope.projetos = projetos.data;
      }).catch(function (erro) {
        return console.log(erro);
      });
    }]
  };
});
'use strict';

(function () {
  'use strict';

  var projetosFactory = function projetosFactory($http) {
    var listar = function listar() {
      return $http.get('/projetos');
    };
    var cadastrar = function cadastrar(projeto) {
      return $http.post('/projetos/criar', projeto);
    };

    return {
      listar: listar,
      cadastrar: cadastrar
    };
  };
  projetosFactory.$inject = ["$http"];

  angular.module('MyApp').factory('projetosFactory', projetosFactory);
})();
//# sourceMappingURL=application.js.map
