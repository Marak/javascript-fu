
var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');


vows.describe('format.js lib/types').addVows({
  "isNumber()": {
    "on a number instance": {
      topic: new Number(1234),
      "this is a number":function( s ){
        var result = format.types.isNumber( s );
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
        var result = format.types.isNumber( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a number');
        }
      }
    },
    "on number literal": {
      topic: 1234,
      "this is not a number":function( s ){
        var result = format.types.isNumber( s );
        if( !result ){
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
        var result = format.types.isNumber( s );
        if( !result ){
          assert.ok( true );
        }
        else{
          assert.ok( false, '"' + s + '"' + ' is not a number');
        }
      }
    }
  }
});
