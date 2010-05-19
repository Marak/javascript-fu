
var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');

vows.describe('format.js lib/number').addVows({
  "toNumber()": {
    "on an instance of Number": {
    topic: new Number( 42 ),
    "can format strict number":function( n ){
      var result = format.types.isNumber( format.number.toNumber( n ) );
      assert.ok( result );
    }},
    "on a number literal": {
    topic: 42,
    "can format loose number":function( n ){
      var result = format.types.isNumber( format.number.toNumber( n ) );
      assert.ok( result );
    }},
    "on a number string": {
    topic: '42',
    "can format string as number":function( n ){
      var result = format.types.isNumber( format.number.toNumber( n ) );
      assert.ok( result );
    }},
    "on not a number at all": {
    topic: 'foobar',
    "returns false":function( n ){
      //assert.isNumber( format.number.toNumber( n ) );
      var result = format.types.isNumber( format.number.toNumber( n ) );
      assert.ok( !result );
    }},
    "on a number with commas": {
    topic: '1,000,000',
    "can format string with commas as number":function( n ){
      var result = format.types.isNumber( format.number.toNumber( n ) );
      assert.ok( result );
    }},
    "on a number with currency symbols": {
    topic: '$42.00',
    "can format money string as number":function( n ){
      var result = format.types.isNumber( format.number.toNumber( n ) );
      assert.ok( result );
    }},
    "on a number with currency symbols": {
    topic: '$42.00',
    "can format money string as number":function( n ){
      var result = format.types.isNumber( format.number.toNumber( n ) );
      assert.ok( result );
    }}
  }
});
