'use strict';

/* $logProvider service for console application */
function ConsoleLogProvider() {
  this.debug = true;
}
ConsoleLogProvider.prototype.debugEnabled = function debugEnabled(f) {
  if(f !== undefined) {
    this.debug = f;
    return this;
  }
  return true;
};
ConsoleLogProvider.prototype.$get = function $get(){
  return console;
};

/* show stack trace when error is occured */
function throwExceptionHandler() {
  return function throwException(e){
    throw e;
  };
}

function setup(module){
  return module
    .provider('$log', ConsoleLogProvider)
    .factory('$exceptionHandler', throwExceptionHandler)
  ;
}

module.exports = {
  ConsoleLogProvider: ConsoleLogProvider,
  throwExceptionHandler: throwExceptionHandler,
  setup: setup
};
