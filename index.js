
var sys = require('sys');

exports.isFu = require('./lib/isFu');
exports.toFu = require('./lib/toFu');
exports.dateTimeFu = require('./lib/dateTimeFu');
exports.getFu = require('./lib/getFu');

var root = this
// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

//sys.puts(this.date.getMonthNumberFromName('march'));

sys.puts(JSON.stringify(exports));

var ArrayProto = Array.prototype, ObjProto = Object.prototype;


// Create a safe reference to the Underscore object for use below.
exports.JsFu = function(obj) { return new wrapper(obj); }
    
 
// ------------------------ Setup the OOP Wrapper: --------------------------

  // If JsFu is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  var wrapper = function(obj) { this._wrapped = obj; };

  // Helper function to continue chaining intermediate results.
  var result = function(obj, chain) {
    return chain ? root.JsFu(obj).chain() : obj;
  };

  // A method to easily add functions to the OOP wrapper.
  var addToWrapper = function(name, func) {
    wrapper.prototype[name] = function() {
      var args = root.toFu.toArray(arguments);
      ArrayProto.unshift.call(args, this._wrapped);
      return result(func.apply(root.JsFu, args), this._chain);
    };
  };
  
exports.mixin = function(obj) {
      context = this;
      this.getFu.getEach(this.getFu.getKeys(obj), function(name){
        addToWrapper(name, context.JsFu[name] = obj[name]);
      });
    };
  
  this.mixin(this.getFu);
  this.mixin(this.toFu);
  this.mixin(this.isFu);  
  
  // Add all mutator Array functions to the wrapper.
  this.getFu.getEach(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      method.apply(this._wrapped, arguments);
      return result(this._wrapped, this._chain);
    };
  });

  // Add all accessor Array functions to the wrapper.
  this.getFu.getEach(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      return result(method.apply(this._wrapped, arguments), this._chain);
    };
  });

  // Start chaining a wrapped Underscore object.
  wrapper.prototype.chain = function() {
    this._chain = true;
    return this;
  };

  // Extracts the result from a wrapped and chained object.
  wrapper.prototype.end = function() {
    return this._wrapped;
  };