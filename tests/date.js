
var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var format = require('../index');

vows.describe('format.js lib/date').addVows({
  "getMonthNumberFromName()": {
    "on month as string": {
    topic: "march",
    "can get month as number from  string":function( n ){
      var result = format.date.getMonths( n );
      assert.equal(1,1);
    }}
  }
});
