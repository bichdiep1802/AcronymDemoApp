 // button handler
 document.getElementById("searchButton").addEventListener("click", function(){
	var acronym = document.getElementById('acronymInput').value;
	var definition = lookupAcronym(acronym);
	console.log('The meaning of ' + acronym + ' is ' + definition);
	document.getElementById('result').innerHTML = definition;
 });

 // function to look up for acronym's def
function lookupAcronym(acronym) {
	if (acronym)  {
	    var xmlhttp = new XMLHttpRequest();
	    var url = "https://raw.githubusercontent.com/bichdiep1802/demoApp/master/src/fakedAcronyms.JSON";
        xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var arr = JSON.parse(xmlhttp.responseText);
        	    return arr[acronym];
			}
   		}
	    xmlhttp.open("GET", url, true);
	    xmlhttp.send();
	}
	return "sorry!";
}
