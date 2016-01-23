# console-angular

Tiny package for experemtantion of angular's complicate features.
If you are tired that making html and environment-setup for learning each angular's function.
If so, this package is helpful, maybe.

## how to use this

code:
```
var ca = require("console-angular");

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
```

output:
```
<div><hello class="ng-isolate-scope"><p class="ng-binding">hello world</p></hello></div>
```
