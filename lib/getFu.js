var isFu = require("./isFu");
var toFu = require("./toFu");

/*

// takes n chars from the left of a string
exports.getLeft = function( str, n ){
  return str;
};

// takes n chars from the right of a string
exports.getRight = function( str, n ){
  return str;
};

*/

// Docs
var D = {};

exports.getRandom = function(range) {
		r = Math.floor(Math.random()*range);
		return r;
};

D.getRandom = {
  "example":"getRandom( range );",
  "message":"picks a random number from a range",
  "code":exports.getRandom.toString()
};

exports.getKeys = function( object ) {
  keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
};

D.getKeys = {
  "example":"getKeys( object );",
  "message":"returns an array of keys for an object",
  "code":exports.getKeys.toString()
};

exports.getValues = function( object ) {
  values = [];
   for (var key in object) {
     values.push(object[key]);
   }
   return values;
};

D.getValues = {
  "example":"getValues( object );",
  "message":"returns an array of values for an object",
  "code":exports.getValues.toString()
};

exports.getRight = function(string, n) {
  return string.substring(n, string.length);
};

D.getRight = {
  "example":"getRight(string, character_index );",
  "message":"returns a substring to the right of character position given",
  "code":exports.getRight.toString()
};

exports.getLeft = function(string, n) {
  return toFu.toReverse(toFu.toReverse(string).substring(0, n));
};

D.getLeft = {
  "example":"getLeft(string, character_index );",
  "message":"returns a substring to the left of character position given",
  "code":exports.getLeft.toString()
};

// If the browser doesn't supply us with indexOf (I'm looking at you, MSIE),
// we need this function. Return the position of the first occurence of an
// item in an array, or -1 if the item is not included in the array.
// Delegates to JavaScript 1.8's native indexOf if available.
exports.getIndex = function( array, item ){
   for (var i = 0, l = array.length; i < l; i++) if (isFu.isEqual(array[i], item)) return i;
   return -1;
};

D.getIndex = {
  "example":"getIndex(array, object );",
  "message":"returns index of object's placement in array",
  "code":exports.getIndex.toString()
};

// Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object.
exports.getFunctions = function( object ){
 // todo add check for iterating through an object and returning an array of all functions (isFunction())  
};