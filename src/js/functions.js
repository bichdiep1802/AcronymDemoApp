document.getElementById("searchButton").addEventListener("click", function(){
	var value = document.getElementById('acronymInput').value;
	if (value)  
	    document.getElementById('result').innerHTML = value;
	
});
