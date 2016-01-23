'use strict';
var benv = require('benv');

function setup(cb){
  benv.setup(function(){
    global.Node = window.Node;
    benv.expose({
      angular: benv.require(require.resolve("angular/angular"), "angular")
    });
    // exposed by benv;
    cb(window.angular, document);
  });
}

module.exports = {
  setup: setup,
  teardown: benv.teardown
};
