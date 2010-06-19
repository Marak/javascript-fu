
var vows = require('vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');

vows.describe('format.js lib/types').addBatch({
  "toReverse()": {
    "on an array": {
      topic: [1,2,3,4,5],
      "Array has been reversed":function( s ){
        var result = format.toFu.toReverse( s );
        if( result.toString() == '5,4,3,2,1'){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' has not been reversed!');
        }
      }
		}
	},
   "on a string": {
     topic: "hello I am reverse",
     "String has been reversed":function( s ){
       var result = format.toFu.toReverse( s );
       if( result.toString() == 'esrever ma I olleh'){
         assert.ok( true );
       }
       else{
         assert.ok( false, '"' + s + '"' + ' has not been reversed!');
       }
     }
	},
	"on a number": {
     topic: 12345,
     "Number has been reversed":function( s ){
       var result = format.toFu.toReverse( s );
       if( result.toString() == 54321){
         assert.ok( true );
       }
       else{
         assert.ok( false, '"' + s + '"' + ' has not been reversed!');
       }
     }
	},
	"toMix()": {
    "on an empty object and a full": {
      topic: function () {return format.toFu.toMix({}, {"hello": "yes", "belief": "no"}); },
      "Object has been mixed":function( res ){
        if(format.isFu.isEqual(res, {"hello": "yes", "belief": "no"})){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' has not been mixed!');
        }
      }
		},
		"on two full objects": {
      topic: function () {return format.toFu.toMix({"name": "carl"}, {"hello": "yes", "belief": "no"}); },
      "Object has been mixed":function( res ){
        if(format.isFu.isEqual(res, {"name": "carl", "hello": "yes", "belief": "no"})){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' has not been mixed!');
        }
      }
		},
		"on objects sharing methods": {
      topic: function () {return format.toFu.toMix({"name": "carl", "number": 5}, {"hello": "yes", "belief": "no", "number": 6}); },
      "Object has been mixed":function( res ){
        if(format.isFu.isEqual(res, {"name": "carl", "hello": "yes", "belief": "no", "number": 6})){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' +  format.getFu.getKeys(res) + '"' + ' has not been mixed!');
        }
      }
		},
		"on objects sharing methods and deep copy": {
      topic: function () {return format.toFu.toMix(true, {
          apple: 0,
          banana: {weight: 52, price: 100},
          cherry: 97
        }, 
        {
         banana: {price: 200},
         durian: 100
          }); 
      },
      "Object has been mixed":function( res ){
        if(format.isFu.isEqual(res, {apple: 0, banana: {weight: 52, price: 200}, cherry: 97, durian: 100})){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' has not been mixed!');
        }
      }
		},
		"on objects sharing methods and deep copy with array": {
      topic: function () {return format.toFu.toMix(true, {
          apple: 0,
          banana: {weight: 52, price: 100},
          cherry: 97
        }, 
        {
         banana: {price: 200},
         durian: 100,
         cherry: [1,2,3,4]
          }); 
      },
      "Object has been mixed":function( res ){
        if(format.isFu.isEqual(res, {apple: 0, banana: {weight: 52, price: 200}, cherry: [1,2,3,4], durian: 100})){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' has not been mixed!');
        }
      }
		}
	}
}).export(module);

sys.puts(format.toFu.toShuffle([1,2]));
sys.puts(format.toFu.toShuffle(12332424));
sys.puts(format.toFu.toShuffle("I am a very model man of model major general"));

sys.puts(format.toFu.toReverse([1,2,3,4,5]));
sys.puts(format.toFu.toReverse(12332424));
sys.puts(format.toFu.toReverse("I am a very model man of model major general"));