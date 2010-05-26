// returns a single random number based on a range 
var Type = require("./types");
var NumberFu = require("./number");

exports.formatRandom = function(range) {
		r = Math.floor(Math.random()*range);
		return r;
};

exports.formatShuffle = function( object ){
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

exports.formatNumber = function( numbery ){
  numbery = fu.toNumber( numerby );
  // apply formatting
  return numbery;
};

exports.formatArray = function( string ) {
	
};

exports.shuffleArray = function(o){ 
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};


