
var vows = require('../vows/lib/vows'),
    assert = require('assert');

var sys = require('sys');

var Format = require('../lib/format');

sys.puts(Format.formatShuffle([1,2]));
sys.puts(Format.formatShuffle(12332424));
sys.puts(Format.formatShuffle("I am a very model man of model major general"));
