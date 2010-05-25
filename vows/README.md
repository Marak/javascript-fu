<<<<<<< HEAD
Vows
====

> Asynchronous BDD & continuous integration for node.js

introduction
------------
There are two reasons why we might want asynchronous testing. The first, and obvious reason is that node.js is asynchronous, and therefore our tests need to be. The second reason is to make test suites which target I/O libraries run much faster.

_Vows_ is an experiment in making this possible, while adding a minimum of overhead.

![vows-ss](http://files.droplr.com/files/36156834/ZfmbC.Screen%20shot%202010-05-11%20at%2020:19:25.png)
=======
eyes
====

a customizable value inspector for Node.js
>>>>>>> d37d9548137044f07dd5acab76dbffad0ab67dee

synopsis
--------

<<<<<<< HEAD
    var vows = require('vows'),
        assert = require('assert');

    vows.describe('Deep Thought').addVows(function () {
        question('what is the answer to the universe?').addVow(function (answer) {
            assert.equals(answer, 42);
        }, 'it should know the answer to the ultimate question of life');
    });

In the example above, `question()` would be a function which returns an `EventEmitter`.
When the `"success"` event is emitted, the function passed to `addVow` is run,
and the results output to the console.

Vows are run as soon as the promise completes, so the order in which they are run is undefined.

installation
------------

    $ npm install vows

writing specs
-------------

    vows.describe('A Database library').addVows({
        'A DB object': {
            // run this once, and execute the following tests when it completes
            topic: function () { return new(DB) },

            'set() should store a k/v pair': {
                // the inner context gets the return values of the outer contexts
                // passed as arguments. Here, `db` is new(DB).
                topic: function (db) { return db.set('pulp', 'orange') },

                // `res` is the value emitted by the above `db.set`
                'and return OK': function (res) {
                    assert.equal(res, "OK");
                },
                'and when checked for existence': {
                    // here, we need to access `db`, from the parent context.
                    // It's passed as the 2nd argument to `topic`, we discard the first,
                    // which would have been the above `res`.
                    topic: function (_, db) { return db.exists('pulp') },

                    'return true': function (re) {
                        assert.equal(re, true);
                    }
                }
            },
            'get()': {
                topic: function (db) { return db.get('dream') },
                'should return the stored value': function (res) {
                    assert.equal(res, 'catcher');
                }
            }
        }
    });

assertion macros
----------------

### equality #

- assert.equal
- assert.notEqual
- assert.strictEqual
- assert.strictNotEqual

### type #

- assert.isFunction
- assert.isObject
- assert.isNaN
- assert.isString
- assert.isArray
- assert.isBoolean
- assert.isNumber
- assert.isNull
- assert.isUndefined
- assert.typeOf
- assert.instanceOf

### properties #

- assert.include
- assert.match
- assert.length
- assert.isEmpty

### exceptions #

- assert.throws
- assert.doesNotThrow
=======
I was tired of looking at cluttered output in the console -- something needed to be done,
`sys.inspect()` didn't display regexps correctly, and was too verbose, and I had an hour or two to spare. 
So I decided to have some fun. _eyes_ were born.

![eyes-ss](http://dl.dropbox.com/u/251849/eyes-js-ss.gif)

_example of the output of a user-customized eyes.js inspector_

*eyes* also deals with circular objects in an intelligent way, and can pretty-print object literals.

usage
-----

    var inspect = require('eyes').inspector({styles: {all: 'magenta'}});

    inspect(something); // inspect with the settings passed to `inspector`

or

    var eyes = require('eyes');

    eyes.inspect(something); // inspect with the default settings

you can pass a _label_ to `inspect()`, to keep track of your inspections:

    eyes.inspect(something, "a random value");

If you want to return the output of eyes without printing it, you can set it up this way:

    var inspect = require('eyes').inspector({ stream: null });

    sys.puts(inspect({ something: 42 }));

customization
-------------

These are the default styles and settings used by _eyes_.
    styles: {                 // Styles applied to stdout
        all:     'cyan',      // Overall style applied to everything
        label:   'underline', // Inspection labels, like 'array' in `array: [1, 2, 3]`
        other:   'inverted',  // Objects which don't have a literal representation, such as functions
        key:     'bold',      // The keys in object literals, like 'a' in `{a: 1}`

        special: 'grey',      // null, undefined...
        string:  'green',
        number:  'magenta',
        bool:    'blue',      // true false
        regexp:  'green',     // /\d+/
        array:   ''           // [] (brackets part)
    },
    pretty: true,             // Indent object literals
    hideFunctions: false,     // Don't output functions at all
    stream: process.stdout,   // Stream to write to, or null
    maxLength: 2048           // Truncate output if longer

You can overwrite them with your own, by passing a similar object to `inspector()` or `inspect()`.

    var inspect = require('eyes').inspector({
        styles: {
            all: 'magenta',
            special: 'bold'
        },
        maxLength: 512
    });

>>>>>>> d37d9548137044f07dd5acab76dbffad0ab67dee
