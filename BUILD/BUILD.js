var sys = require('sys')
   , fs = require('fs')
   , M = require('./Mustache')
   , exec  = require('child_process').exec
   , child;

var ChildProcess = require('child_process');

/*
// run tests
child = exec('cd ../tests/ && make' , function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  if (error !== null) {
    sys.puts('exec error: ' + error);
  }
  else{
  
  }
});
*/

var code = '';
var docs = {};

docs.main = '';
docs.API = '';

// read in the the main.js file as our main boilerplate code 
code += fs.readFileSync('./main.js', encoding='utf8');
code = M.Mustache.to_html(code, {"today":new Date().getTime()});

docs.main += fs.readFileSync('./docs.js', encoding='utf8');

// parse entire lib directory and concat it into one file for the browser
var lib = paths('./lib');


var fu= require('../index');

/*
function moduleTree(level, context){
  
  if( typeof context == 'undefined'){
    var context = 'fu';
  }
  
  // generate bundle for code on the browser
  for(var module in level){
    code += ( '\n' + module + ' = {};');
    for(var method in level[module]){
      code += ( '\n' + module);
      code += ( '.' + method + ' = ');
      if( typeof level[module][method] == 'object'){
        moduleTree( level[module][method]);
      }
      else{
        try{
          code += (level[module][method].toString() + ';\n');
        }
        catch(err){
          code += ('fiiii' + ';\n');
          
        }
      }
    }
  }
}
*/

code += ('\n');

var fuMethods = [];

function moduleTree( level, context ){
  for(var module in level){
    
    for(var method in level[module]){
      
      if( typeof level[module][method] == 'object'){
        moduleTree( level[module][method]);
      }
      else{
       fuMethods.push(method);
       code += ( 'fu.' + method + ' = ');
       code += (level[module][method].toString() + ';\n');
      }
      
    }
    
  }
  
}


moduleTree(fu, 'fu');

fuMethods = fuMethods.sort();
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

for(var method in fuMethods){
  sys.puts(fuMethods[method].substr(0,2));
  switch(fuMethods[method].substr(0,2))
  {
  case 'ge':
    docs.getFu += ( '<li>fu.' + fuMethods[method] + '</li>');
  break;
  case 'is':
    docs.isFu += ( '<li>fu.' + fuMethods[method] + '</li>');
  break;
  case 'fo':
    docs.formatFu += ( '<li>fu.' + fuMethods[method] + '</li>');
  break;
  case 'to':
    docs.toFu += ( '<li>fu.' + fuMethods[method] + '</li>');
  break;
  default:
    //sys.puts('didnt find shit');
  }
}

docs.isFu += ('</ul>');
docs.toFu += ('</ul>');
docs.formatFu += ('</ul>');
docs.getFu += ('</ul>');


// exports hack for dual sided stuff
// if we are running in a CommonJS env, export everything out
code += 'if(typeof exports != "undefined"){for(var prop in fu){exports[prop] = fu[prop];}}';

// generate some samples sets (move this code to another section)
fs.writeFile('../js-fu.js', code, function() {
  sys.puts("js-fu.js generated successfully!");
});

var docOutput = M.Mustache.to_html(docs.main, {
  "API":docs.API
 ,"isFu":docs.isFu
 ,"toFu":docs.toFu
 ,"getFu":docs.getFu
 ,"formatFu":docs.formatFu
 
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

