/*
// number -> second conversions
(1).day     // 3600 * 24 * 1
(2).months  // 3600 * 24 * 30 * 2
(1).year    // 3600 * 24 * 7 * 52

exports.yesterday

(4).days.from.now         // exports.now - 4.days
(4).days.from.yesterday   // exports.yesterday - 4.days

*/

// time.js
// formats time

// takes in a string and attempts to coerce it into a date
exports.toDate = function(datey){
  // TODO: add more stripping and formatting logic
  return timey;
};

exports.getDate = function( datey, format ){
  return timey;
};

exports.formatDate = function ( datey ){
  return datey;
}

exports.getTime = function(timey){
  return timey;
};


/*
 * borrowed from Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 */
 
exports.pad = function (val, len) {
		val = String(val);
		len = len || 2;
		while (val.length < len) val = "0" + val;
		return val;
	};


exports.token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
exports.timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
exports.timezoneClip = /[^-+\dA-Z]/g;


var dateFormat = exports.dateFormat = function () {

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = fu.dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(fu.masks[mask] || mask || fu.masks["default"]);

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
				dd:   fu.pad(d),
				ddd:  fu.i18n().dayNames[D],
				dddd: fu.i18n().dayNames[D + 7],
				m:    m + 1,
				mm:   fu.pad(m + 1),
				mmm:  fu.i18n().monthNames[m],
				mmmm: fu.i18n().monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   fu.pad(H % 12 || 12),
				H:    H,
				HH:   fu.pad(H),
				M:    M,
				MM:   fu.pad(M),
				s:    s,
				ss:   fu.pad(s),
				l:    fu.pad(L, 3),
				L:    fu.pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(fu.timezone) || [""]).pop().replace(fu.timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + fu.pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(fu.token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
exports.masks = function(){return{
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	};
};

// Internationalization strings
exports.i18n = function(){return{
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]};
};
