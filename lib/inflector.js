var inflections = require('./inflections').inflections;

/* 
   API methods ported from other library
   
   Rails
     http://rails.rubyonrails.org/classes/Inflector.html
     http://github.com/rails/rails/blob/master/activesupport/lib/active_support/inflections.rb
   
   CakePHP
   http://github.com/cakephp/cakephp/blob/master/cake/libs/inflector.php
   
*/

//this does not replace "/" with "::", unlike rails
exports.camelize = function(str) {
  return exports.titleize(str).replace(/[^\w]/, '');
};

exports.dasherize = function(str) {
  str = str.replace(/_/g, '-');
  return str;
};

exports.humanize = function(str) {
  str = str.replace(/_id$/, "").replace(/_/, " ");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.ordinalize = function(str) {
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

exports.titleize = function(str) {

  str = exports.underscore(str);
  str = exports.humanize(str);
  
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

exports.parameterize = function(str){
  var separator = '-';
  str = str.replace(/[^a-z0-9\-_]+/ig, separator)
  if(separator.length){
  
    str = str.replace(/-{2,}/g, separator);
    str = str.replace(/^-|-$/ig, '');
  }
  
  return str.toLowerCase();
};

exports.underscore = function(str) {
	str = str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2');
	str = str.replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, "_");
	str = str.toLowerCase();
	return str;
};

exports.pluralize = function(str) {
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

exports.singularize = function(str) {
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
