var isFu = require('./isFu');
// Returns a string with all URLs replaced with HTML anchor tags.
exports.toLink = function ( str ){
  return str.replace(/(^|\s)((?:f|ht)tps?:\/\/[^\s]+)/g, replacement || '$1<a href="$2">$2</a>');
};

// Returns a string with all URLs replaced with HTML anchor tags.
exports.toJSON = function ( str ){
  return (JSON.stringify(str));
};

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

// Trim out all falsy values from an array.
exports.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Return a completely flattened version of an array.
exports.flatten = function(array) {
    return _.reduce(array, [], function(memo, value) {
      if (_.isArray(value)) return memo.concat(_.flatten(value));
      memo.push(value);
      return memo;
    });
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
exports.uniq = function(array, isSorted) {
    return _.reduce(array, [], function(memo, el, i) {
      if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el))) memo.push(el);
      return memo;
    });
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
exports.intersect = function(array) {
    var rest = _.rest(arguments);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Delegates to JavaScript 1.6's native lastIndexOf if available.
exports.lastIndexOf = function(array, item) {
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
    var i = array.length;
    while (i--) { 
      if(array[i] === item) {
        return i;
        }
      }
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python range() function. See:
  // http://docs.python.org/library/functions.html#range
exports.range = function(start, stop, step) {
    var a     = _.toArray(arguments);
    var solo  = a.length <= 1;
    var start = solo ? 0 : a[0], stop = solo ? a[0] : a[1], step = a[2] || 1;
    var len   = Math.ceil((stop - start) / step);
    if (len <= 0) return [];
    var range = new Array(len);
    for (var i = start, idx = 0; true; i += step) {
      if ((step > 0 ? i - stop : stop - i) >= 0) return range;
      range[idx++] = i;
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
  str = str.replace(/[^a-z0-9\-_]+/ig, separator);
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
 	if(isFu.isArray(object)) {
		return object.reverse();
	}
	if(isFu.isString(object)) {
		return object.split("").reverse().join("");
	}
	if(isFu.isNumber(object)) {
		return this.toNumber(("" + object).split("").reverse().join(""));
	}
};


/* lets remove all currency formatting for now 

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

*/

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
exports.toTrim = function( str ){
  return str;
};



exports._arrayShuffle = function(o){ 
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
exports.toShuffle = function( object ){
  if(isFu.isArray(object)) {
		return this._arrayShuffle(object);
	}
	if(isFu.isString(object)) {
		return this._arrayShuffle(object.split("")).join("");
	}
	if(isFu.isNumber(object)) {
		return this.toNumber(this._arrayShuffle(("" + object).split("")).join(""));
	}
};

// begins a continuation monad (javascript chain)
exports.toChain = function(){
  //TODO: add chain >.<
};

// performs mixins, current implementation is shallow...and not so great
// cribbed from Jquery
/*
  deepIf true, the merge becomes recursive (aka. deep copy).
  targetThe object to extend. It will receive the new properties.
  object1An object containing additional properties to merge in.
  objectNAdditional objects containing properties to merge in.
*/
exports.toMix = function(){
  // TODO: write tests and better possibly better shallow copy. add option for deep copy
	// copy reference to target object
	var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;

	// Handle a deep copy situation
	if ( isFu.isBoolean(target)) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFu.isFunction(target) ) {
		target = {};
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging object literal values or arrays
				if ( deep && copy && ( isFu.isObject(copy) || isFu.isArray(copy) ) ) {
					var clone = src && ( isFu.isObject(src) || isFu.isArray(src) ) ? src
						: isFu.isArray(copy) ? [] : {};

					// Never move original objects, clone them
					target[ name ] = this.toMix( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};