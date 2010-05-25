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
};