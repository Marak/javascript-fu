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

exports.toBase = function( number ){
  
  Number.prototype.toBase = function(b, c){
      var s = "", n = this;
      if(b > (c = (c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").split("")).length || b < 2) return "";
      while(n)
          s = c[n % b] + s, n = Math.floor(n / b);
      return s;
  };
  String.prototype.parseInt = function(b, c){
      var s = 0, n, l = (n = this.split("")).length, i = 0;
      if(b > (c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").length || b < 2) return NaN;
      while(l--)
          s += c.indexOf(n[i++]) * Math.pow(b, l);
      return s;
  };
  
}