angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <h3>Contact Form</h3>\n  <div ng-if="messages.error" role="alert" class="text-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n  <div ng-if="messages.success" role="alert" class="text-success">\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\n  </div>\n  <form ng-submit="sendContactForm()">\n    <label for="name">Name</label>\n    <input type="text" name="name" id="name" ng-model="contact.name" autofocus>\n    <label for="email">Email</label>\n    <input type="email" name="email" id="email" ng-model="contact.email">\n    <label for="message">Body</label>\n    <textarea name="message" id="message" rows="7" ng-model="contact.message"></textarea>\n    <br>\n    <button type="submit">Send</button>\n  </form>\n</div>\n');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2016 Company, Inc. All Rights Reserved.</p>\n</footer>');
$templateCache.put('partials/header.html','<header ng-controller="HeaderCtrl" class="header">\n  <div class="container">\n\n    <h1 class="logo">Sistema de gerenciamento de projetos de faculdade</h1>\n\n  </div>\n</header>\n');
$templateCache.put('partials/home.html','<div class="container">\n  <div class="row titulos" ng-controller="ProjetoForm as form">\n    <h1>Pr\xF3ximos entregas / provas</h1>\n    <button type="button" class="btn dark" ng-disabled="form.criarNovo" ng-click="form.abrirForm()">Adicionar nova</button>\n    <projeto-form></projeto-form>\n  </div>\n  <div class="row">\n    <div class="projetos" ng-controller="ProjetosCtrl as projetos">\n      <projeto-unico ng-repeat="projeto in projetos.lista"></projeto-unico>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/projetos/projeto-form.html','<form class="projeto-form" ng-class="{aberto: form.criarNovo}" ng-submit="form.enviar()">\n  <input type="text" ng-model="form.data.titulo" placeholder="T\xEDtutlo do projeto">\n  <div class="double">\n    <input type="text" ng-model="form.data.materia" placeholder="Nome da mat\xE9ria (Prof)">\n    <input type="date" ng-model="form.data.dataDeEntrega">\n  </div>\n  <textarea ng-model="form.data.name" rows="8" cols="80" placeholder="Coment\xE1rios sobre o projeto" maxlength="750"></textarea>\n  <div class="double">\n    <button type="button" class="btn" ng-click="form.fecharForm()">Cancelar</button>\n    <button type="submit" class="btn dark">Adicionar</button>\n  </div>\n</form>\n');
$templateCache.put('partials/projetos/projeto-unico.html','<div ng-controller="ProjetoUnico as projeto" class="projeto-unico" ng-class="{\'aberto\': projeto.saibaMais}">\n  <span class="mateira web"></span>\n  <div class="meta">\n    <h2>Sistema CR</h2>\n    <small>Programa\xE7\xE3o Web (Tanji)</small>\n  </div>\n  <div class="mais-info">\n    <div class="data"><i class="fa facebook"></i>18/12/1994</div>\n    <button class=btn ng-click="projeto.toogleSaibaMais()">Saiba mais</button>\n  </div>\n  <div class="content">\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eligendi qui eius ab? Eveniet officiis, fuga saepe deserunt aliquid enim itaque ipsa. Ipsa, ipsum molestiae, officiis aliquid ut asperiores suscipit dolor doloribus enim, aliquam accusantium inventore assumenda odit mollitia laborum. Vel illum natus expedita soluta ipsam iste non ad quisquam enim, temporibus id quidem doloremque dolore asperiores neque vitae dolorem ipsa laborum, suscipit accusamus molestiae! Nihil expedita, porro modi officia dolorum debitis eius. Ullam soluta ab, maiores nostrum sit illo perferendis aspernatur cum quisquam nulla laborum nesciunt tempore voluptatibus minima accusantium aliquid libero numquam expedita provident veniam temporibus repudiandae obcaecati.\n    </p>\n  </div>\n</div>\n');}]);