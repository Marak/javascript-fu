var isFu = require("./isFu")

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


// returns DOM nodes
exports.getNode = function ( selector ){
  // TODO : add queryselectorall check and jquery check then default to a basic id lookup
  return str;
};

exports.getRandom = function(range) {
		r = Math.floor(Math.random()*range);
		return r;
};

exports.getKeys = function( object ) {
  keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
};

exports.getValues = function( object ) {
  values = [];
   for (var key in object) {
     values.push(object[key]);
   }
   return values;
};

// If the browser doesn't supply us with indexOf (I'm looking at you, MSIE),
// we need this function. Return the position of the first occurence of an
// item in an array, or -1 if the item is not included in the array.
// Delegates to JavaScript 1.8's native indexOf if available.
exports.getIndex = function( array, item ){
   for (var i = 0, l = array.length; i < l; i++) if (array[i] === item) return i;
   return -1;
};

// Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object.
exports.getFunctions = function( object ){
 // todo add check for iterating through an object and returning an array of all functions (isFunction())  
}