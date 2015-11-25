 document.getElementById("searchButton").addEventListener("click", buttonHandler);

 // button handler
 function buttonHandler() {
    	var acronym = document.getElementById("acronymInput").value;
	var definition = lookupAcronym(acronym);
	console.log("The meaning of " + acronym + " is " + definition);
	document.getElementById("result").innerHTML = definition;
}

 // function to look up for acronym's def
function lookupAcronym(acronym) {
	var def = "...";
	if (acronym)  {
	    	var xmlhttp = new XMLHttpRequest();
	    	var url = "fakedAcronyms.JSON";
        	xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var arr = JSON.parse(xmlhttp.responseText);
        	    		def = arr[acronym];
        	    		console.log(acronym + " is " + def);
			}
   		};
	    	xmlhttp.open("GET", url, true);
	    	xmlhttp.send();
	}
	return def;
}
