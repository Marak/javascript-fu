<<<<<<< HEAD
/*************** AUTOGENERATED @ 1274764938398 ***************
=======
/*************** AUTOGENERATED @ 1274767228548 ***************
>>>>>>> added dateTimeFu
    WARNING: THIS FILE WAS AUTOGENERATED BY THE JS-FU BUILD SCRIPT
    MODIFYING THIS FILE IS FINE, BUT YOU REALLY SHOULD BE MODIFYING 
    THE LIBRARY DIRECTLY AND REGENERATING THIS FILE USING BUILD.js!!!!
    Javascript-fu - Written by Marak Squires
 
*/
var fu = {};
fu.version = "0.0.1";
fu.isDefined = function ( objecty ){	
  if(typeof objecty == 'undefined'){
    return false;
  }
  if(objecty == null || objecty == 'null'){
    return false;
  }
  if(objecty.toString() == 'NaN'){
    return false;  
  }
  return true;
};
fu.isNumber = function ( numbery ){
  if(numbery.toString() == 'NaN'){
    return false;  
  }
  if(numbery instanceof Number){
    return true; 
  }
  else if (Number( numbery ).toString() != 'NaN'){
    return true;
  }
  return false;
};
fu.isString = function ( stringy ){
  if(typeof stringy == 'string'){
    return true;
  }
  if(stringy instanceof String){
    return true;  
  }
	return false;
};
fu.isText = function ( texty ){
 	if(!(this.isString(texty))) {
		return false;
	}
	var textyLength = texty.length;
	if(texty.replace(/[^\w\s\.\?\!\,\;\:\'\"]/g, "").length == textyLength){
   return true;  
 }
	return false;
};
fu.isDate = function ( datey ){
  return (datey instanceof Date);
};
fu.isTime = function ( timey ){
  
};
<<<<<<< HEAD
fu.isArray = function (array){
	if(!(this.isDefined(array))) {
		return false;
	}
	if (array.constructor.toString().indexOf("Array") == -1) {
     return false;
	}
  else {
     return true;
	}
=======
fu.isArray = function ( array ){
  return (array instanceof Array);
>>>>>>> added dateTimeFu
};
fu.isJSON = function (jsony){
};
fu.isObject = function (objecty){
	if(this.isFunction(objecty)) {
		return false; 
	}
	if(this.isArray(objecty)) {
		return false;
	}
  return typeof objecty == 'object'
};
fu.isFunction = function (functiony){
  return typeof a == "function";
};
fu.isEmpty = function (){
  
};
fu.formatWrap = function ( m, b, c ){
  
      var i, j, l, s, r;
      if(m < 1)
          return this;
      for(i = -1, l = (r = this.split("\n")).length; ++i < l; r[i] += s)
          for(s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : ""))
              j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length
              || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
      return r.join("\n");
  
};
fu.formatTrim = function ( str ){
  return str;
};
fu.getLeft = function ( str, n ){
  return str;
};
fu.getRight = function ( str, n ){
  return str;
};
fu.toParams = function ( str ){
  return str;
};
fu.toLink = function ( str ){
  return str.replace(/(^|\s)((?:f|ht)tps?:\/\/[^\s]+)/g, replacement || '$1<a href="$2">$2</a>');
};
fu.getLinks = function ( str ){
  return str;
};
fu.toJSON = function ( str ){
  return (JSON.stringify(str));
};
fu.toNumber = function (numbery){

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
fu.toPercent = function (number){
  // TODO: add more stripping and formatting logic
  return number;
};
fu.formatRandom = function (range) {
		r = Math.floor(Math.random()*range);
		return r;
};
fu.formatShuffle = function ( object ){
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
fu.formatReverse = function ( numbery ){
  numbery = fu.toNumber( numerby );
  // apply formatting
  return numbery;
};
fu.formatNumber = function ( numbery ){
  numbery = fu.toNumber( numerby );
  // apply formatting
  return numbery;
};
fu.formatArray = function ( string ) {
	
};
fu.shuffleArray = function (o){ 
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
fu.toCamel = function (str) {
  return exports.toTitle(str).replace(/[^\w]/, '');
};
fu.toDash = function (str) {
  str = str.replace(/_/g, '-');
  return str;
};
fu.toHuman = function (str) {
  str = str.replace(/_id$/, "").replace(/_/, " ");
  return str.charAt(0).toUpperCase() + str.slice(1);
};
fu.toOrdinal = function (str) {
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
fu.toTitle = function (str) {

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
fu.toParam = function (str){
  var separator = '-';
  str = str.replace(/[^a-z0-9\-_]+/ig, separator)
  if(separator.length){
  
    str = str.replace(/-{2,}/g, separator);
    str = str.replace(/^-|-$/ig, '');
  }
  
  return str.toLowerCase();
};
fu.toUnderscore = function (str) {
	str = str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2');
	str = str.replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, "_");
	str = str.toLowerCase();
	return str;
};
fu.toPlural = function (str) {
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
fu.toSingle = function (str) {
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
fu.toDate = function (datey){
  // TODO: add more stripping and formatting logic
  return timey;
};
fu.getDate = function ( datey, format ){
  return timey;
};
fu.formatDate = function ( datey ){
  return datey;
};
fu.getTime = function (timey){
  return timey;
};
fu.dateFormat = function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
fu.toDollars = function (money){
  // TODO: add more stripping and formatting logic
  return money;
};
fu.toPennies = function (money){
    // TODO: add more stripping and formatting logic
    return money;
  };
fu.toNickels = function (money){
    // TODO: add more stripping and formatting logic
    return money;
  };
fu.toDimes = function (money){
    // TODO: add more stripping and formatting logic
    return money;
  };
fu.toQuarters = function (money){
    // TODO: add more stripping and formatting logic
    return money;
  };
fu.toEuros = function (money){
  // TODO: add more stripping and formatting logic
  return money;
};
fu.toCanadian = function (money){
  // TODO: add more stripping and formatting logic
  return money;
};
fu.getData = function ( selector ){

  return {};

};
if(typeof exports != "undefined"){for(var prop in fu){exports[prop] = fu[prop];}}