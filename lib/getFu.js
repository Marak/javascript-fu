// takes n chars from the left of a string
exports.getLeft = function( str, n ){
  return str;
};

// takes n chars from the right of a string
exports.getRight = function( str, n ){
  return str;
};


// parses a string and returns an array of URLs in the order they were found in the string
exports.getLinks = function ( str ){
  return str;
};

// returns DOM nodes
exports.getNode = function ( selector ){
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
