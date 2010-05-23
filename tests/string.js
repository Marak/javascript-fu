
var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');

function isNumber( n ){
  
//  sys.puts('isNumber ' + n)
  
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



// exports.toString();  <= LOL we don't need this right?


/*
getNumbers
stripLetters
getLetters
*/
/*
vows.describe('format.js lib/string').addVows({
  "stripNumbers()": {
    "on string with randomly placed numbers": {
    topic: 'kjas(^12p/)^&34mm6',
    "can remove all the numbers":function( s ){
      var result = format.string.stripNumbers( s );
      if( !format.types.isNumber( s ) ){
        assert.ok( true );
      }
      else{
        assert.ok( false, '"' + s + '"' + ' still has numbers in it ');
      }
    }}
  },
  "getNumbers()": {
    "on string with randomly placed numbers": {
    topic: 'kjas(^12p/)^&34mm6',
    "can get all the numbers":function( s ){
      var result = format.string.getNumbers( s );
      if( !format.types.isNumber( s ) ){
        assert.ok( true );
      }
      else{
        assert.ok( false, '"' + s + '"' + ' still has numbers in it ');
      }
    }}
  }
  
});
*/
