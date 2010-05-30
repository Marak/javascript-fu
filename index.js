
var sys = require('sys');

exports.types = require('./lib/isFu');
exports.string = require('./lib/toFu');
exports.number = require('./lib/dateTimeFu');
exports.format = require('./lib/getFu');


// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

//sys.puts(this.date.getMonthNumberFromName('march'));

sys.puts(JSON.stringify(exports));