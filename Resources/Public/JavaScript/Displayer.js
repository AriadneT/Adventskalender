function checkAvailability() {
	var audio = document.getElementsByTagName('audio')[0]
	audio.volume = 0.2;
    var today = new Date();
	var month = today.getMonth();
    if (month < 11) {
        document.getElementsByTagName('h2')[0].innerHTML = 
			'Sorry. This advent calendar is only available in December.';
    } else {
		var day = today.getDate();
		if (day > 24) {
			document.getElementsByTagName('h2')[0].innerHTML = 
				'Merry Christmas! This advent calendar will be ready in 2018.';
		}
    }  
}