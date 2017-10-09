(() => {
  'use strict';

  const ProjetosCtrl = function() {
      const projetos = [
        {
          'titulo': 'Sistema CR',
          'materia': 'Programação Web (Tanji)',
          'data': '18/12/1994',
          'comentario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eligendi qui eius ab? Eveniet officiis, fuga saepe deserunt aliquid enim itaque ipsa. Ipsa, ipsum molestiae, officiis aliquid ut asperiores suscipit dolor doloribus enim, aliquam accusantium inventore assumenda odit mollitia laborum. Vel illum natus expedita soluta ipsam iste non ad quisquam enim, temporibus id quidem doloremque dolore asperiores neque vitae dolorem ipsa laborum, suscipit accusamus molestiae! Nihil expedita, porro modi officia dolorum debitis eius. Ullam soluta ab, maiores nostrum sit illo perferendis aspernatur cum quisquam nulla laborum nesciunt tempore voluptatibus minima accusantium aliquid libero numquam expedita provident veniam temporibus repudiandae obcaecati.'
        },
        {
          'titulo': 'Sistema CR',
          'materia': 'Programação Web (Tanji)',
          'data': '18/12/1994',
          'comentario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eligendi qui eius ab? Eveniet officiis, fuga saepe deserunt aliquid enim itaque ipsa. Ipsa, ipsum molestiae, officiis aliquid ut asperiores suscipit dolor doloribus enim, aliquam accusantium inventore assumenda odit mollitia laborum. Vel illum natus expedita soluta ipsam iste non ad quisquam enim, temporibus id quidem doloremque dolore asperiores neque vitae dolorem ipsa laborum, suscipit accusamus molestiae! Nihil expedita, porro modi officia dolorum debitis eius. Ullam soluta ab, maiores nostrum sit illo perferendis aspernatur cum quisquam nulla laborum nesciunt tempore voluptatibus minima accusantium aliquid libero numquam expedita provident veniam temporibus repudiandae obcaecati.'
        },
        {
          'titulo': 'Sistema CR',
          'materia': 'Programação Web (Tanji)',
          'data': '18/12/1994',
          'comentario': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eligendi qui eius ab? Eveniet officiis, fuga saepe deserunt aliquid enim itaque ipsa. Ipsa, ipsum molestiae, officiis aliquid ut asperiores suscipit dolor doloribus enim, aliquam accusantium inventore assumenda odit mollitia laborum. Vel illum natus expedita soluta ipsam iste non ad quisquam enim, temporibus id quidem doloremque dolore asperiores neque vitae dolorem ipsa laborum, suscipit accusamus molestiae! Nihil expedita, porro modi officia dolorum debitis eius. Ullam soluta ab, maiores nostrum sit illo perferendis aspernatur cum quisquam nulla laborum nesciunt tempore voluptatibus minima accusantium aliquid libero numquam expedita provident veniam temporibus repudiandae obcaecati.'
        },
      ];

      const ctrl = this;
      ctrl.lista = projetos;
  };

  angular.module('MyApp')
        .controller('ProjetosCtrl', ProjetosCtrl);

})();
