# console-angular

Tiny package for experemtantion of angular's complicate features.
If you are tired that making html and environment-setup for learning each angular's function.
If so, this package is helpful, maybe.

## how to use this

code:
```javascript
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

## appendix

If you want to find all restrict E directives, you can use context feature(this is a just exposed angular's DI module).

```javascript
var ca = require('../');
ca.setup(function(angular){
  var context = ca.context(angular);
  var inj = context.injector(["ng"]);
  var providerCache = context.providerCache;

  var mapping = {"E": [], "A": [], "C": []};

  var rx = new RegExp("");

  for (var k in providerCache){
    if(k.endsWith("DirectiveProvider")) {
      for(var instance of inj.get(k.replace("Provider", ""))) {
        for(var restrict of instance.restrict.split(rx)){
          mapping[restrict].push(instance);
        }
      }
    }
  }

  console.log("restrict E directives.");
  for (var d of mapping.E) {
    console.log("- %s", d.name);
  }
});
```

```
restrict E directives.
- a
- input
- textarea
- form
- script
- select
- style
- option
- ngBindTemplate
- form
- ngInclude
- ngPluralize
- ngSwitch
- ngTransclude
- ngPattern
- ngMinlength
- ngMaxlength
- ngMin
- ngMax
- ngSrc
- ngSrcset
- ngHref
```
