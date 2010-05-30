
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

<h1>the five disciplines of javascript-fu</h1>
<h2>isFu - the art of the curious type checker</h2>
isFu methods will accept <em>anything</em> as an argument and gracefully return true or false depending on if the arguments match the type you have checked for
{{{isFu}}}

<h2>toFu - the deadly art of the monkey punch</h2>
toFu methods will accept <em>anything</em> as an argument and aggressively attempt to coerce the value into the type you have specified 
{{{toFu}}}

<h2>getFu - the art of the swift getter</h2>
{{{getFu}}}


<h2>dateTimeFu - the art of space and time</h2>
{{{dateTimeFu}}}

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

{{{linqFu}}}

<h2>Authors</h2>

<h4>Marak Squires, Aaron Blohowiak, Matthew Bergman</h4>