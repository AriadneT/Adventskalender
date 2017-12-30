function arrangeCalendar() {
	reduceVolume();
	
	checkAvailability();
	setIcons();
}

function reduceVolume() {
	var audio = document.getElementsByTagName('audio')[0];
	audio.volume = 0.2;
}

function checkAvailability() {
	var today = new Date();
	var month = today.getMonth();
    if (month < 11) {
        document.getElementsByTagName('h2')[0].innerHTML = 
			'Sorry, this advent calendar is only available in December.';
    } else {
		var day = today.getDate();
		document.getElementsByTagName('h2')[0].innerHTML = 
			'Merry Christmas! This advent calendar will be ready in 2018.';
	}
}

function setIcons() {
	for (day = 1; day < 26; day++) {
		// Replace code below with code for substituting pictures
		console.log(day);
	}
}