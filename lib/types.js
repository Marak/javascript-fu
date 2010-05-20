// types.js
// checks for types
var sys = require('sys');

exports.isType = function(){
  
};

// checks if numbery is a number
exports.isNumber = function( numbery ){
  if(numbery.toString() == 'NaN'){
    return false;  
  }
  if(numbery instanceof Number){
    return true; 
  }
  else{
    return false;
  }
};

// checks if stringy is a string
exports.isString = function ( stringy ){
  sys.puts(typeof stringy);
  return (stringy instanceof String);
  
}

// checks if numbery is a number
exports.isText = function( str ){

};

exports.isDate = function(){
  
};

exports.isTime = function(){
  
};

exports.isArray = function(){
  
};

exports.isInflector = function(){
  
};


exports.isJSON = function(){
  
};

exports.isAssociativeArray = function(){
  
};




