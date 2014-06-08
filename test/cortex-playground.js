'use strict';

var expect = require('chai').expect;
var playground = require('../');
var node_path = require('path');

describe("playground", function(){
  [
    'packages',
    'resources'
  ].forEach(function (type) {
    it("playground." + type + "()", function(done){
      var p = playground[type]();
      var expected = node_path.join(__dirname, '..', type);
      expect(p.resolve()).to.equal(expected);
      expect(p.resolve('a')).to.equal(node_path.join(expected, 'a'));
      done();
    });

    it("playground." + type + "('a')", function(done){
      var p = playground[type]('a');
      var expected = node_path.join(__dirname, '..', type, 'a');
      expect(p.resolve()).to.equal(expected);
      expect(p.resolve('a')).to.equal(node_path.join(expected, 'a'));
      done();
    });
  });
});