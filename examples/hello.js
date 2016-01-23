var ca = require("../");

ca.setup(function(angular, document){
  function Directive(){
    return {
      retrict: "E",
      scope: {},
      bindToController: {
      },
      controller: function(){
        this.message = "hello world";
      },
      controllerAs: "c",
      template: "<p>{{ c.message }}</p>"
    };
  }
  Directive.$inject = [];

  var app = angular.module("app", []);
  app.directive("hello", Directive);

  document.body.innerHTML = "<div><hello></hello></div>";
  var injector = angular.bootstrap(document, ["app"]);
  var $rootScope = injector.get("$rootScope");
  $rootScope.$apply();

  console.log(angular.element(document.body).html());
});
