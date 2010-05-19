
var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');


function assertIsNumber(n){
  if(n instanceof Number == true){
    return assert.ok();
  }
  else{
    return assert.fail();
  }
}

vows.describe('format.js library').addVows({
  "toNumber()": {
    "on an instance of Number": {
    topic: new Number( 42 ),
    "can format strict number":function( n ){
      assert.isNumber( format.number.toNumber( n ) );
    }},
    "on a number literal": {
    topic: 42,
    "can format loose number":function( n ){
      assert.isNumber( format.number.toNumber( n ) );
    }},
    "on a number string": {
    topic: '42',
    "can format string as number":function( n ){
      assert.isNumber( format.number.toNumber( n ) );
    }},
    "on not a number at all": {
    topic: 'foobar',
    "can format garbage as number":function( n ){
      assert.isNumber( format.number.toNumber( n ) );
    }},
    "on a number with commas": {
    topic: '1,000,000',
    "can format string with commas as number":function( n ){
      assert.isNumber( format.number.toNumber( n ) );
    }},
    "on a number with currency symbols": {
    topic: '$42.00',
    "can format money string as number":function( n ){
      assert.isNumber( format.number.toNumber( n ) );
    }}
  }
});

/*

topic: 42,
"can format loose number":function( n ){
  if(n instanceof Number == true){
    assert.ok();
  }
  else{
    assert.fail();
  }
},
topic: '42',
"can format string as number":function( n ){
  if(n instanceof Number == true){
    assert.ok();
  }
  else{
    assert.fail();
  }
  assert.equal( true, n instanceof Number );
},


*/


var n = 45;

sys.puts(typeof n);
sys.puts(n instanceof Number);

var m = Number(45);

sys.puts(typeof m);
sys.puts(m instanceof Number);

var o = new Number(45);

sys.puts(typeof o);
sys.puts(o instanceof Number);
