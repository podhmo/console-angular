// hello world with angular
var assert = require('assert');

describe("Hello", function() {
  var setup = require('../src/setup');
  it('rendering', function(){
    setup.setup(function(angular, document){
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

      var actual = angular.element(document.body).html();
      var expected = '<div><hello class="ng-isolate-scope"><p class="ng-binding">hello world</p></hello></div>';
      assert.strictEqual(actual, expected);
    });
  });
});
