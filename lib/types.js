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
  else{
    return false;
  }
};

// checks if stringy is a string
exports.isString = function ( stringy ){
  return (stringy instanceof String);
}

// checks if text contains only A-Z a-z text
exports.isText = function( texty ){

};

// checks if datey is a date
exports.isDate = function( datey ){
  return (datey instanceof Date);
};

exports.isTime = function( timey ){
  
};

exports.isArray = function(){
  
};

exports.isInflector = function(){
  
};


exports.isJSON = function(){
  
};

exports.isObject = function(){
  
};