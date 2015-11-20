function showAcronym () {
    if(typeof Windows !== undefined) {
        var value = document.getElementById('acronymInput').value;
	          if (value)  
	              document.getElementById('result').innerHTML = value;
    }
}
