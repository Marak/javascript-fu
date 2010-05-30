// types.js
// checks for types
//Basically a Port of Underscore
var sys = require('sys');
var getFu = require('./getFu');

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
exports.isNumber = function( obj ){
  return (obj === +obj) || (toString.call(obj) === '[object Number]');
};

// checks if stringy is a string
exports.isString = function ( stringy ){
  return !!(stringy === '' || (stringy && stringy.charCodeAt && stringy.substr));
};

exports.isRegExp = function(obj){
  return !!(obj && obj.test && obj.exec && (obj.ignoreCase || obj.ignoreCase === false));
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
  return !!(datey && datey.getTimezoneOffset && datey.setUTCFullYear);
};

/* maybe not needed, isDate should suffice
exports.isTime = function( timey ){
};
*/

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

/* confusing for users, rather would have isNumber() return false for NaN
exports.isNaN = function(obj) {
  return this.isNumber(obj) && isNaN(obj);
};
*/

exports.isObject = function(objecty){
	if(this.isFunction(objecty)) {
		return false; 
	}
	if(this.isArray(objecty)) {
		return false;
	}
  return typeof objecty == 'object';
};

exports.isFunction = function(functiony){
  return !!(functiony && functiony.constructor && functiony.call && functiony.apply);
};
exports.isEmpty = function(){
  
};

/* maybe implement later
exports.isNode = function(){};
*/

exports.isBoolean = function(){};

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
    //if (a.isEqual) return a.isEqual(b);
    // Check dates' integer values.
    if (this.isDate(a) && this.isDate(b)) return a.getTime() === b.getTime();
    // Both are NaN?
    if (this.isNaN(a) && this.isNaN(b)) return true;

    
    // Compare regular expressions.
    if (this.isRegExp(a) && this.isRegExp(b)) {
      return a.source     === b.source &&
             a.global     === b.global &&
             a.ignoreCase === b.ignoreCase &&
             a.multiline  === b.multiline;
           }
    
    /**/
    // If a is not an object by this point, we can't handle it.
    if (a instanceof Object != true) return false;
    
    // Check for different array lengths before comparing contents.
    if (a.length && (a.length != b.length)) return false;
    
    
    // Nothing else worked, deep compare the contents.
    var aKeys = getFu.getKeys(a), bKeys = getFu.getKeys(b);
    // Different object sizes?
    if (aKeys.length != bKeys.length) return false;
    // Recursive comparison of contents.
    for (var key in a) {
      if (!(key in b) || !this.isEqual(a[key], b[key])) 
      return false;
    }
   
    return true;
};