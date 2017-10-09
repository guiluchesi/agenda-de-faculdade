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

angular.module('MyApp').controller('ContactCtrl', ["$scope", "Contact", function ($scope, Contact) {
  $scope.sendContactForm = function () {
    Contact.send($scope.contact).then(function (response) {
      $scope.messages = {
        success: [response.data]
      };
    }).catch(function (response) {
      $scope.messages = {
        error: Array.isArray(response.data) ? response.data : [response.data]
      };
    });
  };
}]);
'use strict';

angular.module('MyApp').controller('HeaderCtrl', ["$scope", "$location", "$window", function ($scope, $location, $window) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}]);
'use strict';

(function () {
  'use strict';

  var ProjetoForm = function ProjetoForm() {
    var ctrl = this;
    ctrl.criarNovo = false;
    ctrl.data = {};

    ctrl.enviar = function () {
      var dadosDoForm = Object.assign({}, ctrl.data);
      ctrl.data = {};
      ctrl.criarNovo = false;
      console.log(dadosDoForm);
    };

    ctrl.fecharForm = function () {
      return ctrl.criarNovo = false;
    };
    ctrl.abrirForm = function () {
      return ctrl.criarNovo = true;
    };
  };

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

  var ProjetosCtrl = function ProjetosCtrl() {
    var projetos = [{
      'titulo': 'Sistema CR',
      'materia': 'Programação Web (Tanji)',
      'data': '18/12/1994',
      'comentario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eligendi qui eius ab? Eveniet officiis, fuga saepe deserunt aliquid enim itaque ipsa. Ipsa, ipsum molestiae, officiis aliquid ut asperiores suscipit dolor doloribus enim, aliquam accusantium inventore assumenda odit mollitia laborum. Vel illum natus expedita soluta ipsam iste non ad quisquam enim, temporibus id quidem doloremque dolore asperiores neque vitae dolorem ipsa laborum, suscipit accusamus molestiae! Nihil expedita, porro modi officia dolorum debitis eius. Ullam soluta ab, maiores nostrum sit illo perferendis aspernatur cum quisquam nulla laborum nesciunt tempore voluptatibus minima accusantium aliquid libero numquam expedita provident veniam temporibus repudiandae obcaecati.'
    }, {
      'titulo': 'Sistema CR',
      'materia': 'Programação Web (Tanji)',
      'data': '18/12/1994',
      'comentario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eligendi qui eius ab? Eveniet officiis, fuga saepe deserunt aliquid enim itaque ipsa. Ipsa, ipsum molestiae, officiis aliquid ut asperiores suscipit dolor doloribus enim, aliquam accusantium inventore assumenda odit mollitia laborum. Vel illum natus expedita soluta ipsam iste non ad quisquam enim, temporibus id quidem doloremque dolore asperiores neque vitae dolorem ipsa laborum, suscipit accusamus molestiae! Nihil expedita, porro modi officia dolorum debitis eius. Ullam soluta ab, maiores nostrum sit illo perferendis aspernatur cum quisquam nulla laborum nesciunt tempore voluptatibus minima accusantium aliquid libero numquam expedita provident veniam temporibus repudiandae obcaecati.'
    }, {
      'titulo': 'Sistema CR',
      'materia': 'Programação Web (Tanji)',
      'data': '18/12/1994',
      'comentario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eligendi qui eius ab? Eveniet officiis, fuga saepe deserunt aliquid enim itaque ipsa. Ipsa, ipsum molestiae, officiis aliquid ut asperiores suscipit dolor doloribus enim, aliquam accusantium inventore assumenda odit mollitia laborum. Vel illum natus expedita soluta ipsam iste non ad quisquam enim, temporibus id quidem doloremque dolore asperiores neque vitae dolorem ipsa laborum, suscipit accusamus molestiae! Nihil expedita, porro modi officia dolorum debitis eius. Ullam soluta ab, maiores nostrum sit illo perferendis aspernatur cum quisquam nulla laborum nesciunt tempore voluptatibus minima accusantium aliquid libero numquam expedita provident veniam temporibus repudiandae obcaecati.'
    }];

    var ctrl = this;
    ctrl.lista = projetos;
  };

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

angular.module('MyApp').factory('Contact', ["$http", function ($http) {
  return {
    send: function send(data) {
      return $http.post('/contact', data);
    }
  };
}]);
//# sourceMappingURL=application.js.map
