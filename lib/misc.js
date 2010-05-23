// returns a single random number based on a range 
exports.toRandom = function(range) {
		r = Math.floor(Math.random()*range);
		return r;
};