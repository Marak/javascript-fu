/* javascript-fu build script - Marak Squires 2010 */
/* running this file will generate the js-fu.js bundle */

var sys = require('sys')
   , fs = require('fs')
   , M = require('./Mustache')
   , exec  = require('child_process').exec
   , child;

var ChildProcess = require('child_process');

var code = {};
var docs = {};

/* setup code object */
code.main = '';
code.main += fs.readFileSync('./code/index.js', encoding='utf8');
code.main = M.Mustache.to_html(code.main, {"today":new Date().getTime()});

// require the entire library as a CommonJS module. we are going to iterate over the CommonJS structure and generate a bundle 
var fu = require('../index');

code.main += ('\n\n'); // maybe we can remove this 

// moduleTree will take in a CommonJS module loop through it creating a JS code bundle (generates new JS code)
// currently this is hardcoded / customized to work only with the js-fu library
function moduleTree( level, context ){
  for(var module in level){
    fuMethods[module] = [];
    for(var method in level[module]){
      if(typeof level[module][method] == 'object'){
        //moduleTree(level[module][method]);
      }
      else{
        fuMethods[module].push(method);
        code.main += ( 'fu.' + method + ' = ');
        code.main += (level[module][method].toString() + ';\n');
      }
    }
    fuMethods[module] = fuMethods[module].sort();
  }
}

// create object that will hold all our js-fu methods for bundle
var fuMethods = {};
moduleTree(fu, 'fu');

// exports hack for dual sided stuff
// if we are running in a CommonJS env, export everything out
code.main += 'if(typeof exports != "undefined"){for(var prop in fu){exports[prop] = fu[prop];}}';
code.main += 'Date.prototype.format = function (mask, utc) {return fu.dateFormat(this, mask, utc);}';
// generate some samples sets (move this code to another section)
fs.writeFile('../js-fu.js', code.main, function() {
  sys.puts("js-fu.js generated successfully!");
});

// generate library for demos
fs.writeFile('../examples/js/js-fu.js', code.main, function() {
  sys.puts("../examples/js/js-fu.js generated successfully!");
});


/* setup docs object */
docs.main = '';
docs.API = '';
docs.dateTimeFu = '';
docs.main += fs.readFileSync('./docs/index.js', encoding='utf8');
docs.dateTimeFu += fs.readFileSync('./docs/dateTime.js', encoding='utf8');
sys.puts(JSON.stringify(fuMethods));

// instead of building the library in a linear fashion, we are going to split up methods
// based on their fu discipline
// store the methods in a variable as we parse
function docsTree(level){
  // generate nice tree of api for docs
  docs.API += '<ul>';
  for(var method in level){
    docs.API += '<li>' + level[method];
      docs.API += '<ul>'
      if(typeof level[method] == 'object'){
        docsTree(level[method]);
      }
      else{
       // docs.API += '<li>' + method + '</li>';
      }
      docs.API += '</ul>';
    docs.API += '</li>';
  }
  docs.API += '</ul>';
}
docsTree(fuMethods);

docs.isFu = '<ul>';
docs.toFu = '<ul>';
docs.formatFu = '<ul>';
docs.getFu = '<ul>';


for(var module in fuMethods){
  var fM = fuMethods[module];
  //docs.toFu += ( module + '<ul>');
  for(var method in fM){
    //sys.puts(fM[method].substr(0,2));
    switch(fM[method].substr(0,2))
    {
    case 'ge':
      docs.getFu += ( '<li>' + fM[method] + '</li>');
    break;
    case 'is':
      docs.isFu += ( '<li>' + fM[method] + '</li>');
    break;
    case 'fo':
      docs.formatFu += ( '<li>' + fM[method] + '</li>');
    break;
    case 'to':
      if(fM[method]!='token'){
        docs.toFu += ( '<li>' + fM[method] + '</li>');
      }
    break;
    
    default:
      //sys.puts('didnt find shit ' + fM[method].toString());
    break;
    }
  }
  //docs.toFu += ( method + '</ul>');
}

docs.isFu += ('</ul>');
docs.toFu += ('</ul>');
docs.formatFu += ('</ul>');
docs.getFu += ('</ul>');

var docOutput = M.Mustache.to_html(docs.main, {
  "API":docs.API
 ,"isFu":docs.isFu
 ,"toFu":docs.toFu
 ,"getFu":docs.getFu
 ,"formatFu":docs.formatFu
 ,"dateTimeFu":docs.dateTimeFu
 
});

// generate some samples sets (move this code to another section)
fs.writeFile('../Readme.md', docOutput, function() {
  sys.puts("Docs generated successfully!");
});

/*********************** BUILD HELPER METHODS *********************/

  // Recursively traverse a hierarchy, returning a list of all relevant .js files.
  function paths(dir) {
      var paths = [];

      try { fs.statSync(dir) }
      catch (e) { return e }

      (function traverse(dir, stack) {
          stack.push(dir);
          fs.readdirSync(stack.join('/')).forEach(function (file) {
              var path = stack.concat([file]).join('/'),
                  stat = fs.statSync(path);

              if (file[0] == '.' || file === 'vendor') {
                  return;
              } else if (stat.isFile() && /\.js$/.test(file)) {
                  paths.push(path);
              } else if (stat.isDirectory()) {
                  paths.push(path);
                  traverse(file, stack);
              }
          });
          stack.pop();
      })(dir || '.', []);

      return paths;
  }

