
var sys = require('sys');

exports.types = require('./lib/types');
exports.string = require('./lib/string');
exports.number = require('./lib/number');
exports.format = require('./lib/format');
exports.inflector = require('./lib/inflector');
exports.date = require('./lib/date');
exports.currency = require('./lib/currency');
exports.data = require('./lib/data');

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

//sys.puts(this.date.getMonthNumberFromName('march'));

sys.puts(JSON.stringify(exports));