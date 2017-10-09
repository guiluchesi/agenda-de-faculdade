angular.module('MyApp')
  .controller('HeaderCtrl', function($scope, $location, $window) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
