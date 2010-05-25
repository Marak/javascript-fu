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