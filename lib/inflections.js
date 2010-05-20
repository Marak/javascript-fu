//This module exports an object, inflections.
//  inflections maintains arrays of find/replace regexp pairs
//
//  Add a collection by calling inflections.addInflectionCollection('name');
//
//  this will add an inflections.name(find, replace);
//    and an array, inflections.names;
//
//  inflections has english plural and singluar pairs
//
//  inflections.irregular(singular, plural); creates singular and plural entries
//
//  there is also an array of uncountable terms, inflections.uncountables;
//  you may add to it with inflections.uncountable('fish');
//
//It also exports the constructor Inflections, which created inflections


function Inflections (){
  this.uncountables = [];
  
  collections = "plural singular".split(" ");
  
  for (var i = collections.length - 1; i >= 0; i--){
    this.addInflectionCollection(collections[i]);
  };
};

Inflections.prototype = {
  addInflectionCollection: function(name){
    //ironic that this is the pluralization method.
    this[name+"s"] = [];
    this[name] = function(find, replace){
      this[name+"s"].push([find, replace]);
    };
  },
  
  uncountable: function(name){
    this.uncountables.push(new RegExp('.*' + name+"$", "i"));
  },
  
  irregular: function(singular, plural){
    if(singular.charAt(0) === plural.charAt(0)){
      this.plural(new RegExp("("+singular.charAt(0)+")"+singular.slice(1)+"$", "i"), "$1" + plural.slice(1));
      this.singular(new RegExp("("+plural.charAt(0)+")"+plural.slice(1)+"$", "i"), "$1" + singular.slice(1));
    } else{
      this.plural(new RegExp("("+singular.charAt(0).toUpperCase()+")"+singular.slice(1)+"$"), plural.charAt(0).toUpperCase() + plural.slice(1));
      this.plural(new RegExp("("+singular.charAt(0).toLowerCase()+")"+singular.slice(1)+"$"), plural.charAt(0).toLowerCase() + plural.slice(1));
      this.singular(new RegExp("("+plural.charAt(0).toUpperCase()+")"+plural.slice(1)+"$"), singular.charAt(0).toUpperCase() + singular.slice(1));
      this.singular(new RegExp("("+plural.charAt(0).toLowerCase()+")"+plural.slice(1)+"$"), singular.charAt(0).toLowerCase() + singular.slice(1));
    }
  }
};

inflections = new Inflections();


inflections.plural(/(ax|test)is$/i, '$1es');
inflections.plural(/(octop|vir)us$/i, '$1i');
inflections.plural(/(alias|status)$/i, '$1es');
inflections.plural(/(bu)s$/i, '$1ses');
inflections.plural(/(buffal|tomat)o$/i, '$1oes');
inflections.plural(/([ti])um$/i, '$1a');
inflections.plural(/sis$/i, 'ses');
inflections.plural(/(?:([^f])fe|([lr])f)$/i, '$1$2ves');
inflections.plural(/(hive)$/i, '$1s');
inflections.plural(/([^aeiouy]|qu)y$/i, '$1ies');
inflections.plural(/(x|ch|ss|sh)$/i, '$1es');
inflections.plural(/(matr|vert|ind)(?:ix|ex)$/i, '$1ices');
inflections.plural(/([m|l])ouse$/i, '$1ice');
inflections.plural(/^(ox)$/i, '$1en');
inflections.plural(/(quiz)$/i, '$1zes');

inflections.singular(/s$/i, '');
inflections.singular(/(n)ews$/i, '$1ews');
inflections.singular(/([ti])a$/i, '$1um');
inflections.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, '$1$2sis');
inflections.singular(/(^analy)ses$/i, '$1sis');
inflections.singular(/([^f])ves$/i, '$1fe');
inflections.singular(/(hive)s$/i, '$1');
inflections.singular(/(tive)s$/i, '$1');
inflections.singular(/([lr])ves$/i, '$1f');
inflections.singular(/([^aeiouy]|qu)ies$/i, '$1y');
inflections.singular(/(s)eries$/i, '$1eries');
inflections.singular(/(m)ovies$/i, '$1ovie');
inflections.singular(/(x|ch|ss|sh)es$/i, '$1');
inflections.singular(/([m|l])ice$/i, '$1ouse');
inflections.singular(/(bus)es$/i, '$1');
inflections.singular(/(o)es$/i, '$1');
inflections.singular(/(shoe)s$/i, '$1');
inflections.singular(/(cris|ax|test)es$/i, '$1is');
inflections.singular(/(octop|vir)i$/i, '$1us');
inflections.singular(/(alias|status)es$/i, '$1');
inflections.singular(/^(ox)en/i, '$1');
inflections.singular(/(vert|ind)ices$/i, '$1ex');
inflections.singular(/(matr)ices$/i, '$1ix');
inflections.singular(/(quiz)zes$/i, '$1');
inflections.singular(/(database)s$/i, '$1');

inflections.irregular('person', 'people');
inflections.irregular('man', 'men');
inflections.irregular('child', 'children');
inflections.irregular('sex', 'sexes');
inflections.irregular('move', 'moves');
inflections.irregular('cow', 'kine');


var uncountables = "equipment information rice money species series fish sheep jeans news".split(" ");

for (var i=0; i < uncountables.length; i++) {
  inflections.uncountable(uncountables[i]);
};


exports.inflections = inflections;
exports.Inflections = Inflections;