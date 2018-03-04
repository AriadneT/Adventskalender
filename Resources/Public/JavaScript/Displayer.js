function arrangeCalendar() {
	reduceVolume();
	
	var today = new Date();
	checkAvailability(today);
	setIcons(today);
}

function reduceVolume() {
	var audio = document.getElementsByTagName('audio')[0];
	audio.volume = 0.2;
}

function checkAvailability(today) {
	var month = today.getMonth();
    if (month < 11) {
        document.getElementsByTagName('h2')[0].innerHTML = 
			'Sorry, this advent calendar is only available in December.';
    } else {
		var day = today.getDate();
		document.getElementsByTagName('h2')[0].innerHTML = '';
	}
}

function setIcons(today) {
	var dayInMonth = today.getDate();
	for (day = 1; day < 26; day++) {
		var window = document.getElementById('day' + day);
		if (day <= dayInMonth) {
			window.src = 
				'../../../../Adventskalender/Resources/Public/Images/Bauble.png';
		} else {
			window.src = 
				'../../../../Adventskalender/Resources/Public/Images/Window' + 
				day + '.png';
		}
	}
}