
var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');

function isNumber( n ){
  
  sys.puts('isNumber ' + n)
  
  if(n.toString() == 'NaN'){
    return [false, 'NaN, nananana!'];  
  }
  if(n instanceof Number){
    return [true, 'WIN!'];  
  }
  else{
    return [false, n.toString() + ' is not a number.'];  
  }
}

vows.describe('format.js library').addVows({
  "toNumber()": {
    "on an instance of Number": {
    topic: new Number( 42 ),
    "can format strict number":function( n ){
      var result = isNumber( format.number.toNumber( n ) );
      assert.ok( result[0], result[1] );
    }},
    "on a number literal": {
    topic: 42,
    "can format loose number":function( n ){
      var result = isNumber( format.number.toNumber( n ) );
      assert.ok( result[0], result[1] );
    }},
    "on a number string": {
    topic: '42',
    "can format string as number":function( n ){
      var result = isNumber( format.number.toNumber( n ) );
      assert.ok( result[0], result[1] );
    }},
    "on not a number at all": {
    topic: 'foobar',
    "can format garbage as number":function( n ){
      //assert.isNumber( format.number.toNumber( n ) );
      var result = isNumber( format.number.toNumber( n ) );
      assert.ok( result[0], result[1] );
    }},
    "on a number with commas": {
    topic: '1,000,000',
    "can format string with commas as number":function( n ){
      var result = isNumber( format.number.toNumber( n ) );
      assert.ok( result[0], result[1] );
    }},
    "on a number with currency symbols": {
    topic: '$42.00',
    "can format money string as number":function( n ){
      var result = isNumber( format.number.toNumber( n ) );
      assert.ok( result[0], result[1] );
    }},
    "on a number with currency symbols": {
    topic: '$42.00',
    "can format money string as number":function( n ){
      var result = isNumber( format.number.toNumber( n ) );
      assert.ok( result[0], result[1] );
    }}
  }
});


//sys.puts(format.number.toNumber('42,000'));

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

