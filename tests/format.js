
var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var Format = require('../lib/format');
var format = require('../index');

vows.describe('format.js lib/types').addVows({
  "toReverse()": {
    "on an array": {
      topic: [1,2,3,4,5],
      "Array has been reversed":function( s ){
        var result = format.format.toReverse( s );
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
       var result = format.format.toReverse( s );
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
       var result = format.format.toReverse( s );
       if( result.toString() == 54321){
         assert.ok( true );
       }
       else{
         assert.ok( false, '"' + s + '"' + ' has not been reversed!');
       }
     }
	}
});

sys.puts(Format.formatShuffle([1,2]));
sys.puts(Format.formatShuffle(12332424));
sys.puts(Format.formatShuffle("I am a very model man of model major general"));

sys.puts(Format.toReverse([1,2,3,4,5]));
sys.puts(Format.toReverse(12332424));
sys.puts(Format.toReverse("I am a very model man of model major general"));