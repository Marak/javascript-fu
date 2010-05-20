var inflections = require('./inflections').inflections;

/* 
   API methods ported from other library
   
   Rails
     http://rails.rubyonrails.org/classes/Inflector.html
     http://github.com/rails/rails/blob/master/activesupport/lib/active_support/inflections.rb
   
   CakePHP
   http://github.com/cakephp/cakephp/blob/master/cake/libs/inflector.php
   
*/

exports.camelize = function() {};
exports.classify = function() {};
exports.constantize = function() {};
exports.dasherize = function() {};
exports.demodulize = function() {};
exports.foreign_key = function() {};
exports.humanize = function() {};
exports.ordinalize = function() {};
exports.tableize = function() {};
exports.titleize = function() {};
exports.underscore = function() {
  
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
