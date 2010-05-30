
var sys = require('sys');

exports.isFu = require('./lib/isFu');
exports.toFu = require('./lib/toFu');
exports.dateTimeFu = require('./lib/dateTimeFu');
exports.getFu = require('./lib/getFu');


// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

//sys.puts(this.date.getMonthNumberFromName('march'));

sys.puts(JSON.stringify(exports));