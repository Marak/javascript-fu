// Returns a string with all URLs replaced with HTML anchor tags.
exports.toLink = function ( str ){
  return str.replace(/(^|\s)((?:f|ht)tps?:\/\/[^\s]+)/g, replacement || '$1<a href="$2">$2</a>');
}

// Returns a string with all URLs replaced with HTML anchor tags.
exports.toJSON = function ( str ){
  return (JSON.stringify(str));
}

// takes in a string and attempts to coerce it into a number
exports.toNumber = function(numbery){

  // currently not using parseFloat, parseInt, or toFixed
  var n = numbery;
  n = n.toString();
  n = n.replace( /\,/g, '' );
  n = n.replace( /\$/g, '' ); // replace with format.currency.toCurrency call
  var number = new Number(n);

  if(number.toString() == 'NaN'){
    // since we failed at getting a number, we can try to extract the digits out of the input
    //number = fu.getNumbers(number);
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


/* 
    Inflectors inspired by Rails and CakePHP
-     http://rails.rubyonrails.org/classes/Inflector.html
-     http://github.com/rails/rails/blob/master/activesupport/lib/active_support/inflections.rb
  -   http://github.com/cakephp/cakephp/blob/master/cake/libs/inflector.php
*/

var inflections = require('./inflections').inflections;

// this does not replace "/" with "::", unlike rails
exports.toCamel = function(str) {
  return exports.toTitle(str).replace(/[^\w]/, '');
};

exports.toDash = function(str) {
  str = str.replace(/_/g, '-');
  return str;
};

// Capitalizes the first word and turns underscores into spaces and strips _id. Like titleize, this is meant for creating pretty output.
exports.toHuman = function(str) {
  str = str.replace(/_id$/, "").replace(/_/, " ");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Ordinalize turns a number into an ordinal string used to denote the position in an ordered sequence such as 1st, 2nd, 3rd, 4th.
exports.toOrdinal = function(str) {
  str = str.toString();
  var num = parseInt(str, 10),
      mod100 = num % 100,
      mod10 = num % 10;
  
  switch(mod100){
    case 11:
    case 12:
    case 13:
      return str + "th";
  }
  
  switch(mod10){
    case 1:
      return str + "st";
    case 2:
      return str + "nd";
    case 3:
      return str + "rd";
  }
  
  return str + "th";
};

// Capitalizes all the words and replaces some characters in the string to create a nicer looking title. 
// toTitle is meant for creating pretty output.
exports.toTitle = function(str) {

  str = exports.toUnderscore(str);
  str = exports.toHuman(str);
  
	var parts = str.split(/\b('?[a-z])/);
	str = '';

	for (var i = 0; i < parts.length; i = i + 1) {
		if ((i % 2) === 0) {
			str = str + parts[i];
		} else {
			str = str + parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
		}
	};

	return str;
};

exports.toParam = function(str){
  var separator = '-';
  str = str.replace(/[^a-z0-9\-_]+/ig, separator)
  if(separator.length){
  
    str = str.replace(/-{2,}/g, separator);
    str = str.replace(/^-|-$/ig, '');
  }
  
  return str.toLowerCase();
};

exports.toUnderscore = function(str) {
	str = str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2');
	str = str.replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, "_");
	str = str.toLowerCase();
	return str;
};

exports.toPlural = function(str) {
	for (var i = inflections.uncountables.length - 1; i >= 0; i--) {
		if (str.match(inflections.uncountables[i])) return str;
	};

	var pairs = inflections.plurals,
		pair = [];

	//go from the end of the array to the front so the last pairs have priority
	for (i = pairs.length - 1; i >= 0; i--) {
		pair = pairs[i];
		var result = str.replace(pair[0], pair[1]);
		if (result === str) {
			continue;
		} else return result;
	};

	return str.replace(/([^s])$/i, '$1s');
};

exports.toSingle = function(str) {
	for (var u = inflections.uncountables.length - 1; u >= 0; u--) {
		if (str.match(inflections.uncountables[u])) return str;
	};

	var pairs = inflections.singulars,
		pair = [];

	//go from the end of the array to the front so the last pairs have priority
	for (var i = pairs.length - 1; i >= 0; i--) {
		pair = pairs[i];
		var result = str.replace(pair[0], pair[1]);
		if (result === str) {
			continue;
		} else return result;
	};

	return str.replace(/s$/i, '');
};


exports.toReverse = function( object ){
 	if(Type.isArray(object)) {
		return object.reverse();
	}
	if(Type.isString(object)) {
		return object.split("").reverse().join("");
	}
	if(Type.isNumber(object)) {
		return NumberFu.toNumber(("" + object).split("").reverse().join(""));
	}
};



// currency.js
// formats money

// takes in a string and attempts to coerce it into Dollars
exports.toDollars = function(money){
  // TODO: add more stripping and formatting logic
  return money;
};

  exports.toPennies = function(money){
    // TODO: add more stripping and formatting logic
    return money;
  };

  exports.toNickels = function(money){
    // TODO: add more stripping and formatting logic
    return money;
  };

  exports.toDimes = function(money){
    // TODO: add more stripping and formatting logic
    return money;
  };

  exports.toQuarters = function(money){
    // TODO: add more stripping and formatting logic
    return money;
  };

// takes in a string and attempts to coerce it into Euros
exports.toEuros = function(money){
  // TODO: add more stripping and formatting logic
  return money;
};

// takes in a string and attempts to coerce it into Canadian dolalrs
exports.toCanadian = function(money){
  // TODO: add more stripping and formatting logic
  return money;
};



exports.toWrap = function( m, b, c ){
  
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



exports.toShuffle = function( object ){
  if(Type.isArray(object)) {
		return	this.shuffleArray(object);
	}
	if(Type.isString(object)) {
		return this.shuffleArray(object.split("")).join("");
	}
	if(Type.isNumber(object)) {
		return NumberFu.toNumber(this.shuffleArray(("" + object).split("")).join(""));
	}
};


exports.toShuffle = function( object ){
  if(Type.isArray(object)) {
		return	this.shuffleArray(object);
	}
	if(Type.isString(object)) {
		return this.shuffleArray(object.split("")).join("");
	}
	if(Type.isNumber(object)) {
		return NumberFu.toNumber(this.shuffleArray(("" + object).split("")).join(""));
	}
};


// begins a continuation monad (javascript chain)
exports.toChain = function(){
  //TODO: add chain >.<
};