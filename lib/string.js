// string.js
// formating for strings

var sys = require('sys');

// exports.toString();  <= LOL we don't need this right?


// takes in a string and removes all numbers
exports.stripNumbers = function( str ){
  return str.replace(/[^A-Za-z]/g, "");
};

// takes in a string and returns a string of only numbers
exports.getNumbers = function( str ){
  return str.replace(/[^\d]/g, "");
};

// takes in a string and removes all A-Z a-z letters
exports.stripLetters = function( str ){
  return;
};

// takes in a string and returns a string of only letters
exports.getLetters = function( str ){
  
};


