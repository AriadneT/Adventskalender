var days = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25
];

function arrangeCalendar() {
	console.log('Hi');
	reduceVolume();
	
	checkAvailability();
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