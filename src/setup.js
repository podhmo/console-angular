'use strict';
var benv = require('benv');
var services = require('./services');

function setup(cb){
  benv.setup(function(){
    global.Node = window.Node;
    benv.expose({
      angular: benv.require(require.resolve("angular/angular"), "angular")
    });

    // define console module.
    services.setup(window.angular.module('console', []));
    // exposed by benv;
    cb(window.angular, document);
  });
}

module.exports = {
  setup: setup,
  teardown: benv.teardown
};
