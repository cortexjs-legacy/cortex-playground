'use strict';

var Fixtures = require('test-fixture').Fixtures;

var playground = exports;
playground.packages = packages;
playground.resources = resources;
playground.cached_resources = cached_resources;

function packages () {
  return new Base(arguments, 'packages');
}

function resources () {
  return new Base(arguments, 'resources');
}

function cached_resources () {
  return new Base(arguments, 'cached_resources');
}

var util = require('util');
var node_path = require('path');

function Base (args, folder) {
  this.folder = folder;
  Fixtures.call(this, args);
}
util.inherits(Base, Fixtures);


// Override
Base.prototype._root = function() {
  return node_path.join(__dirname, this.folder);
};