var sys = require('sys');

/*
// number -> second conversions
(1).day     // 3600 * 24 * 1
(2).months  // 3600 * 24 * 30 * 2
(1).year    // 3600 * 24 * 7 * 52

exports.yesterday

(4).days.from.now         // exports.now - 4.days
(4).days.from.yesterday   // exports.yesterday - 4.days

*/

/*
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
*/

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

/**
 * Resets the time of this Date object to 12:00 AM (00:00), which is the start of the day.
 * @return {Date}    this
 */
Date.prototype.clearTime = function () {
    this.setHours(0); 
    this.setMinutes(0); 
    this.setSeconds(0);
    this.setMilliseconds(0); 
    return this;
};

/**
 * Determines whether or not this instance is in a leap year.
 * @return {Boolean} true if this instance is in a leap year, else false
 */
Date.prototype.isLeapYear = function () { 
    var y = this.getFullYear(); 
    return (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)); 
};

/**
 * Determines whether or not this instance is a weekday.
 * @return {Boolean} true if this instance is a weekday
 */
Date.prototype.isWeekday = function () { 
    return !(this.is().sat() || this.is().sun());
};

/**
 * Get the number of days in the current month, adjusted for leap year.
 * @return {Number}  The number of days in the month
 */
Date.prototype.getDaysInMonth = function () { 
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

/**
 * Moves the date to the first day of the month.
 * @return {Date}    this
 */
Date.prototype.moveToFirstDayOfMonth = function () {
    return this.set({ day: 1 });
};

/**
 * Moves the date to the last day of the month.
 * @return {Date}    this
 */
Date.prototype.moveToLastDayOfMonth = function () { 
    return this.set({ day: this.getDaysInMonth()});
};

/**
 * Move to the next or last dayOfWeek based on the orient value.
 * @param {Number}   The dayOfWeek to move to.
 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
 * @return {Date}    this
 */
Date.prototype.moveToDayOfWeek = function (day, orient) {
    var diff = (day - this.getDay() + 7 * (orient || +1)) % 7;
    return this.addDays((diff === 0) ? diff += 7 * (orient || +1) : diff);
};

/**
 * Move to the next or last month based on the orient value.
 * @param {Number}   The month to move to. 0 = January, 11 = December.
 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
 * @return {Date}    this
 */
Date.prototype.moveToMonth = function (month, orient) {
    var diff = (month - this.getMonth() + 12 * (orient || +1)) % 12;
    return this.addMonths((diff === 0) ? diff += 12 * (orient || +1) : diff);
};

/**
 * Get the numeric day number of the year, adjusted for leap year.
 * @return {Number} 0 through 364 (365 in leap years)
 */
Date.prototype.getDayOfYear = function () {
    return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 86400000);
};

/**
 * Get the week of the year for the current date instance.
 * @param {Number}   A Number that represents the first day of the week (0-6) [Optional]
 * @return {Number}  0 through 53
 */
Date.prototype.getWeekOfYear = function (firstDayOfWeek) {
    var y = this.getFullYear(), m = this.getMonth(), d = this.getDate();
    
    var dow = firstDayOfWeek || Date.CultureInfo.firstDayOfWeek;
	
    var offset = 7 + 1 - new Date(y, 0, 1).getDay();
    if (offset == 8) {
        offset = 1;
    }
    var daynum = ((Date.UTC(y, m, d, 0, 0, 0) - Date.UTC(y, 0, 1, 0, 0, 0)) / 86400000) + 1;
    var w = Math.floor((daynum - offset + 7) / 7);
    if (w === dow) {
        y--;
        var prevOffset = 7 + 1 - new Date(y, 0, 1).getDay();
        if (prevOffset == 2 || prevOffset == 8) { 
            w = 53; 
        } else { 
            w = 52; 
        }
    }
    return w;
};

/**
 * Determine whether Daylight Saving Time (DST) is in effect
 * @return {Boolean} True if DST is in effect.
 */
Date.prototype.isDST = function () {
    console.log('isDST');
    /* TODO: not sure if this is portable ... get from Date.CultureInfo? */
    return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D";
};

/**
 * Get the timezone abbreviation of the current date.
 * @return {String} The abbreviated timezone name (e.g. "EST")
 */
Date.prototype.getTimezone = function () {
    return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST());
};

Date.prototype.setTimezoneOffset = function (s) {
    var here = this.getTimezoneOffset(), there = Number(s) * -6 / 10;
    this.addMinutes(there - here); 
    return this;
};

Date.prototype.setTimezone = function (s) { 
    return this.setTimezoneOffset(Date.getTimezoneOffset(s)); 
};

/**
 * Get the offset from UTC of the current date.
 * @return {String} The 4-character offset string prefixed with + or - (e.g. "-0500")
 */
Date.prototype.getUTCOffset = function () {
    var n = this.getTimezoneOffset() * -10 / 6, r;
    if (n < 0) { 
        r = (n - 10000).toString(); 
        return r[0] + r.substr(2); 
    } else { 
        r = (n + 10000).toString();  
        return "+" + r.substr(1); 
    }
};

/**
 * Gets the name of the day of the week.
 * @param {Boolean}  true to return the abbreviated name of the day of the week
 * @return {String}  The name of the day
 */
Date.prototype.getDayName = function (abbrev) {
    return abbrev ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : 
        Date.CultureInfo.dayNames[this.getDay()];
};

/**
 * Gets the month name.
 * @param {Boolean}  true to return the abbreviated name of the month
 * @return {String}  The name of the month
 */
Date.prototype.getMonthName = function (abbrev) {
    return abbrev ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : 
        Date.CultureInfo.monthNames[this.getMonth()];
};

// private
Date.prototype._toString = Date.prototype.toString;

/**
 * Converts the value of the current Date object to its equivalent string representation.
 * Format Specifiers
<pre>
Format  Description                                                                  Example
------  ---------------------------------------------------------------------------  -----------------------
 s      The seconds of the minute between 1-59.                                      "1" to "59"
 ss     The seconds of the minute with leading zero if required.                     "01" to "59"
 
 m      The minute of the hour between 0-59.                                         "1"  or "59"
 mm     The minute of the hour with leading zero if required.                        "01" or "59"
 
 h      The hour of the day between 1-12.                                            "1"  to "12"
 hh     The hour of the day with leading zero if required.                           "01" to "12"
 
 H      The hour of the day between 1-23.                                            "1"  to "23"
 HH     The hour of the day with leading zero if required.                           "01" to "23"
 
 d      The day of the month between 1 and 31.                                       "1"  to "31"
 dd     The day of the month with leading zero if required.                          "01" to "31"
 ddd    Abbreviated day name. Date.CultureInfo.abbreviatedDayNames.                  "Mon" to "Sun" 
 dddd   The full day name. Date.CultureInfo.dayNames.                                "Monday" to "Sunday"
 
 M      The month of the year between 1-12.                                          "1" to "12"
 MM     The month of the year with leading zero if required.                         "01" to "12"
 MMM    Abbreviated month name. Date.CultureInfo.abbreviatedMonthNames.              "Jan" to "Dec"
 MMMM   The full month name. Date.CultureInfo.monthNames.                            "January" to "December"

 yy     Displays the year as a maximum two-digit number.                             "99" or "07"
 yyyy   Displays the full four digit year.                                           "1999" or "2007"
 
 t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
        Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
 tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
        Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
</pre>
 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
 * @return {String}  A string representation of the current Date object.
 */
Date.prototype.toString = function (format) {
    var self = this;

    var p = function p(s) {
        return (s.toString().length == 1) ? "0" + s : s;
    };

    return format ? format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, 
    function (format) {
        switch (format) {
        case "hh":
            return p(self.getHours() < 13 ? self.getHours() : (self.getHours() - 12));
        case "h":
            return self.getHours() < 13 ? self.getHours() : (self.getHours() - 12);
        case "HH":
            return p(self.getHours());
        case "H":
            return self.getHours();
        case "mm":
            return p(self.getMinutes());
        case "m":
            return self.getMinutes();
        case "ss":
            return p(self.getSeconds());
        case "s":
            return self.getSeconds();
        case "yyyy":
            return self.getFullYear();
        case "yy":
            return self.getFullYear().toString().substring(2, 4);
        case "dddd":
            return self.getDayName();
        case "ddd":
            return self.getDayName(true);
        case "dd":
            return p(self.getDate());
        case "d":
            return self.getDate().toString();
        case "MMMM":
            return self.getMonthName();
        case "MMM":
            return self.getMonthName(true);
        case "MM":
            return p((self.getMonth() + 1));
        case "M":
            return self.getMonth() + 1;
        case "t":
            return self.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
        case "tt":
            return self.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
        case "zzz":
        case "zz":
        case "z":
            return "";
        }
    }
    ) : this._toString();
};


/**
 * Version: 1.0 Alpha-1 
 * Build Date: 13-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
 */
Date.now=function(){return new Date();};Date.today=function(){return Date.now().clearTime();};Date.prototype._orient=+1;Date.prototype.next=function(){this._orient=+1;return this;};Date.prototype.last=Date.prototype.prev=Date.prototype.previous=function(){this._orient=-1;return this;};Date.prototype._is=false;Date.prototype.is=function(){this._is=true;return this;};Number.prototype._dateElement="day";Number.prototype.fromNow=function(){var c={};c[this._dateElement]=this;return Date.now().add(c);};Number.prototype.ago=function(){var c={};c[this._dateElement]=this*-1;return Date.now().add(c);};(function(){var $D=Date.prototype,$N=Number.prototype;var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),de;var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
return this.moveToDayOfWeek(n,this._orient);};};for(var i=0;i<dx.length;i++){$D[dx[i]]=$D[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};for(var j=0;j<mx.length;j++){$D[mx[j]]=$D[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$D[de]=$D[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}}());Date.prototype.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ");};Date.prototype.toShortDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);};Date.prototype.toLongDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);};Date.prototype.toShortTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);};Date.prototype.toLongTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);};Date.prototype.getOrdinal=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};


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

/*

  // Returns the minutes (0-59) in the specified date according to local time.
  exports.getMinutes = function(timey){
    return timey;
  };
  
  // Returns the month (0-11) in the specified date according to local time.
  exports.getMonth = function(timey){
    return timey;
  };

  //  Returns the seconds (0-59) in the specified date according to local time.
  exports.getSeconds = function(timey){
    return timey;
  };
  
*/
  
  
  /*
  
  //  Returns the time-zone offset in minutes for the current locale.
  exports.getTimezoneOffset = function(timey){
    return timey;
  };
  
  //  Returns the day (date) of the month (0-31) in the specified date according to universal time.
  exports.getUTCDate = function(timey){
    return timey;
  };
  
  //  Returns the day of the week (0-6) in the specified date according to universal time.
  exports.getUTCDay = function(timey){
    return timey;
  };
  
  //  Returns the year (4 digits for 4-digit years) in the specified date according to universal time.
  exports.getUTCFullYear = function(timey){
    return timey;
  };

  //  Returns the hours (0-23) in the specified date according to universal time.
  exports.getUTCHours = function(timey){
    return timey;
  };
  
  //  Returns the milliseconds (0-999) in the specified date according to universal time.
  exports.getUTCMilliseconds = function(timey){
    return timey;
  };
  
  //  Returns the minutes (0-59) in the specified date according to universal time.
  exports.getUTCMinutes = function(timey){
    return timey;
  };
  
  //  Returns the month (0-11) in the specified date according to universal time.
  exports.getUTCMonth = function(timey){
    return timey;
  };

  //  Returns the seconds (0-59) in the specified date according to universal time.
  exports.getUTCSeconds = function(timey){
    return timey;
  };

  //  Converts a date to a string, using the universal time convention.
  exports.toUTCString = function(timey){
    return timey;
  };

  */
  /*
  setDate
  Sets the day of the month (1-31) for a specified date according to local time.
  setFullYear
  Sets the full year (4 digits for 4-digit years) for a specified date according to local time.
  setHours
  Sets the hours (0-23) for a specified date according to local time.
  setMilliseconds
  Sets the milliseconds (0-999) for a specified date according to local time.
  setMinutes
  Sets the minutes (0-59) for a specified date according to local time.
  setMonth
  Sets the month (0-11) for a specified date according to local time.
  setSeconds
  Sets the seconds (0-59) for a specified date according to local time.
  setTime
  Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC, allowing for negative numbers for times prior.
  setUTCDate
  Sets the day of the month (1-31) for a specified date according to universal time.
  setUTCFullYear
  Sets the full year (4 digits for 4-digit years) for a specified date according to universal time.
  setUTCHours
  Sets the hour (0-23) for a specified date according to universal time.
  setUTCMilliseconds
  Sets the milliseconds (0-999) for a specified date according to universal time.
  setUTCMinutes
  Sets the minutes (0-59) for a specified date according to universal time.
  setUTCMonth
  Sets the month (0-11) for a specified date according to universal time.
  setUTCSeconds
  Sets the seconds (0-59) for a specified date according to universal time.
  setYear
  Deprecated
  Sets the year (usually 2-3 digits) for a specified date according to local time. Use setFullYear instead.
  
  toDateString
   Returns the "date" portion of the Date as a human-readable string.
   toGMTString
   Deprecated
   Converts a date to a string, using the Internet GMT conventions. Use toUTCString instead.
   toLocaleDateString
   Returns the "date" portion of the Date as a string, using the current locale's conventions.
   toLocaleFormat
   Non-standard
   Converts a date to a string, using a format string.
   toLocaleString
   Converts a date to a string, using the current locale's conventions. Overrides the Object.toLocaleString method.
   toLocaleTimeString
   Returns the "time" portion of the Date as a string, using the current locale's conventions.
   toSource
   Non-standard
   Returns a string representing the source for an equivalent Date object; you can use this value to create a new object. Overrides the Object.prototype.toSource method.
   toString
   Returns a string representing the specified Date object. Overrides the Object.prototype.toString method.
  
  
  */

  
 
	exports.cultureinfo = function(){
		return{
		/* Culture Name */
	    name: "en-US",
	    englishName: "English (United States)",
	    nativeName: "English (United States)",

	    /* Day Name Strings */
	    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
	    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],

	    /* Month Name Strings */
	    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

		/* AM/PM Designators */
	    amDesignator: "AM",
	    pmDesignator: "PM",

	    firstDayOfWeek: 0,
	    twoDigitYearMax: 2029,

	    /**
	     * The dateElementOrder is based on the order of the 
	     * format specifiers in the formatPatterns.DatePattern. 
	     *
	     * Example:
	     <pre>
	     shortDatePattern    dateElementOrder
	     ------------------  ---------------- 
	     "M/d/yyyy"          "mdy"
	     "dd/MM/yyyy"        "dmy"
	     "yyyy-MM-dd"        "ymd"
	     </pre>
	     *
	     * The correct dateElementOrder is required by the parser to
	     * determine the expected order of the date elements in the
	     * string being parsed.
	     */
	    dateElementOrder: "mdy",

	    /* Standard date and time format patterns */
	    formatPatterns: {
	        shortDate: "M/d/yyyy",
	        longDate: "dddd, MMMM dd, yyyy",
	        shortTime: "h:mm tt",
	        longTime: "h:mm:ss tt",
	        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
	        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
	        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
	        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
	        monthDay: "MMMM dd",
	        yearMonth: "MMMM, yyyy"
	    },

	    /**
	     * NOTE: If a string format is not parsing correctly, but
	     * you would expect it parse, the problem likely lies below. 
	     * 
	     * The following regex patterns control most of the string matching
	     * within the parser.
	     * 
	     * The Month name and Day name patterns were automatically generated
	     * and in general should be (mostly) correct. 
	     *
	     * Beyond the month and day name patterns are natural language strings.
	     * Example: "next", "today", "months"
	     *
	     * These natural language string may NOT be correct for this culture. 
	     * If they are not correct, please translate and edit this file
	     * providing the correct regular expression pattern. 
	     *
	     * If you modify this file, please post your revised CultureInfo file
	     * to the Datejs Forum located at http://www.datejs.com/forums/.
	     *
	     * Please mark the subject of the post with [CultureInfo]. Example:
	     *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)
	     * 
	     * We will add the modified patterns to the master source files.
	     *
	     * As well, please review the list of "Future Strings" section below. 
	     */	
	    regexPatterns: {
	        jan: /^jan(uary)?/i,
	        feb: /^feb(ruary)?/i,
	        mar: /^mar(ch)?/i,
	        apr: /^apr(il)?/i,
	        may: /^may/i,
	        jun: /^jun(e)?/i,
	        jul: /^jul(y)?/i,
	        aug: /^aug(ust)?/i,
	        sep: /^sep(t(ember)?)?/i,
	        oct: /^oct(ober)?/i,
	        nov: /^nov(ember)?/i,
	        dec: /^dec(ember)?/i,

	        sun: /^su(n(day)?)?/i,
	        mon: /^mo(n(day)?)?/i,
	        tue: /^tu(e(s(day)?)?)?/i,
	        wed: /^we(d(nesday)?)?/i,
	        thu: /^th(u(r(s(day)?)?)?)?/i,
	        fri: /^fr(i(day)?)?/i,
	        sat: /^sa(t(urday)?)?/i,

	        future: /^next/i,
	        past: /^last|past|prev(ious)?/i,
	        add: /^(\+|aft(er)?|from|hence)/i,
	        subtract: /^(\-|bef(ore)?|ago)/i,

	        yesterday: /^yes(terday)?/i,
	        today: /^t(od(ay)?)?/i,
	        tomorrow: /^tom(orrow)?/i,
	        now: /^n(ow)?/i,

	        millisecond: /^ms|milli(second)?s?/i,
	        second: /^sec(ond)?s?/i,
	        minute: /^mn|min(ute)?s?/i,
			hour: /^h(our)?s?/i,
			week: /^w(eek)?s?/i,
	        month: /^m(onth)?s?/i,
	        day: /^d(ay)?s?/i,
	        year: /^y(ear)?s?/i,

	        shortMeridian: /^(a|p)/i,
	        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
	        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
	        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
	        timeContext: /^\s*(\:|a(?!u|p)|p)/i
	    },

		timezones: [{name:"UTC", offset:"-000"}, {name:"GMT", offset:"-000"}, {name:"EST", offset:"-0500"}, {name:"EDT", offset:"-0400"}, {name:"CST", offset:"-0600"}, {name:"CDT", offset:"-0500"}, {name:"MST", offset:"-0700"}, {name:"MDT", offset:"-0600"}, {name:"PST", offset:"-0800"}, {name:"PDT", offset:"-0700"}]
	}
};

	/********************
	 ** Future Strings **
	 ********************
	 * 
	 * The following list of strings may not be currently being used, but 
	 * may be incorporated into the Datejs library later. 
	 *
	 * We would appreciate any help translating the strings below.
	 * 
	 * If you modify this file, please post your revised CultureInfo file
	 * to the Datejs Forum located at http://www.datejs.com/forums/.
	 *
	 * Please mark the subject of the post with [CultureInfo]. Example:
	 *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)b
	 *
	 * English Name        Translated
	 * ------------------  -----------------
	 * about               about
	 * ago                 ago
	 * date                date
	 * time                time
	 * calendar            calendar
	 * show                show
	 * hourly              hourly
	 * daily               daily
	 * weekly              weekly
	 * bi-weekly           bi-weekly
	 * fortnight           fortnight
	 * monthly             monthly
	 * bi-monthly          bi-monthly
	 * quarter             quarter
	 * quarterly           quarterly
	 * yearly              yearly
	 * annual              annual
	 * annually            annually
	 * annum               annum
	 * again               again
	 * between             between
	 * after               after
	 * from now            from now
	 * repeat              repeat
	 * times               times
	 * per                 per
	 * min (abbrev minute) min
	 * morning             morning
	 * noon                noon
	 * night               night
	 * midnight            midnight
	 * mid-night           mid-night
	 * evening             evening
	 * final               final
	 * future              future
	 * spring              spring
	 * summer              summer
	 * fall                fall
	 * winter              winter
	 * end of              end of
	 * end                 end
	 * long                long
	 * short               short
	 */
	
exports.parseLibrary = function() {
	/**
	 * @version: 1.0 Alpha-1
	 * @author: Coolite Inc. http://www.coolite.com/
	 * @date: 2008-04-13
	 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
	 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
	 * @website: http://www.datejs.com/
	 */

	    Date.Parsing = {
	        Exception: function (s) {
	            this.message = "Parse error at '" + s.substring(0, 10) + " ...'"; 
	        }
	    };

	    var $P = Date.Parsing; 
	    var _ = $P.Operators = {
	        //
	        // Tokenizers
	        //
	        rtoken: function (r) { // regex token
	            return function (s) {
	                var mx = s.match(r);
	                if (mx) { 
	                    return ([ mx[0], s.substring(mx[0].length) ]); 
	                } else { 
	                    throw new $P.Exception(s); 
	                }
	            };
	        },
	        token: function (s) { // whitespace-eating token
	            return function (s) {
	                return _.rtoken(new RegExp("^\s*" + s + "\s*"))(s);
	                // Removed .strip()
	                // return _.rtoken(new RegExp("^\s*" + s + "\s*"))(s).strip();
	            };
	        },
	        stoken: function (s) { // string token
	            return _.rtoken(new RegExp("^" + s)); 
	        },

	        //
	        // Atomic Operators
	        // 

	        until: function (p) {
	            return function (s) {
	                var qx = [], rx = null;
	                while (s.length) { 
	                    try { 
	                        rx = p.call(this, s); 
	                    } catch (e) { 
	                        qx.push(rx[0]); 
	                        s = rx[1]; 
	                        continue; 
	                    }
	                    break;
	                }
	                return [ qx, s ];
	            };
	        },
	        many: function (p) {
	            return function (s) {
	                var rx = [], r = null; 
	                while (s.length) { 
	                    try { 
	                        r = p.call(this, s); 
	                    } catch (e) { 
	                        return [ rx, s ]; 
	                    }
	                    rx.push(r[0]); 
	                    s = r[1];
	                }
	                return [ rx, s ];
	            };
	        },

	        // generator operators -- see below
	        optional: function (p) {
	            return function (s) {
	                var r = null; 
	                try { 
	                    r = p.call(this, s); 
	                } catch (e) { 
	                    return [ null, s ]; 
	                }
	                return [ r[0], r[1] ];
	            };
	        },
	        not: function (p) {
	            return function (s) {
	                try { 
	                    p.call(this, s); 
	                } catch (e) { 
	                    return [null, s]; 
	                }
	                throw new $P.Exception(s);
	            };
	        },
	        ignore: function (p) {
	            return p ? 
	            function (s) { 
	                var r = null; 
	                r = p.call(this, s); 
	                return [null, r[1]]; 
	            } : null;
	        },
	        product: function () {
	            var px = arguments[0], 
	            qx = Array.prototype.slice.call(arguments, 1), rx = [];
	            for (var i = 0 ; i < px.length ; i++) {
	                rx.push(_.each(px[i], qx));
	            }
	            return rx;
	        },
	        cache: function (rule) { 
	            var cache = {}, r = null; 
	            return function (s) {
	                try { 
	                    r = cache[s] = (cache[s] || rule.call(this, s)); 
	                } catch (e) { 
	                    r = cache[s] = e; 
	                }
	                if (r instanceof $P.Exception) { 
	                    throw r; 
	                } else { 
	                    return r; 
	                }
	            };
	        },

	        // vector operators -- see below
	        any: function () {
	            var px = arguments;
	            return function (s) { 
	                var r = null;
	                for (var i = 0; i < px.length; i++) { 
	                    if (px[i] == null) { 
	                        continue; 
	                    }
	                    try { 
	                        r = (px[i].call(this, s)); 
	                    } catch (e) { 
	                        r = null; 
	                    }
	                    if (r) { 
	                        return r; 
	                    }
	                } 
	                throw new $P.Exception(s);
	            };
	        },
	        each: function () { 
	            var px = arguments;
	            return function (s) { 
	                var rx = [], r = null;
	                for (var i = 0; i < px.length ; i++) { 
	                    if (px[i] == null) { 
	                        continue; 
	                    }
	                    try { 
	                        r = (px[i].call(this, s)); 
	                    } catch (e) { 
	                        throw new $P.Exception(s); 
	                    }
	                    rx.push(r[0]); 
	                    s = r[1];
	                }
	                return [ rx, s]; 
	            };
	        },
	        all: function () { 
	            var px = arguments, _ = _; 
	            return _.each(_.optional(px)); 
	        },

	        // delimited operators
	        sequence: function (px, d, c) {
	            d = d || _.rtoken(/^\s*/);  
	            c = c || null;

	            if (px.length == 1) { 
	                return px[0]; 
	            }
	            return function (s) {
	                var r = null, q = null;
	                var rx = []; 
	                for (var i = 0; i < px.length ; i++) {
	                    try { 
	                        r = px[i].call(this, s); 
	                    } catch (e) { 
	                        break; 
	                    }
	                    rx.push(r[0]);
	                    try { 
	                        q = d.call(this, r[1]); 
	                    } catch (ex) { 
	                        q = null; 
	                        break; 
	                    }
	                    s = q[1];
	                }
	                if (!r) { 
	                    throw new $P.Exception(s); 
	                }
	                if (q) { 
	                    throw new $P.Exception(q[1]); 
	                }
	                if (c) {
	                    try { 
	                        r = c.call(this, r[1]);
	                    } catch (ey) { 
	                        throw new $P.Exception(r[1]); 
	                    }
	                }
	                return [ rx, (r?r[1]:s) ];
	            };
	        },

		    //
		    // Composite Operators
		    //

	        between: function (d1, p, d2) { 
	            d2 = d2 || d1; 
	            var _fn = _.each(_.ignore(d1), p, _.ignore(d2));
	            return function (s) { 
	                var rx = _fn.call(this, s); 
	                return [[rx[0][0], r[0][2]], rx[1]]; 
	            };
	        },
	        list: function (p, d, c) {
	            d = d || _.rtoken(/^\s*/);  
	            c = c || null;
	            return (p instanceof Array ?
	                _.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) :
	                _.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c)));
	        },
	        set: function (px, d, c) {
	            d = d || _.rtoken(/^\s*/); 
	            c = c || null;
	            return function (s) {
	                // r is the current match, best the current 'best' match
	                // which means it parsed the most amount of input
	                var r = null, p = null, q = null, rx = null, best = [[], s], last = false;

	                // go through the rules in the given set
	                for (var i = 0; i < px.length ; i++) {

	                    // last is a flag indicating whether this must be the last element
	                    // if there is only 1 element, then it MUST be the last one
	                    q = null; 
	                    p = null; 
	                    r = null; 
	                    last = (px.length == 1); 

	                    // first, we try simply to match the current pattern
	                    // if not, try the next pattern
	                    try { 
	                        r = px[i].call(this, s);
	                    } catch (e) { 
	                        continue; 
	                    }

	                    // since we are matching against a set of elements, the first
	                    // thing to do is to add r[0] to matched elements
	                    rx = [[r[0]], r[1]];

	                    // if we matched and there is still input to parse and 
	                    // we don't already know this is the last element,
	                    // we're going to next check for the delimiter ...
	                    // if there's none, or if there's no input left to parse
	                    // than this must be the last element after all ...
	                    if (r[1].length > 0 && ! last) {
	                        try { 
	                            q = d.call(this, r[1]); 
	                        } catch (ex) { 
	                            last = true; 
	                        }
	                    } else { 
	                        last = true; 
	                    }

					    // if we parsed the delimiter and now there's no more input,
					    // that means we shouldn't have parsed the delimiter at all
					    // so don't update r and mark this as the last element ...
	                    if (!last && q[1].length === 0) { 
	                        last = true; 
	                    }


					    // so, if this isn't the last element, we're going to see if
					    // we can get any more matches from the remaining (unmatched)
					    // elements ...
	                    if (!last) {

	                        // build a list of the remaining rules we can match against,
	                        // i.e., all but the one we just matched against
	                        var qx = []; 
	                        for (var j = 0; j < px.length ; j++) { 
	                            if (i != j) { 
	                                qx.push(px[j]); 
	                            }
	                        }

	                        // now invoke recursively set with the remaining input
	                        // note that we don't include the closing delimiter ...
	                        // we'll check for that ourselves at the end
	                        p = _.set(qx, d).call(this, q[1]);

	                        // if we got a non-empty set as a result ...
	                        // (otw rx already contains everything we want to match)
	                        if (p[0].length > 0) {
	                            // update current result, which is stored in rx ...
	                            // basically, pick up the remaining text from p[1]
	                            // and concat the result from p[0] so that we don't
	                            // get endless nesting ...
	                            rx[0] = rx[0].concat(p[0]); 
	                            rx[1] = p[1]; 
	                        }
	                    }

					    // at this point, rx either contains the last matched element
					    // or the entire matched set that starts with this element.

					    // now we just check to see if this variation is better than
					    // our best so far, in terms of how much of the input is parsed
	                    if (rx[1].length < best[1].length) { 
	                        best = rx; 
	                    }

					    // if we've parsed all the input, then we're finished
	                    if (best[1].length === 0) { 
	                        break; 
	                    }
	                }

				    // so now we've either gone through all the patterns trying them
				    // as the initial match; or we found one that parsed the entire
				    // input string ...

				    // if best has no matches, just return empty set ...
	                if (best[0].length === 0) { 
	                    return best; 
	                }

				    // if a closing delimiter is provided, then we have to check it also
	                if (c) {
	                    // we try this even if there is no remaining input because the pattern
	                    // may well be optional or match empty input ...
	                    try { 
	                        q = c.call(this, best[1]); 
	                    } catch (ey) { 
	                        throw new $P.Exception(best[1]); 
	                    }

	                    // it parsed ... be sure to update the best match remaining input
	                    best[1] = q[1];
	                }

				    // if we're here, either there was no closing delimiter or we parsed it
				    // so now we have the best match; just return it!
	                return best;
	            };
	        },
	        forward: function (gr, fname) {
	            return function (s) { 
	                return gr[fname].call(this, s); 
	            };
	        },

	        //
	        // Translation Operators
	        //
	        replace: function (rule, repl) {
	            return function (s) { 
	                var r = rule.call(this, s); 
	                return [repl, r[1]]; 
	            };
	        },
	        process: function (rule, fn) {
	            return function (s) {  
	                var r = rule.call(this, s); 
	                return [fn.call(this, r[0]), r[1]]; 
	            };
	        },
	        min: function (min, rule) {
	            return function (s) {
	                var rx = rule.call(this, s); 
	                if (rx[0].length < min) { 
	                    throw new $P.Exception(s); 
	                }
	                return rx;
	            };
	        }
	    };


		// Generator Operators And Vector Operators

		// Generators are operators that have a signature of F(R) => R,
		// taking a given rule and returning another rule, such as 
		// ignore, which parses a given rule and throws away the result.

		// Vector operators are those that have a signature of F(R1,R2,...) => R,
		// take a list of rules and returning a new rule, such as each.

		// Generator operators are converted (via the following _generator
		// function) into functions that can also take a list or array of rules
		// and return an array of new rules as though the function had been
		// called on each rule in turn (which is what actually happens).

		// This allows generators to be used with vector operators more easily.
		// Example:
		// each(ignore(foo, bar)) instead of each(ignore(foo), ignore(bar))

		// This also turns generators into vector operators, which allows
		// constructs like:
		// not(cache(foo, bar))

	    var _generator = function (op) {
	        return function () {
	            var args = null, rx = [];
	            if (arguments.length > 1) {
	                args = Array.prototype.slice.call(arguments);
	            } else if (arguments[0] instanceof Array) {
	                args = arguments[0];
	            }
	            if (args) { 
	                for (var i = 0, px = args.shift() ; i < px.length ; i++) {
	                    args.unshift(px[i]); 
	                    rx.push(op.apply(null, args)); 
	                    args.shift();
	                    return rx;
	                } 
	            } else { 
	                return op.apply(null, arguments); 
	            }
	        };
	    };

	    var gx = "optional not ignore cache".split(/\s/);

	    for (var i = 0 ; i < gx.length ; i++) { 
	        _[gx[i]] = _generator(_[gx[i]]); 
	    }

	    var _vector = function (op) {
	        return function () {
	            if (arguments[0] instanceof Array) { 
	                return op.apply(null, arguments[0]); 
	            } else { 
	                return op.apply(null, arguments); 
	            }
	        };
	    };

	    var vx = "each any all".split(/\s/);

	    for (var j = 0 ; j < vx.length ; j++) { 
	        _[vx[j]] = _vector(_[vx[j]]); 
	    }

	   var $D = Date;
		 var $C = this.cultureinfo();
		 var $P = $D.prototype;

	    var flattenAndCompact = function (ax) { 
	        var rx = []; 
	        for (var i = 0; i < ax.length; i++) {
	            if (ax[i] instanceof Array) {
	                rx = rx.concat(flattenAndCompact(ax[i]));
	            } else { 
	                if (ax[i]) { 
	                    rx.push(ax[i]); 
	                }
	            }
	        }
	        return rx;
	    };

	    $D.Grammar = {};

	    $D.Translator = {
	        hour: function (s) { 
	            return function () { 
	                this.hour = Number(s); 
	            }; 
	        },
	        minute: function (s) { 
	            return function () { 
	                this.minute = Number(s); 
	            }; 
	        },
	        second: function (s) { 
	            return function () { 
	                this.second = Number(s); 
	            }; 
	        },
	        meridian: function (s) { 
	            return function () { 
	                this.meridian = s.slice(0, 1).toLowerCase(); 
	            }; 
	        },
	        timezone: function (s) {
	            return function () {
	                var n = s.replace(/[^\d\+\-]/g, "");
	                if (n.length) { 
	                    this.timezoneOffset = Number(n); 
	                } else { 
	                    this.timezone = s.toLowerCase(); 
	                }
	            };
	        },
	        day: function (x) { 
	            var s = x[0];
	            return function () { 
	                this.day = Number(s.match(/\d+/)[0]); 
	            };
	        }, 
	        month: function (s) {
	            return function () {
	                this.month = (s.length == 3) ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4 : Number(s) - 1;
	            };
	        },
	        year: function (s) {
	            return function () {
	                var n = Number(s);
	                this.year = ((s.length > 2) ? n : 
	                    (n + (((n + 2000) < $C.twoDigitYearMax) ? 2000 : 1900))); 
	            };
	        },
	        rday: function (s) { 
	            return function () {
	                switch (s) {
	                case "yesterday": 
	                    this.days = -1;
	                    break;
	                case "tomorrow":  
	                    this.days = 1;
	                    break;
	                case "today": 
	                    this.days = 0;
	                    break;
	                case "now": 
	                    this.days = 0; 
	                    this.now = true; 
	                    break;
	                }
	            };
	        },
	        finishExact: function (x) {  
	            x = (x instanceof Array) ? x : [ x ]; 

	            for (var i = 0 ; i < x.length ; i++) { 
	                if (x[i]) { 
	                    x[i].call(this); 
	                }
	            }

	            var now = new Date();

	            if ((this.hour || this.minute) && (!this.month && !this.year && !this.day)) {
	                this.day = now.getDate();
	            }

	            if (!this.year) {
	                this.year = now.getFullYear();
	            }

	            if (!this.month && this.month !== 0) {
	                this.month = now.getMonth();
	            }

	            if (!this.day) {
	                this.day = 1;
	            }

	            if (!this.hour) {
	                this.hour = 0;
	            }

	            if (!this.minute) {
	                this.minute = 0;
	            }

	            if (!this.second) {
	                this.second = 0;
	            }

	            if (this.meridian && this.hour) {
	                if (this.meridian == "p" && this.hour < 12) {
	                    this.hour = this.hour + 12;
	                } else if (this.meridian == "a" && this.hour == 12) {
	                    this.hour = 0;
	                }
	            }

	            if (this.day > $D.getDaysInMonth(this.year, this.month)) {
	                throw new RangeError(this.day + " is not a valid value for days.");
	            }

	            var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);

	            if (this.timezone) { 
	                r.set({ timezone: this.timezone }); 
	            } else if (this.timezoneOffset) { 
	                r.set({ timezoneOffset: this.timezoneOffset }); 
	            }

	            return r;
	        },			
	        finish: function (x) {
	            x = (x instanceof Array) ? flattenAndCompact(x) : [ x ];

	            if (x.length === 0) { 
	                return null; 
	            }

	            for (var i = 0 ; i < x.length ; i++) { 
	                if (typeof x[i] == "function") {
	                    x[i].call(this); 
	                }
	            }

	            var today = $D.today();

	            if (this.now && !this.unit && !this.operator) { 
	                return new Date(); 
	            } else if (this.now) {
	                today = new Date();
	            }

	            var expression = !!(this.days && this.days !== null || this.orient || this.operator);

	            var gap, mod, orient;
	            orient = ((this.orient == "past" || this.operator == "subtract") ? -1 : 1);

	            if(!this.now && "hour minute second".indexOf(this.unit) != -1) {
	                today.setTimeToNow();
	            }

	            if (this.month || this.month === 0) {
	                if ("year day hour minute second".indexOf(this.unit) != -1) {
	                    this.value = this.month + 1;
	                    this.month = null;
	                    expression = true;
	                }
	            }

	            if (!expression && this.weekday && !this.day && !this.days) {
	                var temp = Date[this.weekday]();
	                this.day = temp.getDate();
	                if (!this.month) {
	                    this.month = temp.getMonth();
	                }
	                this.year = temp.getFullYear();
	            }

	            if (expression && this.weekday && this.unit != "month") {
	                this.unit = "day";
	                gap = ($D.getDayNumberFromName(this.weekday) - today.getDay());
	                mod = 7;
	                this.days = gap ? ((gap + (orient * mod)) % mod) : (orient * mod);
	            }

	            if (this.month && this.unit == "day" && this.operator) {
	                this.value = (this.month + 1);
	                this.month = null;
	            }

	            if (this.value != null && this.month != null && this.year != null) {
	                this.day = this.value * 1;
	            }

	            if (this.month && !this.day && this.value) {
	                today.set({ day: this.value * 1 });
	                if (!expression) {
	                    this.day = this.value * 1;
	                }
	            }

	            if (!this.month && this.value && this.unit == "month" && !this.now) {
	                this.month = this.value;
	                expression = true;
	            }

	            if (expression && (this.month || this.month === 0) && this.unit != "year") {
	                this.unit = "month";
	                gap = (this.month - today.getMonth());
	                mod = 12;
	                this.months = gap ? ((gap + (orient * mod)) % mod) : (orient * mod);
	                this.month = null;
	            }

	            if (!this.unit) { 
	                this.unit = "day"; 
	            }

	            if (!this.value && this.operator && this.operator !== null && this[this.unit + "s"] && this[this.unit + "s"] !== null) {
	                this[this.unit + "s"] = this[this.unit + "s"] + ((this.operator == "add") ? 1 : -1) + (this.value||0) * orient;
	            } else if (this[this.unit + "s"] == null || this.operator != null) {
	                if (!this.value) {
	                    this.value = 1;
	                }
	                this[this.unit + "s"] = this.value * orient;
	            }

	            if (this.meridian && this.hour) {
	                if (this.meridian == "p" && this.hour < 12) {
	                    this.hour = this.hour + 12;
	                } else if (this.meridian == "a" && this.hour == 12) {
	                    this.hour = 0;
	                }
	            }

	            if (this.weekday && !this.day && !this.days) {
	                var temp = Date[this.weekday]();
	                this.day = temp.getDate();
	                if (temp.getMonth() !== today.getMonth()) {
	                    this.month = temp.getMonth();
	                }
	            }

	            if ((this.month || this.month === 0) && !this.day) { 
	                this.day = 1; 
	            }

	            if (!this.orient && !this.operator && this.unit == "week" && this.value && !this.day && !this.month) {
	                return Date.today().setWeek(this.value);
	            }

	            if (expression && this.timezone && this.day && this.days) {
	                this.day = this.days;
	            }
              sys.puts(JSON.stringify(today));
	            return (expression) ? today.add(this) : today.set(this);
	        }
	    };

	    var _ = $D.Parsing.Operators, g = $D.Grammar, t = $D.Translator, _fn;

	    g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/); 
	    g.timePartDelimiter = _.stoken(":");
	    g.whiteSpace = _.rtoken(/^\s*/);
	    g.generalDelimiter = _.rtoken(/^(([\s\,]|at|@|on)+)/);

	    var _C = {};
	    g.ctoken = function (keys) {
	        var fn = _C[keys];
	        if (! fn) {
	            var c = $C.regexPatterns;
	            var kx = keys.split(/\s+/), px = []; 
	            for (var i = 0; i < kx.length ; i++) {
	                px.push(_.replace(_.rtoken(c[kx[i]]), kx[i]));
	            }
	            fn = _C[keys] = _.any.apply(null, px);
	        }
	        return fn;
	    };
	    g.ctoken2 = function (key) { 
	        return _.rtoken($C.regexPatterns[key]);
	    };

	    // hour, minute, second, meridian, timezone
	    g.h = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour));
	    g.hh = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/), t.hour));
	    g.H = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour));
	    g.HH = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour));
	    g.m = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.minute));
	    g.mm = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.minute));
	    g.s = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.second));
	    g.ss = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.second));
	    g.hms = _.cache(_.sequence([g.H, g.m, g.s], g.timePartDelimiter));

	    // _.min(1, _.set([ g.H, g.m, g.s ], g._t));
	    g.t = _.cache(_.process(g.ctoken2("shortMeridian"), t.meridian));
	    g.tt = _.cache(_.process(g.ctoken2("longMeridian"), t.meridian));
	    g.z = _.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), t.timezone));
	    g.zz = _.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), t.timezone));

	    g.zzz = _.cache(_.process(g.ctoken2("timezone"), t.timezone));
	    g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([ g.tt, g.zzz ]));
	    g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix);

	    // days, months, years
	    g.d = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/), 
	        _.optional(g.ctoken2("ordinalSuffix"))), t.day));
	    g.dd = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/), 
	        _.optional(g.ctoken2("ordinalSuffix"))), t.day));
	    g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"), 
	        function (s) { 
	            return function () { 
	                this.weekday = s; 
	            }; 
	        }
	    ));
	    g.M = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/), t.month));
	    g.MM = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/), t.month));
	    g.MMM = g.MMMM = _.cache(_.process(
	        g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month));
	    g.y = _.cache(_.process(_.rtoken(/^(\d\d?)/), t.year));
	    g.yy = _.cache(_.process(_.rtoken(/^(\d\d)/), t.year));
	    g.yyy = _.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/), t.year));
	    g.yyyy = _.cache(_.process(_.rtoken(/^(\d\d\d\d)/), t.year));

		// rolling these up into general purpose rules
	    _fn = function () { 
	        return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext")));
	    };

	    g.day = _fn(g.d, g.dd); 
	    g.month = _fn(g.M, g.MMM); 
	    g.year = _fn(g.yyyy, g.yy);

	    // relative date / time expressions
	    g.orientation = _.process(g.ctoken("past future"), 
	        function (s) { 
	            return function () { 
	                this.orient = s; 
	            }; 
	        }
	    );
	    g.operator = _.process(g.ctoken("add subtract"), 
	        function (s) { 
	            return function () { 
	                this.operator = s; 
	            }; 
	        }
	    );  
	    g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday);
	    g.unit = _.process(g.ctoken("second minute hour day week month year"), 
	        function (s) { 
	            return function () { 
	                this.unit = s; 
	            }; 
	        }
	    );
	    g.value = _.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/), 
	        function (s) { 
	            return function () { 
	                this.value = s.replace(/\D/g, ""); 
	            }; 
	        }
	    );
	    g.expression = _.set([ g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM ]);

	    // pre-loaded rules for different date part order preferences
	    _fn = function () { 
	        return  _.set(arguments, g.datePartDelimiter); 
	    };
	    g.mdy = _fn(g.ddd, g.month, g.day, g.year);
	    g.ymd = _fn(g.ddd, g.year, g.month, g.day);
	    g.dmy = _fn(g.ddd, g.day, g.month, g.year);
	    g.date = function (s) { 
	        return ((g[$C.dateElementOrder] || g.mdy).call(this, s));
	    }; 

	    // parsing date format specifiers - ex: "h:m:s tt" 
	    // this little guy will generate a custom parser based
	    // on the format string, ex: g.format("h:m:s tt")
	    g.format = _.process(_.many(
	        _.any(
	        // translate format specifiers into grammar rules
	        _.process(
	        _.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), 
	        function (fmt) { 
	        if (g[fmt]) { 
	            return g[fmt]; 
	        } else { 
	            throw $D.Parsing.Exception(fmt); 
	        }
	    }
	    ),
	    // translate separator tokens into token rules
	    _.process(
	    _.rtoken(/^[^dMyhHmstz]+/), // all legal separators 
	        function (s) { 
	            return _.ignore(_.stoken(s)); 
	        } 
	    )
	    )), 
	        // construct the parser ...
	        function (rules) { 
	            return _.process(_.each.apply(null, rules), t.finishExact); 
	        }
	    );

	    var _F = {
			//"M/d/yyyy": function (s) { 
			//	var m = s.match(/^([0-2]\d|3[0-1]|\d)\/(1[0-2]|0\d|\d)\/(\d\d\d\d)/);
			//	if (m!=null) { 
			//		var r =  [ t.month.call(this,m[1]), t.day.call(this,m[2]), t.year.call(this,m[3]) ];
			//		r = t.finishExact.call(this,r);
			//		return [ r, "" ];
			//	} else {
			//		throw new Date.Parsing.Exception(s);
			//	}
			//}
			//"M/d/yyyy": function (s) { return [ new Date(Date._parse(s)), ""]; }
		}; 
	    var _get = function (f) { 
	        return _F[f] = (_F[f] || g.format(f)[0]);      
	    };

	    g.formats = function (fx) {
	        if (fx instanceof Array) {
	            var rx = []; 
	            for (var i = 0 ; i < fx.length ; i++) {
	                rx.push(_get(fx[i])); 
	            }
	            return _.any.apply(null, rx);
	        } else { 
	            return _get(fx); 
	        }
	    };

		// check for these formats first
	    g._formats = g.formats([
	        "\"yyyy-MM-ddTHH:mm:ssZ\"",
	        "yyyy-MM-ddTHH:mm:ssZ",
	        "yyyy-MM-ddTHH:mm:ssz",
	        "yyyy-MM-ddTHH:mm:ss",
	        "yyyy-MM-ddTHH:mmZ",
	        "yyyy-MM-ddTHH:mmz",
	        "yyyy-MM-ddTHH:mm",
	        "ddd, MMM dd, yyyy H:mm:ss tt",
	        "ddd MMM d yyyy HH:mm:ss zzz",
	        "MMddyyyy",
	        "ddMMyyyy",
	        "Mddyyyy",
	        "ddMyyyy",
	        "Mdyyyy",
	        "dMyyyy",
	        "yyyy",
	        "Mdyy",
	        "dMyy",
	        "d"
	    ]);

		// starting rule for general purpose grammar
	    g._start = _.process(_.set([ g.date, g.time, g.expression ], 
	        g.generalDelimiter, g.whiteSpace), t.finish);

		// real starting rule: tries selected formats first, 
		// then general purpose rule
	    g.start = function (s) {
	        try { 
	            var r = g._formats.call({}, s); 
	            if (r[1].length === 0) {
	                return r; 
	            }
	        } catch (e) {}
	        return g._start.call({}, s);
	    };

		$D._parse = $D.parse;

	    /**
	     * Converts the specified string value into its JavaScript Date equivalent using CultureInfo specific format information.
	     * 
	     * Example
	    <pre><code>
	    ///////////
	    // Dates //
	    ///////////

	    // 15-Oct-2004
	    var d1 = Date.parse("10/15/2004");

	    // 15-Oct-2004
	    var d1 = Date.parse("15-Oct-2004");

	    // 15-Oct-2004
	    var d1 = Date.parse("2004.10.15");

	    //Fri Oct 15, 2004
	    var d1 = Date.parse("Fri Oct 15, 2004");

	    ///////////
	    // Times //
	    ///////////

	    // Today at 10 PM.
	    var d1 = Date.parse("10 PM");

	    // Today at 10:30 PM.
	    var d1 = Date.parse("10:30 P.M.");

	    // Today at 6 AM.
	    var d1 = Date.parse("06am");

	    /////////////////////
	    // Dates and Times //
	    /////////////////////

	    // 8-July-2004 @ 10:30 PM
	    var d1 = Date.parse("July 8th, 2004, 10:30 PM");

	    // 1-July-2004 @ 10:30 PM
	    var d1 = Date.parse("2004-07-01T22:30:00");

	    ////////////////////
	    // Relative Dates //
	    ////////////////////

	    // Returns today's date. The string "today" is culture specific.
	    var d1 = Date.parse("today");

	    // Returns yesterday's date. The string "yesterday" is culture specific.
	    var d1 = Date.parse("yesterday");

	    // Returns the date of the next thursday.
	    var d1 = Date.parse("Next thursday");

	    // Returns the date of the most previous monday.
	    var d1 = Date.parse("last monday");

	    // Returns today's day + one year.
	    var d1 = Date.parse("next year");

	    ///////////////
	    // Date Math //
	    ///////////////

	    // Today + 2 days
	    var d1 = Date.parse("t+2");

	    // Today + 2 days
	    var d1 = Date.parse("today + 2 days");

	    // Today + 3 months
	    var d1 = Date.parse("t+3m");

	    // Today - 1 year
	    var d1 = Date.parse("today - 1 year");

	    // Today - 1 year
	    var d1 = Date.parse("t-1y"); 


	    /////////////////////////////
	    // Partial Dates and Times //
	    /////////////////////////////

	    // July 15th of this year.
	    var d1 = Date.parse("July 15");

	    // 15th day of current day and year.
	    var d1 = Date.parse("15");

	    // July 1st of current year at 10pm.
	    var d1 = Date.parse("7/1 10pm");
	    </code></pre>
	     *
	     * @param {String}   The string value to convert into a Date object [Required]
	     * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	     */
	    $D.parse = function (s) {
	        var r = null; 
	        if (!s) { 
	            return null; 
	        }
	        if (s instanceof Date) {
	            return s;
	        }
	        try { 
	            r = $D.Grammar.start.call({}, s.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1")); 
	        } catch (e) { 
	            return null; 
	        }
	        return ((r[1].length === 0) ? r[0] : null);
	    };

	    $D.getParseFunction = function (fx) {
	        var fn = $D.Grammar.formats(fx);
	        return function (s) {
	            var r = null;
	            try { 
	                r = fn.call({}, s); 
	            } catch (e) { 
	                return null; 
	            }
	            return ((r[1].length === 0) ? r[0] : null);
	        };
	    };

	    /**
	     * Converts the specified string value into its JavaScript Date equivalent using the specified format {String} or formats {Array} and the CultureInfo specific format information.
	     * The format of the string value must match one of the supplied formats exactly.
	     * 
	     * Example
	    <pre><code>
	    // 15-Oct-2004
	    var d1 = Date.parseExact("10/15/2004", "M/d/yyyy");

	    // 15-Oct-2004
	    var d1 = Date.parse("15-Oct-2004", "M-ddd-yyyy");

	    // 15-Oct-2004
	    var d1 = Date.parse("2004.10.15", "yyyy.MM.dd");

	    // Multiple formats
	    var d1 = Date.parseExact("10/15/2004", ["M/d/yyyy", "MMMM d, yyyy"]);
	    </code></pre>
	     *
	     * @param {String}   The string value to convert into a Date object [Required].
	     * @param {Object}   The expected format {String} or an array of expected formats {Array} of the date string [Required].
	     * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	     
	    $D.parseExact = function (s, fx) { 
	        return $D.getParseFunction(fx)(s); 
	    };	
	*/
	return $D;
};
/*
exports.getParseFunction = function (s) {
    var r = null; 
    if (!s) { 
        return null; 
    }
    if (s instanceof Date) {
        return s;
    }
     
        r = this.parseLibrary().Grammar.start.call({}, s.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1")); 
    
    return ((r[1].length === 0) ? r[0] : null);
};
*/