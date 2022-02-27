console.log(document.URL); 
// Challenge 24


//Challenge 27
var XML_Parser, XML_Document; 

var Pencil = "<pencil>" + "<colours> red,blue, yellow </colours>" + "<type> HB </type>" + "<year> 2002 </year>" + "</pencil>" ; 

XML_Parser = new DOMParser();

XML_Document = XML_Parser.parseFromString(Pencil, "text/xml"); 

document.getElementById("XML_Example").innerHTML = XML_Document.getElementsByTagName("colours")[0].childNodes[0].nodeValue; 


