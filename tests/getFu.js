var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');

vows.describe('format.js lib/getFu').addVows({
  "getKeys()": {
     topic: {key1: "87", key2: 87, key3: 98},
    "extracted keys":function( f ){
      var result = format.format.getKeys( f );
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
      var result = format.format.getValues( f );
      if( result.join(", ") == "87, 87, 98" ){
        assert.ok( true );
      }
      else{
        assert.ok( false, '"' + result.join(", ") + '"' + ' are not the values');
      }
    }
  },
  "getFirst()": {
    "on an Array":{
       topic: [1,2,3],
      "got first value":function( f ){
        var result = format.format.getFirst( f );
        if( result == 1 ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + result.join(", ") + '"' + ' is not the first value');
        }
      }
    },
    "on a string":{
       topic:' [1,2,3]',
      "got null":function( f ){
        var result = format.format.getFirst( f );
        if( result == null ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + result.join(", ") + '"' + ' is  not null');
        }
      }
    }
  },
  "getLast()": {
    "on an Array":{
       topic: [1,2,3],
      "got last value":function( f ){
        var result = format.format.getLast( f );
        if( result == 3 ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + result.join(", ") + '"' + ' is not the first value');
        }
      }
    },
    "on a string":{
       topic:' [1,2,3]',
      "got null":function( f ){
        var result = format.format.getLast( f );
        if( result == null ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + result.join(", ") + '"' + ' is  not null');
        }
      }
    }
  },
  "getIndexOf()": {
    "on an Array":{
       topic: function(){ return format.format.getIndex([1,4,3], 4);},
      "got index value":function( res){
        if( res == 1){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + result.join(", ") + '"' + ' is not the index');
        }
      }
    }
  }

});