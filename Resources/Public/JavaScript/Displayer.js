var images = [
	'Bauble',
	'Dove',
	'ChristmasTree',
	'Bow',
	'ChristmasBells',
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
	audio.volume = 0;
	//audio.volume = 0.2;
}

function checkAvailability(today) {
	var month = today.getMonth();
    if (month < 11) {
        document.getElementsByTagName('h2')[0].innerHTML = 
			'Sorry, this calendar is only available in December. Enjoy these pictures in the meantime.';
		var dayInMonth = today.getDate();
		for (day = 1; day < 26; day++) {
			var window = document.getElementById('day' + day);
			window.style.display = 'none';
		}
		document.getElementsByTagName('h3')[0].style.display = 'none';
    } else {
		document.getElementsByTagName('h2')[0].innerHTML = '';
		setIcons(today);
		var carousel = document.getElementById('icons');
		carousel.style.display = 'none';
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