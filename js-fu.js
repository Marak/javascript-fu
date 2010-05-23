/*************** AUTOGENERATED @ 1274587376136 ***************
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
};
fu.isNumber = function ( numbery ){
  if(numbery.toString() == 'NaN'){
    return false;  
  }
  if(numbery instanceof Number){
    return true; 
  }
  else{
    return false;
  }
};
fu.isString = function ( stringy ){
  return (stringy instanceof String);
};
fu.isText = function ( texty ){

};
fu.isDate = function ( datey ){
  return (datey instanceof Date);
};
fu.isTime = function ( timey ){
  
};
fu.isArray = function (){
  
};
fu.isInflector = function (){
  
};
fu.isJSON = function (){
  
};
fu.isObject = function (){
  
};
fu.toString = function ( stringy ){
  return (stringy.toString());
};
fu.wordWrap = function ( m, b, c ){
  
      var i, j, l, s, r;
      if(m < 1)
          return this;
      for(i = -1, l = (r = this.split("\n")).length; ++i < l; r[i] += s)
          for(s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : ""))
              j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length
              || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
      return r.join("\n");
  
};
fu.trim = function ( str ){
  return str;
};
fu.left = function ( str, n ){
  return str;
};
fu.right = function ( str, n ){
  return str;
};
fu.toQueryParams = function ( str ){
  return str;
};
fu.toLink = function ( str ){
  return str.replace(/(^|\s)((?:f|ht)tps?:\/\/[^\s]+)/g, replacement || '$1<a href="$2">$2</a>');;
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
fu.toBase = function ( number ){
  
  Number.prototype.toBase = function(b, c){
      var s = "", n = this;
      if(b > (c = (c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").split("")).length || b < 2) return "";
      while(n)
          s = c[n % b] + s, n = Math.floor(n / b);
      return s;
  };
  String.prototype.parseInt = function(b, c){
      var s = 0, n, l = (n = this.split("")).length, i = 0;
      if(b > (c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").length || b < 2) return NaN;
      while(l--)
          s += c.indexOf(n[i++]) * Math.pow(b, l);
      return s;
  };
  
};
fu.formatRandom = function (range) {
		r = Math.floor(Math.random()*range);
		return r;
};
fu.formatShuffle = function ( numbery ){
  numbery = fu.toNumber( numerby );
  // apply formatting
  return numbery;
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
fu.getDate = function (timey){
    return timey;
  };
fu.getTime = function (timey){
  return timey;
};
fu.toTime = function (timey){
  // TODO: add more stripping and formatting logic
  return timey;
};
fu.toSeconds = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };
fu.toMinutes = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };
fu.toHours = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };
fu.toDays = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };
fu.toMonths = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };
fu.toYears = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };
fu.getDay = function (timey){
    return timey;
  };
fu.getFullYear = function (timey){
    return timey;
  };
fu.getHours = function (timey){
    return timey;
  };
fu.getMilliseconds = function (timey){
    return timey;
  };
fu.getMinutes = function (timey){
    return timey;
  };
fu.getMonth = function (timey){
    return timey;
  };
fu.getSeconds = function (timey){
    return timey;
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