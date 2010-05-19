// types.js
// checks for types
var sys = require('sys');


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