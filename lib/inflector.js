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
