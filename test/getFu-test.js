var vows = require('vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');

vows.describe('format.js lib/getFu').addBatch({
  "getKeys()": {
     topic: {key1: "87", key2: 87, key3: 98},
    "extracted keys":function( f ){
      var result = format.getFu.getKeys( f );
      if( result.join(", ") == "key1, key2, key3" ){
        assert.ok( true );
      }
      else{
        assert.ok( false, '"' + result.join(", ") + '"' + ' are not the keys');
      }
    }
  },
  "getValues()": {
     topic: {key1: "87", key2: 87, key3: 98},
    "extracted values":function( f ){
      var result = format.getFu.getValues( f );
      if( result.join(", ") == "87, 87, 98" ){
        assert.ok( true );
      }
      else{
        assert.ok( false, '"' + result.join(", ") + '"' + ' are not the values');
      }
    }
  },
  "getRight()": {
     topic: "I am a very model of a model major general",
    "extracted right of string":function( string ){
      var result = format.getFu.getRight(string, 7);
     assert.equal(result, "very model of a model major general");
    }
  },
  "getLeft()": {
     topic: "I am a very model of a model major general",
    "extracted left of string":function( string ){
      var result = format.getFu.getLeft(string, 7);
     assert.equal(result, "general");
    }
  },
  "getIndex()": {
    "on complex object": {
       topic: ["I", "am", "a", [1,2,3]],
      "extracted index if complex object from arra":function( array ){
        var result = format.getFu.getIndex(array, [1,2,3]);
       assert.equal(result, 3);
      }
    },
    "on complex object": {
       topic: ["I", "am", "a", [1,2,3]],
      "extracted index if simple object from arra":function( array ){
        var result = format.getFu.getIndex(array, "am");
       assert.equal(result, 1);
      }
    }
  }

}).run();