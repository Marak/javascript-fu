var vows = require('../vows/lib/vows'),
	assert = require('assert');

var sys = require('sys');

var format = require('../index');

var inflector = format.inflector;
/*
camelize();
classify();
constantize();
dasherize();
demodulize();
foreign_key();
humanize();
inflections();
ordinalize();
pluralize();
singularize();
tableize();
titleize();
underscore();
*/

//to make porting from rails easier

var eachPair = function(fn){
  for(i in this){
    fn(i, this[i]);
  };
};

//load test cases
var cases = require('./inflections');

var myVows = {};

myVows["pluralize()"] = {};
var railsPluralizations = myVows["pluralize()"]["run through test cases"] = {
  topc: "rails pluralization cases"
};

eachPair.call(cases.SingularToPlural, function(singular, plural){
  railsPluralizations["pluralize "+ singular] = function(){
    var result = inflector.pluralize(singular);
    var eql = !!(plural === result);
    assert.ok(eql, singular + " should pluralize to:" + plural+ ", instead it was:"+result);
  };
});

myVows["singularize()"] = {};
var railsPluralizations = myVows["singularize()"]["run through test cases"] = {
  topc: "rails singularization cases"
};

eachPair.call(cases.SingularToPlural, function(singular, plural){
  railsPluralizations["singularize "+ plural] = function(){
    var result = inflector.singularize(plural);
    var eql = !!(singular === result);
    assert.ok(eql, plural + " should singularize to:" + singular+ ", instead it was:"+result);
  };
});

vows.describe('format.js lib/inflector').addVows(myVows);

