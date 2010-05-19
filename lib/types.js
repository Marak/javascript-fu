// types.js
// checks for types
var sys = require('sys');

exports.isType = function(){
  
};

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

exports.isText = function(){
  
};

exports.isDate = function(){
  
};

exports.isArray = function(){
  
};

exports.isInflector = function(){
  
};

exports.isString = function(){
  
};

exports.isJSON = function(){
  
};

exports.isAssociativeArray = function(){
  
};




