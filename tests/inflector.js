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

vows.describe('format.js lib/inflector').addVows({
	"pluralize()": {
		"run through rails pluralization test cases": {
			topic: cases.SingularToPlural, 
			'all cases match results': function(singularToPlural) {
			  			  
			  function testPair(singular, plural){
			    var result = inflector.pluralize(singular);
			    var eql = !!(plural === result);
			    assert.ok(eql, singular + " should pluralize to:" + plural+ ", instead it was:"+result);
			  };
			  			  
			  eachPair.call(singularToPlural, testPair);
			}
		}
	},
	
	"singularize()": {
		"run through rails test cases": {
			topic: cases.SingularToPlural, 
			'all cases match results': function(singularToPlural) {			  
			  function testPair(singular, plural){
			    var result = inflector.singularize(plural);
			    var eql = !!(singular === result);
			    assert.ok(eql, plural + " should singularize to:" + singular+ ", instead it was:"+result);
			  };
			  			  
			  eachPair.call(singularToPlural, testPair);
			}
		}
	}
});
