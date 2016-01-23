var setup = require('./src/setup');
var context = require('./src/context');

module.exports = {
  setup: setup.setup,
  teardown: setup.teardown,
  context: context
};
