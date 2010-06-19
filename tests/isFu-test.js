
var vows = require('vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');

function isNaN(){return true;};

vows.describe('format.js lib/types').addBatch({
  "isDefined()": {
    "on nothing": {
      topic: '',
      "undefined is not defined":function( s ){
        var result = format.isFu.isDefined(  );
        if( !result ){
          assert.isTrue( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is defined!');
        }
      }
    },
    "on a string literal ": {
      topic: 'foo',
      "strings are defined":function( s ){
        var result = format.isFu.isDefined( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a string');
        }
      }
    },
    "on an array": {
      topic: new Array(1,2,3),
      "arrays are defined":function( s ){
        var result = format.isFu.isDefined( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not defined');
        }
      }
    },
    "on an object": {
      topic: {},
      "objects are defined":function( s ){
        var result = format.isFu.isDefined( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not defined');
        }
      }
    }
  },
  "isNumber()": {
    "on a number instance": {
      topic: new Number(1234),
      "this is a number":function( s ){
        var result = format.isFu.isNumber( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a number');
        }
      }
    },
    "on a string number ": {
      topic: '1234',
      "this is not a number":function( s ){
        var result = format.isFu.isNumber( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is a number');
        }
      }
    },
    "on number literal": {
      topic: 1234,
      "this is a number":function( s ){
        var result = format.isFu.isNumber( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is a number');
        }
      }
    },
    "on NaN": {
      topic: NaN,
      "this is a number":function( s ){
        var result = format.isFu.isNumber( NaN );        
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a number');
        }
      }
    },
    "on string with randomly placed numbers": {
      topic: 'kjas(^12p/)^&34mm6',
      "this is not a number":function( s ){
        var result = format.isFu.isNumber( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a number');
        }
      }
    }
  },
  "isRegExp()": {
    "on a RegExp instance": {
      topic: function () {return format.isFu.isRegExp(/s/); },
      "returns true":function( res ){
        //topic hates NaN
        if( res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is not RegExp');
        }
      }
    },
    "on a string instance": {
      topic: function () {return format.isFu.isRegExp('sd'); },
      "returns true":function( res ){
        //topic hates NaN
        if( !res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is not RegExp');
        }
      }
    }
  },
  "isNaN()": {
    "on a NaN instance": {
      topic: NaN,
      "this is Not a Number":function( s ){
        //topic hates NaN
        var result = format.isFu.isNaN( NaN );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not NAN');
        }
      }
    },
    "on a string instance": {
      topic: "NaN",
      "this is Not a Number":function( s ){
        var result = format.isFu.isNaN( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is NAN');
        }
      }
    },
    "on a number instance": {
      topic: 5,
      "this is Not a Number":function( s ){
        var result = format.isFu.isNaN( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is NAN');
        }
      }
    }
  },
  "isString()": {
    "on a string instance": {
      topic: new String('foo'),
      "this is a string":function( s ){
        var result = format.isFu.isString( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a string');
        }
      }
    },
    "on a string literal ": {
      topic: 'foo',
      "this is a string":function( s ){
        var result = format.isFu.isString( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a string');
        }
      }
    },
    "on an array": {
      topic: new Array(1,2,3),
      "this is not a string":function( s ){
        var result = format.isFu.isString( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a string');
        }
      }
    },
    "on an object": {
      topic: {},
      "this is not a string":function( s ){
        var result = format.isFu.isString( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a string');
        }
      }
    }
  },
	"isText()": {
    "on a alphanumeric string instance": {
      topic: new String('The spacecraft! late last month began sending science data 8.6 billion miles to Earth in a changed format that mission managers could not decode.'),
      "this is text":function( s ){
        var result = format.isFu.isText( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not text');
        }
      }
    },
    "on a non alphanumeric string instance": {
      topic: '<> I am not a string &*',
      "this is not text":function( s ){
        var result = format.isFu.isText( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is text');
        }
      }
    },
    "on an array": {
      topic: new Array(1,2,3),
      "this is not text":function( s ){
        var result = format.isFu.isText( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is text');
        }
      }
    },
    "on an object": {
      topic: {},
      "this is not text":function( s ){
        var result = format.isFu.isText( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is text');
        }
      }
    }
  },
  "isBoolean()": {
    "on a true instance": {
      topic: true,
      "this is a boolean":function( s ){
        var result = format.isFu.isBoolean( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a boolean');
        }
      }
    },
    "on a false instance": {
      topic: false,
      "this is a boolean":function( s ){
        var result = format.isFu.isBoolean(false);
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a boolean');
        }
      }
    },
    "on a string instance": {
      topic: "true",
      "this is a boolean":function( s ){
        var result = format.isFu.isBoolean( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is a boolean');
        }
      }
    },
  },
  "isEmpty()": {
    "on a string instance": {
      topic: "",
      "this is empty":function( s ){
        var result = format.isFu.isEmpty( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a empty');
        }
      }
    },
    "on a array instance": {
      topic: [],
      "this is empty":function( s ){
        var result = format.isFu.isEmpty( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a empty');
        }
      }
    },
    "on a object instance": {
      topic:{},
      "this is empty":function( s ){
        var result = format.isFu.isEmpty( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a empty');
        }
      }
    }
  },
  "isDate()": {
    "on a date instance": {
      topic: new Date(),
      "this is a date":function( s ){
        var result = format.isFu.isDate( s );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a date');
        }
      }
    }
  },
	"isArray()": {
      "on an array": {
	      topic: new Array(1,2,3),
	      "this is an array":function( a ){
	        var result = format.isFu.isArray( a );
	        if( result ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + a + '"' + ' is not an array');
	        }
	      }
	    },
    "on a string literal ": {
      topic: 'foo',
      "this is not an array":function( a ){
        var result = format.isFu.isArray( a );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + a + '"' + ' is an array');
        }
      }
    },
    "on an object": {
      topic: {},
      "this isn not an array":function( a ){
        var result = format.isFu.isArray( a );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + a + '"' + ' is an array');
        }
      }
    }
  },
	"isObject()": {
      "on an object": {
	      topic: {},
	      "this is an object":function( o ){
	        var result = format.isFu.isObject( o );
	        if( result ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + o + '"' + ' is not an object');
	        }
	      }
	    },
    "on a string literal ": {
      topic: 'foo',
      "this is not an object":function( o ){
        var result = format.isFu.isObject( o );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + o + '"' + ' is not an object');
        }
      }
    },
    "on an Array": {
      topic: new Array([1,2,3]),
      "this is not an object":function( o ){
        var result = format.isFu.isObject( o );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + o + '"' + ' is not an object');
        }
      }
    },
		"on an function": {
      topic: function(){},
      "this is not an object":function( o ){
        var result = format.isFu.isObject( o );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + o + '"' + ' is not an object');
        }
      }
    }
  },
	"isFunction()": {
		"on an function": {
      topic: Function,
      "this is a function":function( f ){
        var result = format.isFu.isFunction( Function );
        if( result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + f + '"' + ' is a function');
        }
      }
    },
      "on an object": {
	      topic: {},
	      "this is a function":function( f ){
	        var result = format.isFu.isFunction( f );
	        if( !result ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + o + '"' + ' is not a function');
	        }
	      }
	    },
    "on a string literal ": {
      topic: 'foo',
      "this is a function":function( f ){
        var result = format.isFu.isFunction( f );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + o + '"' + ' is not a function');
        }
      }
    },
    "on an Array": {
      topic: new Array([1,2,3]),
      "this is a function":function( f ){
        var result = format.isFu.isFunction( f );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + o + '"' + ' is not a function');
        }
      }
    }
  },
  "isEqual()": {
		"on the same object": {
      topic: function () {var b=5; return format.isFu.isEqual(b, b); },
      "returns equal":function(res){
        if( res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is not equal');
        }
      }
    },
    "on the different values": {
      topic: function () {var b=5; var a =6; return format.isFu.isEqual(a, b); },
      "returns not equal":function(res){
        if( !res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is equal');
        }
      }
    },
    "on the different object types": {
      topic: function () {var b="5"; var a =5; return format.isFu.isEqual(a, b); },
      "returns not equal":function(res){
        if( !res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is equal');
        }
      }
    },
    "on the true and false": {
      topic: function () {return format.isFu.isEqual(false, true); },
      "returns not equal":function(res){
        if( !res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is equal');
        }
      }
    },
      "on an equivalent string object": {
        topic: function () {var b=5; return format.isFu.isEqual("string", "string"); },
	      "returns equals":function( res ){
	        if( res ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + res + '"' + ' is not equal');
	        }
	      }
	    },
	    "on an equivalent integers object": {
        topic: function () {return format.isFu.isEqual(5, 5); },
	       "returns equals":function( res ){
  	        if( res ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + res + '"' + ' is not equal');
	        }
	      }
	    },
	    "on an equivalent float object": {
        topic: function () {return format.isFu.isEqual(5.5, 5.5); },
	      "returns equals":function( res ){
	        if( res ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + res + '"' + ' is not equal');
	        }
	      }
	    },
	    "on an equivalent NaN object": {
        topic: function () {return format.isFu.isEqual(NaN, NaN); },
	      "returns equals":function( res ){
	        if( res ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + res + '"' + ' is not equal');
	        }
	      }
	    },
      "on same dates": {
        topic: function () {return format.isFu.isEqual(new Date(50,12,12), new Date(50,12,12)); },
	      "returns equals":function( res ){
	        if( res ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + res + '"' + ' is not equal');
	        }
	      }
	    },
	    "on different dates": {
        topic: function () {return format.isFu.isEqual(new Date(34,12,20), new Date(43,12,12)); },
	      "returns not equal":function( res ){
	        if( !res ){
	          assert.ok( true );
	        }
	        else{
	          assert.ok( false, '"' + res + '"' + ' is equal');
	        }
	      }
	    },
      "on Regex": {
      topic: function () {return format.isFu.isEqual(/sd/i, /sd/i); },
      "returns equal":function( res ){
        if( res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is not equal');
        }
      }
    },
    "on Arrays": {
      topic: function () {return format.isFu.isEqual([1,2,3], [1,2,3]); },
      "returns equal":function( res ){
        if( res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is not equal');
        }
      }
    },
    "on different Array of different lengths": {
      topic: function () {return format.isFu.isEqual([1,2,3,4], [1,2,3]); },
      "returns false":function( res ){
        if( !res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is equal');
        }
      }
    },
    "on different Array of same lengths": {
      topic: function () {return format.isFu.isEqual(["1","2","3"], [1,2,3]); },
      "returns false":function( res ){
        if( !res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is equal');
        }
      }
    },
    "on arrays with arrays inside": {
      topic: function () {return format.isFu.isEqual([1,3,[2]], [1,3,[2]]); },
      "returns false":function( res ){
        if( res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is equal');
        }
      }
    },
     "on hash": {
        topic: function () {var hashA = {"say": "yes", "say": [1,2,3]} ; var hashB = {"say": "yes", "say": [1,2,3]}; return format.isFu.isEqual(hashA, hashB); },
        "returns equal":function( res ){
          if( res ){
            assert.ok( true );
          }
          else{
            assert.ok( false, '"' + res + '"' + ' is not equal');
          }
        }
      },
      "on hash of different lengths": {
          topic: function () {var hashA = {"say": "yes"} ; var hashB = {"say": "yes", "say": [1,2,3]}; return format.isFu.isEqual(hashA, hashB); },
          "returns equal":function( res ){
            if( !res ){
              assert.ok( true );
            }
            else{
              assert.ok( false, '"' + res + '"' + ' is equal');
            }
          }
        },
      "on hash of same length": {
      topic: function () {var hashA = {"say": "yes", "say": "you will"} ; var hashB = {"say": "yes", "say": [1,2,3]}; return format.isFu.isEqual(hashA, hashB); },
      "returns equal":function( res ){
        if( !res ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + res + '"' + ' is equal');
        }
      }
    }
  }
}).run();
