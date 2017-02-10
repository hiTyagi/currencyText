# numericText
Converts Number to Short Textual value.

<h3>Examples :</h3>
<ul>
<li>100000  -> 1.00 Lakh (Indian) or 100.00 Thousand (International)</li>
<li>3453232 -> 34.53 Lakh (Indian) or 3.45 Million (International)</li>
</ul>

<h3>Options :</h3>
<table>
		<thead>
			<tr>
				<th>Option</th>
				<th>Default</th>
				<th>Possible values</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>type</td>
				<td>'indian'</td>
				<td>'indian', 'international'</td>
				<td>Type of texual currency.</td>
			</tr>
			<tr>
				<td>shortHand</td>
				<td>true</td>
				<td>true, false</td>
				<td>Whether full currency text is required or short form.</td>
			</tr>
			<tr>
				<td>minimum</td>
				<td>2</td>
				<td>Integer value greater than 2</td>
				<td>Minimum number of digits after which number should be converted to text.</td>
			</tr>
			<tr>
				<td>decimal</td>
				<td>2</td>
				<td>Integer value (>=0)</td>
				<td>Number of digits after decimal point.</td>
			</tr>
		</tbody>
	</table>
  
<h3>Usage</h3>
<ol>
<li>Add jQuery</li>
<li>Add numericText</li>
<li>Use jQuery selector to convert number to short text</li>
</ol>

<h2>e.g.</h2>
    //html
    <span id="num">231245.45</span>
    //js
    $("span#num").numericText();

or
    
    //html
    <input class="textCurr" value="234534.789"/>
    //js
    $(".textCurr").numericText({
      type:'international'
    });


<h3>License</h3>

numericText is released under the MIT license.
