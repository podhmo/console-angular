var ca = require('console-angular');

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
