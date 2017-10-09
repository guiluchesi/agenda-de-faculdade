(() => {
  'use strict';

  let projetosFactory = ($http) => {
    const listar = () => $http.get('/projetos');
    const cadastrar = projeto => $http.post('/projetos/criar', projeto);

    return {
      listar: listar,
      cadastrar: cadastrar
    };
  };

  angular.module('MyApp')
    .factory('projetosFactory', projetosFactory);

})();
