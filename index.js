var setup = require('./src/setup');
var exposedInjector = require('./src/exposedInjector');

module.exports = {
  setup: setup.setup,
  teardown: setup.teardown,
  injector: exposedInjector
};
