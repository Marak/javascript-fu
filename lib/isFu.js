// types.js
// checks for types
var sys = require('sys');


// sanely checks if objectcy is defined and contains a value
exports.isDefined = function( objecty ){	
  if(typeof objecty == 'undefined'){
    return false;
  }
  if(objecty == null || objecty == 'null'){
    return false;
  }
  if(objecty.toString() == 'NaN'){
    return false;  
  }
  return true;
};


// checks if numbery is a number
exports.isNumber = function( numbery ){
  if(numbery.toString() == 'NaN'){
    return false;  
  }
  if(numbery instanceof Number){
    return true; 
  }
  else if (Number( numbery ).toString() != 'NaN'){
    return true;
  }
  return false;
};

// checks if stringy is a string
exports.isString = function ( stringy ){
  if(typeof stringy == 'string'){
    return true;
  }
  if(stringy instanceof String){
    return true;  
  }
	return false;
};

// checks if text contains only alphanumeric and punctation. 
exports.isText = function( texty ){
 	if(!(this.isString(texty))) {
		return false;
	}
	var textyLength = texty.length;
	if(texty.replace(/[^\w\s\.\?\!\,\;\:\'\"]/g, "").length == textyLength){
   return true;  
 }
	return false;
};

// checks if datey is a date
exports.isDate = function( datey ){
  return (datey instanceof Date);
};

exports.isTime = function( timey ){
  
};

exports.isArray = function(array){
	if(!(this.isDefined(array))) {
		return false;
	}
	if (array.constructor.toString().indexOf("Array") == -1) {
     return false;
	}
  else {
     return true;
	}
};

exports.isJSON = function(jsony){
};

exports.isObject = function(objecty){
	if(this.isFunction(objecty)) {
		return false; 
	}
	if(this.isArray(objecty)) {
		return false;
	}
  return typeof objecty == 'object'
};

exports.isFunction = function(functiony){
  return typeof a == "function";
}
exports.isEmpty = function(){
  
};

exports.isNode = function(){};

exports.isBoolean = function(){};

exports.isRegExp = function(){};

exports.isEqual = function(a , b){
  // Perform a deep comparison to check if two objects are equal.
    // Check object identity.
    if (a === b) return true;
    // Different types?
    var atype = typeof(a), btype = typeof(b);
    if (atype != btype) return false;
    // Basic equality test (watch out for coercions).
    if (a == b) return true;
    // One is falsy and the other truthy.
    if ((!a && b) || (a && !b)) return false;
    // One of them implements an isEqual()?
    if (a.isEqual) return a.isEqual(b);
    // Check dates' integer values.
    if (this.isDate(a) && this.isDate(b)) return a.getTime() === b.getTime();
    
    /*
    // Both are NaN?
    if (this.isNaN(a) && _.isNaN(b)) return true;
    */
    /*
    // Compare regular expressions.
    if (_.isRegExp(a) && _.isRegExp(b))
      return a.source     === b.source &&
             a.global     === b.global &&
             a.ignoreCase === b.ignoreCase &&
             a.multiline  === b.multiline;
    */
    
    /*
    // If a is not an object by this point, we can't handle it.
    if (atype !== 'object') return false;
    // Check for different array lengths before comparing contents.
    if (a.length && (a.length !== b.length)) return false;
    
    
    // Nothing else worked, deep compare the contents.
    var aKeys = _.keys(a), bKeys = _.keys(b);
    // Different object sizes?
    if (aKeys.length != bKeys.length) return false;
    // Recursive comparison of contents.
    for (var key in a) if (!(key in b) || !_.isEqual(a[key], b[key])) return false;
    
    return true;
    */

};