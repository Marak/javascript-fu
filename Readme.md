# javascript-fu
<img src = "http://imgur.com/32UFx.jpg" border = "0">
##the four disciplines of javascript-fu
### isFu - the art of the curious type checker
isFu methods will accept <em>anything</em> as an argument and gracefully return true or false depending on if the arguments match the type you have checked for
<ul><li>fu.isArray( value )</li><li>fu.isDate( value )</li><li>fu.isDefined( value )</li><li>fu.isInflector( value )</li><li>fu.isJSON( value )</li><li>fu.isNumber( value )</li><li>fu.isObject( value )</li><li>fu.isString( value )</li><li>fu.isText( value )</li><li>fu.isTime( value )</li></ul>
### toFu - the deadly art of the monkey punch
toFu methods will accept <em>anything</em> as an argument and aggressively attempt to coerce the value into the type you have specified 
<ul><li>fu.toBase( arg )</li><li>fu.toCamel( arg )</li><li>fu.toCanadian( arg )</li><li>fu.toDash( arg )</li><li>fu.toDate( arg )</li><li>fu.toDays( arg )</li><li>fu.toDimes( arg )</li><li>fu.toDollars( arg )</li><li>fu.toEuros( arg )</li><li>fu.toHours( arg )</li><li>fu.toHuman( arg )</li><li>fu.toJSON( arg )</li><li>fu.toLink( arg )</li><li>fu.toMinutes( arg )</li><li>fu.toMonths( arg )</li><li>fu.toNickels( arg )</li><li>fu.toNumber( arg )</li><li>fu.toOrdinal( arg )</li><li>fu.toParam( arg )</li><li>fu.toParams( arg )</li><li>fu.toPennies( arg )</li><li>fu.toPercent( arg )</li><li>fu.toPlural( arg )</li><li>fu.toQuarters( arg )</li><li>fu.toSeconds( arg )</li><li>fu.toSingle( arg )</li><li>fu.toTime( arg )</li><li>fu.toTitle( arg )</li><li>fu.toUnderscore( arg )</li><li>fu.toYears( arg )</li></ul>
### formatFu - format masking, the shadow art
formatFu methods will take two arguments. a value, and a mask. the mask is liberally applied to the value and returned as a string
<ul><li>fu.formatDate( value, mask )</li><li>fu.formatNumber( value, mask )</li><li>fu.formatRandom( value, mask )</li><li>fu.formatReverse( value, mask )</li><li>fu.formatShuffle( value, mask )</li><li>fu.formatTrim( value, mask )</li><li>fu.formatWrap( value, mask )</li></ul>
### getFu - the art of the swift getter
getFu methods take no arguments and return information based on what you asked for
<ul><li>fu.getData( value )</li><li>fu.getDate( value )</li><li>fu.getDay( value )</li><li>fu.getFullYear( value )</li><li>fu.getHours( value )</li><li>fu.getLeft( value )</li><li>fu.getMilliseconds( value )</li><li>fu.getMinutes( value )</li><li>fu.getMonth( value )</li><li>fu.getRight( value )</li><li>fu.getSeconds( value )</li><li>fu.getTime( value )</li></ul>
## Authors
####Marak Squires, Aaron Blohowiak