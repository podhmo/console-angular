var ca = require('console-angular');

ca.setup(function(angular){
  var injector = angular.injector(["ng"]);
  var $rootScope = injector.get("$rootScope");
  var childScope = $rootScope.$new();
  var grandChildScope = childScope.$new();

  console.log(grandChildScope.$parent.$parent === $rootScope);

  console.log("----------------------------------------");
  console.log("without as syntax");
  console.log("----------------------------------------");
  $rootScope.x = "xxxxx";
  console.log("root: %s", $rootScope.x);
  console.log("root -> child: %s", childScope.x);
  console.log("root -> child -> grand-child: %s", grandChildScope.x);

  console.log("----------------------------------------");
  childScope.x = "yyyyy";
  console.log("root: %s", $rootScope.x);
  console.log("root -> child: %s", childScope.x);
  console.log("root -> child -> grand-child: %s", grandChildScope.x);

  function Controller(){
    this.x = "xxxxx";
  }
  $rootScope.c = new Controller();

  console.log("\n----------------------------------------");
  console.log("using as syntax");
  console.log("----------------------------------------");
  console.log("root: %s", $rootScope.c.x);
  console.log("root -> child: %s", childScope.c.x);
  console.log("root -> child -> grand-child: %s", grandChildScope.c.x);

  // settings
  childScope.c.x = "yyyyy";
  console.log("----------------------------------------");
  console.log("settings: childScope.c.x <- 'yyyyyy'");
  console.log("----------------------------------------");
  console.log("root: %s", $rootScope.c.x);
  console.log("root -> child: %s", childScope.c.x);
  console.log("root -> child -> grand-child: %s", grandChildScope.c.x);
});
