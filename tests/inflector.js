var vows = require('../vows/lib/vows'),
	assert = require('assert');

var sys = require('sys');

var format = require('../index');

var inflector = format.inflector;

//to make porting from rails easier

var eachPair = function(fn){
  for(i in this){
    fn(i, this[i]);
  };
};

//load test cases
var cases = require('./inflections');

var myVows = {};


//from and two are switched, as singularize's test data is the inverse of pluralize
myVows["singularize()"] = {};
var railsSingularizations = myVows["singularize()"]["run through test cases"] = {
  topc: "rails singularization cases"
};

eachPair.call(cases.SingularToPlural, function(singular, plural){
  railsSingularizations["singularize "+ plural] = function(){
    var result = inflector.singularize(plural);
    var eql = !!(singular === result);
    assert.ok(eql, plural + " should singularize to: " + singular+ ", instead it was:"+result);
  };
});


//generic form!
function testSuiteBuilder(kind, collections){
  myVows[kind+"()"] = {};
   myVows[kind+"()"]["run through test cases"] = {
    topc: "rails "+kind+" cases"
  };

  collections.forEach(function(collection){
    eachPair.call(collection, function(from, to){
        myVows[kind+"()"]["run through test cases"][kind+" "+ from] = function(){
          var result = inflector[kind](from);
          var eql = !!(to === result);
          assert.ok(eql, from + " should "+kind+"() to: " + to+ ", instead it was:"+result);
        };
    });    
  })
}

testSuiteBuilder("pluralize", [cases.SingularToPlural, cases.Irregularities]);
testSuiteBuilder("titleize", [cases.MixtureToTitleCase]);
testSuiteBuilder("camelize", [cases.UnderscoreToCamel]);

testSuiteBuilder("underscore", [
  cases.CamelToUnderscore,
  cases.CamelToUnderscoreWithoutReverse,
  cases.CamelWithModuleToUnderscoreWithSlash
]);
testSuiteBuilder("humanize", [cases.UnderscoreToHuman]);
testSuiteBuilder("dasherize", [cases.UnderscoresToDashes]);
testSuiteBuilder("ordinalize", [cases.OrdinalNumbers]);
testSuiteBuilder("parameterize", [cases.StringToParameterized])

vows.describe('format.js lib/inflector').addVows(myVows);

