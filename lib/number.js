// number.js
// formats numbers
var sys = require('sys');
// takes in a string and attempts to coerce it into a number
exports.toNumber = function(numbery){
  
  var n = numbery;
  n = n.toString();
  n = n.replace( /\,/g, '' );
  n = n.replace( /\$/g, '' ); // replace with format.currency.toCurrency call
  n =  new Number(n);

  if(n.toString() == 'NaN'){
    return false;
  }
  else{
    return n;
    
  }
};


exports.toPercent = function(number){
  // TODO: add more stripping and formatting logic
  return number;
};
