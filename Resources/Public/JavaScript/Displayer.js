var images = [
	'Bauble',
	'Dove',
	'Tree',
	'Bow',
	'Bells',
	'Present',
	'Candles',
	'CandyCane',
	'Stocking',
	'Wreath',
	'Angel',
	'Snowman',
	'Santa',
	'GingerbreadMan',
	'Rudolph',
	'Teddy',
	'Snowflake',
	'SmallStar',
	'Heart',
	'Present2',
	'Bauble2',
	'Bell',
	'Girl',
	'Marbles',
	'Star',
]
var imagePath = '../../../../Adventskalender/Resources/Public/Images/'

function arrangeCalendar() {
	reduceVolume();
	
	var today = new Date();
	checkAvailability(today);
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
		var dayInMonth = today.getDate();
		for (day = 1; day < 26; day++) {
			var window = document.getElementById('day' + day);
			window.src = imagePath + 'Window' + day + '.png';
		}
    } else {
		document.getElementsByTagName('h2')[0].innerHTML = '';
		setIcons(today);
	}
}

function setIcons(today) {
	var dayInMonth = today.getDate();
	for (day = 1; day < 26; day++) {
		var window = document.getElementById('day' + day);
		if (day <= dayInMonth) {
			var image = images[day - 1];
			window.src = imagePath + image + '.png';
		} else {
			window.src = imagePath + 'Window' + day + '.png';
		}
	}
}