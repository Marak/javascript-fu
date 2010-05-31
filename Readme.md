<table>
  <tr>
    <td><img src = "http://imgur.com/32UFx.jpg" border = "0"></td>
    <td>
      <h1>javascript-fu</h1>
      <h2>isFu</h2>
      <h4><em>the art of the curious type checker</em></h4>   
      <h2>toFu</h2>
      <h4><em>the deadly art of the monkey punch</em></h4>   
      <h2>getFu</h2>
      <h4><em>the art of the swift getter</em></h4>
      <h2>dateTimeFu</h2>
      <h4><em>the art of time and space</em></h4>   
      <h2>linqFu</h2>
      <h4><em>the forbidden art of querying JSON</em></h4>
      <br/>
    </td>
  </tr>
</table>
<h1>what is javascript-fu?</h1>
<p>javascript-fu is a martial arts discipline (library) for node.js and the browser. through mastering the art of javascript-fu you will be a nimble, yet powerful JavaScript developer. a true javascript-fu master can avoid the bad parts of javascript with ninja-like agility and perform quick and devastating blows to produce robust, succinct code that covers a myriad of common functionalities.</p>
<h3>where did javascript-fu come from?</h3>
<p>javascript-fu is the culmination of years of training in the archaic art of javascript. through meticulously studying the following ancient scrolls we have divined the ultimate form of javascript martial arts. </p>

<p>
 <a href = "http://github.com/documentcloud/underscore" target = "_blank">Underscore.js</a>
  <a href = "http://jquery.com/" target = "_blank">jQuery.js</a>
  <a href = "http://www.datejs.com/" target = "_blank">date.js</a>
 <a href = "http://webcache.googleusercontent.com/search?q=cache:AW7__qeq1xMJ:api.rubyonrails.org/classes/Inflector.html+rails+inflectors&cd=1&hl=en&ct=clnk&gl=us" target = "_blank">Rails Inflectors</a>
 Coldfusion's <a href = "http://www.adobe.com/livedocs/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00000441.htm" target = "_blank">DateFormat</a> and <a href "http://www.adobe.com/livedocs/coldfusion/7/htmldocs/wwhelp/wwhimpl/common/html/wwhelp.htm?context=ColdFusion_Documentation&file=00000441.htm" target = "_blank">TimeFormat</a> 
 </li>
 <li>
 Microsoft's <a href = "http://en.wikipedia.org/wiki/Language_Integrated_Query" target = "_blank">LINQ</a>


<h2>how do i use javascript-fu?</h2>
<a href = "http://maraksquires.com/javascript-fu/">if you don't like reading documentation, check out the interactive javascript-fu demo</a>'

### browser - 
  
      <script src = "js-fu.js" type = "text/javascript"></script>
      <script>
        var x = fu.isNumber(13); // true
        var x = fu.isDate('07/01/2010'); // true
      </script>
### node.js - 
      var fu = require('./js-fu');
      var x = fu.isNumber(13); // true
      var x = fu.isDate('07/01/2010'); // true

once you have required the js-fu library, you have access to the "fu" object. inside this object you will find ...
 
<div align = "center"><h1>the five disciplines of javascript-fu</h1></div>
<h2>isFu - the art of the curious type checker</h2>
isFu methods will accept <em>anything</em> as an argument and gracefully return true or false depending on if the arguments match the type you have checked for
<ul><li>isArray</li><li>isBoolean</li><li>isDate</li><li>isDefined</li><li>isEmpty</li><li>isEqual</li><li>isFunction</li><li>isJSON</li><li>isNode</li><li>isNull</li><li>isNumber</li><li>isObject</li><li>isRegExp</li><li>isString</li><li>isText</li></ul>
<h2>toFu - the deadly art of the monkey punch</h2>
toFu methods will accept <em>anything</em> as an argument and aggressively attempt to coerce the value into the type you have specified 
<ul><li>toCamel</li><li>toChain</li><li>toDash</li><li>toHuman</li><li>toJSON</li><li>toLink</li><li>toMix</li><li>toNumber</li><li>toOrdinal</li><li>toParam</li><li>toPercent</li><li>toPlural</li><li>toReverse</li><li>toShuffle</li><li>toSingle</li><li>toTitle</li><li>toTrim</li><li>toUnderscore</li><li>toWrap</li></ul>
<h2>getFu - the art of the swift getter</h2>
<ul><li>getMinutes</li><li>getMonth</li><li>getSeconds</li><li>getFirst</li><li>getFunctions</li><li>getIndex</li><li>getKeys</li><li>getLast</li><li>getLeft</li><li>getLinks</li><li>getNode</li><li>getRandom</li><li>getRight</li><li>getValues</li></ul>
<h2>dateTimeFu - the art of space and time</h2>
<a href = "#">Try out the interactive demo of Date.format()</a>

dateTimeFu adds a new method "format" to the built in JavaScript Date object

Date.format() takes one argument, a formatting mask<br/>
you can use a pre-defined formatting mask or an inline mask. you can also define new re-usable masks

      var now = new Date();
      now.format("shortDate"); // ouputs: 7/1/10
      now.format("mm/dd/yyyy"); // outputs: 07/01/2010


<h3>pre-defined dateTime masks</h3>

<table cellspacing="0" summary="Date Format named masks">
	<thead>
		<tr>
			<th>Name</th>
			<th>Mask</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>default</td>
			<td>ddd mmm dd yyyy HH:MM:ss</td>
			<td>Sat Jun 09 2010 17:46:21</td>
		</tr>
		<tr class="altBg">
			<td>shortDate</td>
			<td>m/d/yy</td>
			<td>6/9/07</td>
		</tr>
		<tr>
			<td>mediumDate</td>
			<td>mmm d, yyyy</td>
			<td>Jun 9, 2010</td>
		</tr>
		<tr class="altBg">
			<td>longDate</td>
			<td>mmmm d, yyyy</td>
			<td>June 9, 2010</td>
		</tr>
		<tr>
			<td>fullDate</td>
			<td>dddd, mmmm d, yyyy</td>
			<td>Saturday, June 9, 2010</td>
		</tr>
		<tr class="altBg">
			<td>shortTime</td>
			<td>h:MM TT</td>
			<td>5:46 PM</td>
		</tr>
		<tr>
			<td>mediumTime</td>
			<td>h:MM:ss TT</td>
			<td>5:46:21 PM</td>
		</tr>
		<tr class="altBg">
			<td>longTime</td>
			<td>h:MM:ss TT Z</td>
			<td>5:46:21 PM EST</td>
		</tr>
		<tr>
			<td>isoDate</td>
			<td>yyyy-mm-dd</td>
			<td>2010-06-09</td>
		</tr>
		<tr class="altBg">
			<td>isoTime</td>
			<td>HH:MM:ss</td>
			<td>17:46:21</td>
		</tr>
		<tr>
			<td>isoDateTime</td>
			<td>yyyy-mm-dd'T'HH:MM:ss</td>
			<td>2010-06-09T17:46:21</td>
		</tr>
		<tr class="altBg">
			<td>isoUtcDateTime</td>
			<td>UTC:yyyy-mm-dd'T'HH:MM:ss'Z'</td>
			<td>2010-06-09T22:46:21Z</td>
		</tr>
	</tbody>
</table>


<h3>custom dateTime masks</h3>

<table cellspacing="0" summary="Date Format mask metasequences">
	<thead>
		<tr>
			<th>Mask</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>d</code></td>
			<td>Day of the month as digits; no leading zero for single-digit days.</td>
		</tr>
		<tr class="altBg">
			<td><code>dd</code></td>
			<td>Day of the month as digits; leading zero for single-digit days.</td>
		</tr>
		<tr>
			<td><code>ddd</code></td>
			<td>Day of the week as a three-letter abbreviation.</td>
		</tr>
		<tr class="altBg">
			<td><code>dddd</code></td>
			<td>Day of the week as its full name.</td>
		</tr>
		<tr>
			<td><code>m</code></td>
			<td>Month as digits; no leading zero for single-digit months.</td>
		</tr>
		<tr class="altBg">
			<td><code>mm</code></td>
			<td>Month as digits; leading zero for single-digit months.</td>
		</tr>
		<tr>
			<td><code>mmm</code></td>
			<td>Month as a three-letter abbreviation.</td>
		</tr>
		<tr class="altBg">
			<td><code>mmmm</code></td>
			<td>Month as its full name.</td>
		</tr>
		<tr>
			<td><code>yy</code></td>
			<td>Year as last two digits; leading zero for years less than 10.</td>
		</tr>
		<tr class="altBg">
			<td><code>yyyy</code></td>
			<td>Year represented by four digits.</td>
		</tr>
		<tr>
			<td><code>h</code></td>
			<td>Hours; no leading zero for single-digit hours (12-hour clock).</td>
		</tr>
		<tr class="altBg">
			<td><code>hh</code></td>
			<td>Hours; leading zero for single-digit hours (12-hour clock).</td>
		</tr>
		<tr>
			<td><code>H</code></td>
			<td>Hours; no leading zero for single-digit hours (24-hour clock).</td>
		</tr>
		<tr class="altBg">
			<td><code>HH</code></td>
			<td>Hours; leading zero for single-digit hours (24-hour clock).</td>
		</tr>
		<tr>
			<td><code>M</code></td>
			<td>Minutes; no leading zero for single-digit minutes.<br>
				<span class="small">Uppercase M unlike CF <code>timeFormat</code>'s m to avoid conflict with months.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>MM</code></td>
			<td>Minutes; leading zero for single-digit minutes.<br>
				<span class="small">Uppercase MM unlike CF <code>timeFormat</code>'s mm to avoid conflict with months.</span></td>
		</tr>
		<tr>
			<td><code>s</code></td>
			<td>Seconds; no leading zero for single-digit seconds.</td>
		</tr>
		<tr class="altBg">
			<td><code>ss</code></td>
			<td>Seconds; leading zero for single-digit seconds.</td>
		</tr>
		<tr>
			<td><code>l</code> <em>or</em> <code>L</code></td>
			<td>Milliseconds. <code>l</code> gives 3 digits. <code>L</code> gives 2 digits.</td>
		</tr>
		<tr class="altBg">
			<td><code>t</code></td>
			<td>Lowercase, single-character time marker string: <em>a</em> or <em>p</em>.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr>
			<td><code>tt</code></td>
			<td>Lowercase, two-character time marker string: <em>am</em> or <em>pm</em>.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>T</code></td>
			<td>Uppercase, single-character time marker string: <em>A</em> or <em>P</em>.<br>
				<span class="small">Uppercase T unlike CF's t to allow for user-specified casing.</span></td>
		</tr>
		<tr>
			<td><code>TT</code></td>
			<td>Uppercase, two-character time marker string: <em>AM</em> or <em>PM</em>.<br>
				<span class="small">Uppercase TT unlike CF's tt to allow for user-specified casing.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>Z</code></td>
			<td>US timezone abbreviation, e.g. <em>EST</em> or <em>MDT</em>. With non-US timezones or in the Opera browser, the GMT/UTC offset is returned, e.g. <em>GMT-0500</em><br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr>
			<td><code>o</code></td>
			<td>GMT/UTC timezone offset, e.g. <em>-0500</em> or <em>+0230</em>.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>S</code></td>
			<td>The date's ordinal suffix (<em>st</em>, <em>nd</em>, <em>rd</em>, or <em>th</em>). Works well with <code>d</code>.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr>
			<td><code>'...'</code> <em>or</em> <code>"..."</code></td>
			<td>Literal character sequence. Surrounding quotes are removed.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
		<tr class="altBg">
			<td><code>UTC:</code></td>
			<td>Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed.<br>
				<span class="small">No equivalent in CF.</span></td>
		</tr>
	</tbody>
</table>

<h2>linqFu - the forbidden art of querying JSON with LINQ, liberated from...<em>Microsoft</em></h2>
<a href = "http://maraksquires.com/JSLINQ/">Try out the interactive demo of JSLINQ</a> <br/>
linqFu is adds the <a href = "http://github.com/marak/jslinq">JSLINQ project</a> which is a pure javascript implementation of <em>gasp</em> Microsoft's <a href = "http://en.wikipedia.org/wiki/Language_Integrated_Query">LINQ</a> query language. it's very usefull for quickly querying JSON objects.
###simple Select
    var sample = fu.linq(sampleData).
      Select(function (item) {return item.FirstName;});
    output: {"items":["Chris","Kate","Josh","John","Steve","Katie","Dirk","Chris","Bernard","Kate"]}
###simple Select with OrderBy
     var sample = fu.linq(sampleData).
      Select(function (item) {return item.FirstName;}).
      OrderBy(function (item) {return item;});
     output: {"items":["Bernard","Chris","Chris","Dirk","John","Josh","Kate","Kate","Katie","Steve"]}
###simple Where 
	var sample = fu.linq(sampleData).Where(function (item) {return item.FirstName == "Chris";});
	output: [
             {"ID":1,"FirstName":"Chris","LastName":"Pearson","BookIDs":[1001,1002,1003]},
             {"ID":8,"FirstName":"Chris","LastName":"Stevenson","BookIDs":[4001,4002,4003]}
            ]
###For the Full JSLINQ Demo and API implementation goto @ [http://maraksquires.com/JSLINQ/](http://maraksquires.com/JSLINQ/)
<h2>Authors</h2>
<h4>Marak Squires, Aaron Blohowiak, Matthew Bergman</h4>