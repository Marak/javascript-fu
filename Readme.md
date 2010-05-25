<table>
  <tr>
    <td><img src = "http://imgur.com/32UFx.jpg" border = "0"></td>
    <td>
      <h1>javascript-fu</h1>
      <h2>isFu</h2>
      <h4><em>the art of the curious type checker</em></h3>   
      <h2>toFu</h2>
      <h4><em>the deadly art of the monkey punch</em></h3>   
      <h2>formatFu</h2>
      <h4><em>format masking, the shadow art</em></h3>   
      <h2>dateTimeFu</h2>
      <h4><em>the art of time and space</em></h3>   
      <br/>
      <br/>
      <br/>
    </td>
  </tr>
</table>
##the three disciplines of javascript-fu
### isFu - the art of the curious type checker
isFu methods will accept <em>anything</em> as an argument and gracefully return true or false depending on if the arguments match the type you have checked for
<ul><li>isArray</li><li>isDate</li><li>isDefined</li><li>isEmpty</li><li>isFunction</li><li>isJSON</li><li>isNumber</li><li>isObject</li><li>isString</li><li>isText</li><li>isTime</li></ul>
### toFu - the deadly art of the monkey punch
toFu methods will accept <em>anything</em> as an argument and aggressively attempt to coerce the value into the type you have specified 
<ul><li>toJSON</li><li>toLink</li><li>toParams</li><li>toNumber</li><li>toPercent</li><li>toCamel</li><li>toDash</li><li>toHuman</li><li>toOrdinal</li><li>toParam</li><li>toPlural</li><li>toSingle</li><li>toTitle</li><li>toUnderscore</li><li>toDate</li><li>toCanadian</li><li>toDimes</li><li>toDollars</li><li>toEuros</li><li>toNickels</li><li>toPennies</li><li>toQuarters</li></ul>
### formatFu - format masking, the shadow art
formatFu methods can take two arguments. a value, and an optional mask. the mask is liberally applied to the value and the result is returned as a string
<ul><li>formatTrim</li><li>formatWrap</li><li>formatArray</li><li>formatNumber</li><li>formatRandom</li><li>formatReverse</li><li>formatShuffle</li><li>formatDate</li></ul>
### dateTimeFu - the art of space and time
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
			<td>Sat Jun 09 2007 17:46:21</td>
		</tr>
		<tr class="altBg">
			<td>shortDate</td>
			<td>m/d/yy</td>
			<td>6/9/07</td>
		</tr>
		<tr>
			<td>mediumDate</td>
			<td>mmm d, yyyy</td>
			<td>Jun 9, 2007</td>
		</tr>
		<tr class="altBg">
			<td>longDate</td>
			<td>mmmm d, yyyy</td>
			<td>June 9, 2007</td>
		</tr>
		<tr>
			<td>fullDate</td>
			<td>dddd, mmmm d, yyyy</td>
			<td>Saturday, June 9, 2007</td>
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
			<td>2007-06-09</td>
		</tr>
		<tr class="altBg">
			<td>isoTime</td>
			<td>HH:MM:ss</td>
			<td>17:46:21</td>
		</tr>
		<tr>
			<td>isoDateTime</td>
			<td>yyyy-mm-dd'T'HH:MM:ss</td>
			<td>2007-06-09T17:46:21</td>
		</tr>
		<tr class="altBg">
			<td>isoUtcDateTime</td>
			<td>UTC:yyyy-mm-dd'T'HH:MM:ss'Z'</td>
			<td>2007-06-09T22:46:21Z</td>
		</tr>
	</tbody>
</table>
## Authors
####Marak Squires, Aaron Blohowiak