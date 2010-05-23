// string.js
// formating for strings

var sys = require('sys');

// exports.toString();  <= we need to monkey punch toString() so that is overrides the default


exports.formatWrap = function( m, b, c ){
  
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
exports.formatTrim = function( str ){
  return str;
};

// takes n chars from the left of a string
exports.getLeft = function( str, n ){
  return str;
};

// takes n chars from the right of a string
exports.getRight = function( str, n ){
  return str;
};

exports.toParams = function ( str ){
  return str;
};

// Returns a string with all URLs replaced with HTML anchor tags.
exports.toLink = function ( str ){
  return str.replace(/(^|\s)((?:f|ht)tps?:\/\/[^\s]+)/g, replacement || '$1<a href="$2">$2</a>');
}

// Returns a string with all URLs replaced with HTML anchor tags.
exports.toJSON = function ( str ){
  return (JSON.stringify(str));
}