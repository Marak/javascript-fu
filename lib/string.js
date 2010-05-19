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
  var result = str.match(/\d+/g)
  
  str = '';
  
  for(s in result){
    str += result[s];   
  }
  
  sys.puts(str);
  
  return str;
  

};

// takes in a string and removes all A-Z a-z letters
exports.stripLetters = function( str ){
  return 
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
  
}