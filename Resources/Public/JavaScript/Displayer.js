function checkAvailability() {
	var audio = document.getElementsByTagName('audio')[0]
	audio.volume = 0.2;
    var today = new Date();
	var month = today.getMonth();
    if (month < 11) {
        document.getElementsByTagName('h2')[0].innerHTML = 'Sorry. This advent calendar is only available in December.';
    } else {
		var day = today.getDate();
		if (day < 25) {
			document.getElementsByTagName('h2')[0].innerHTML = 'Sorry. This advent calendar is not yet ready. It will be available in 2018.';
		} else {
			document.getElementsByTagName('h2')[0].innerHTML = 'Merry Christmas! This advent calendar will be available in 2018.';
		}
		
    }  
}