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
  }


}).export(module);