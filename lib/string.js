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


exports.wordWrap = function( m, b, c ){
  
      var i, j, l, s, r;
      if(m < 1)
          return this;
      for(i = -1, l = (r = this.split("\n")).length; ++i < l; r[i] += s)
          for(s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : ""))
              j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length
              || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
      return r.join("\n");
  
};


// removes leading and trailing whitespace from string
exports.trim = function( str ){
  return str;
};

// takes n chars from the left of a string
exports.left = function( str, n ){
  return str;
};

// takes n chars from the right of a string
exports.right = function( str, n ){
  return str;
};

exports.toQueryParams = function ( str ){
  return str;
};

// Returns a string with all URLs replaced with HTML anchor tags.
exports.toLink = function ( str ){
  return str.replace(/(^|\s)((?:f|ht)tps?:\/\/[^\s]+)/g, replacement || '$1<a href="$2">$2</a>');;
}