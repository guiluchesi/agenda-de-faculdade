'use strict';

angular.module('MyApp', ['ngRoute']).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'partials/home.html'
  }).when('/contact', {
    templateUrl: 'partials/contact.html',
    controller: 'ContactCtrl'
  }).otherwise({
    templateUrl: 'partials/404.html'
  });
}]).run(["$rootScope", "$window", function ($rootScope, $window) {
  if ($window.localStorage.user) {
    $rootScope.currentUser = JSON.parse($window.localStorage.user);
  }
}]);
'use strict';

(function () {
  'use strict';

  var ProjetoForm = function ProjetoForm(projetosFactory, $filter, $route) {
    var ctrl = this;
    ctrl.criarNovo = false;
    ctrl.data = {};

    ctrl.enviar = function () {
      var dadosDoForm = Object.assign({}, ctrl.data);
      dadosDoForm.data = $filter('date')(dadosDoForm.data, 'yyyy/M/d h:mm:ss');

      projetosFactory.cadastrar(dadosDoForm).then(function () {
        ctrl.data = {};
        ctrl.criarNovo = false;
        $route.reload();
        console.log('Enviado com sucesso.');
      }).catch(function (erro) {
        return console.log(erro);
      });
    };

    ctrl.fecharForm = function () {
      return ctrl.criarNovo = false;
    };
    ctrl.abrirForm = function () {
      return ctrl.criarNovo = true;
    };
  };
  ProjetoForm.$inject = ["projetosFactory", "$filter", "$route"];

  angular.module('MyApp').controller('ProjetoForm', ProjetoForm);
})();
'use strict';

(function () {
    'use strict';

    var ProjetoUnico = function ProjetoUnico() {
        var ctrl = this;

        ctrl.saibaMais = false;
        ctrl.toogleSaibaMais = function () {
            return ctrl.saibaMais = !ctrl.saibaMais;
        };
    };

    angular.module('MyApp').controller('ProjetoUnico', ProjetoUnico);
})();
'use strict';

(function () {
  'use strict';

  var ProjetosCtrl = function ProjetosCtrl(projetosFactory) {
    var ctrl = this;
    ctrl.lista = false;

    projetosFactory.listar().then(function (projetos) {
      return ctrl.lista = projetos.data;
    }).catch(function (erro) {
      return console.log(erro);
    });
  };
  ProjetosCtrl.$inject = ["projetosFactory"];

  angular.module('MyApp').controller('ProjetosCtrl', ProjetosCtrl);
})();
'use strict';

angular.module('MyApp').directive('projetoForm', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'partials/projetos/projeto-form.html'
  };
});
'use strict';

angular.module('MyApp').directive('projetoUnico', function () {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'partials/projetos/projeto-unico.html'
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
