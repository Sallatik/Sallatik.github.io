window.onload = function () {
	
	var timer, timer2;
	var compareDate = new Date(Date.UTC(2019, 6, 17, 21));
	
	timeBetweenDates(compareDate);
	timer = setInterval(function() {
		timeBetweenDates(compareDate);
	}, 1000);	

	timer2 = setInterval(changePic, 2000);
}

var pics = ["a.jpg", "anime.jpg", "b.jpg", "d.jpg",  "gubi.jpg", "nojki.jpg", "sex.jpg", "попа.jpg"];
var currentPic = 0;

function changePic() {

	if (currentPic == pics.length) {
		currentPic = 0;
	}

	document.body.style.backgroundImage = "url('" + pics[currentPic] + "')";
	currentPic++;
}

function create_timer_string(days, hours, minutes, seconds) {

	var parts = new Array();

	if (days != 0) {
		parts.push(days + " " + russify(days, "день", "дня", "дней"));
	}

	if (hours != 0) {
		parts.push(hours + " " + russify(hours, "час", "часа", "часов"));
	}

	if (minutes != 0) {
		parts.push(minutes + " " + russify(minutes, "минуту", "минуты", "минут"));
	}

	if (seconds != 0) {
		parts.push(seconds + " " + russify(seconds, "секунду", "секунды", "секунд"));
	}

	var timer_string = "", lastIndex = parts.length - 1;

	for (var i = 0; i <= lastIndex; i++) {

		timer_string = timer_string + parts[i];

		if (i == lastIndex) {
			timer_string += ".";
		} else if (i == lastIndex - 1) {
			timer_string += " и ";
		} else {
			timer_string += ", ";
		}
	}

	return timer_string;
}

function russify(num, form1, form2, form3) {
	
	if (num > 10 && num < 20) {
		
		return form3;
	} else {

		var mod = num % 10;

		if (mod == 1) {
			
			return form1;
		} else if (mod > 1 && mod < 5) {

			return form2;
		} else {

			return form3;
		}
	}
}

function timeBetweenDates(toDate) {

	var dateEntered = toDate;
	var now = new Date(Date.now());
	var difference = now.getTime() - dateEntered.getTime();
	
	var seconds = Math.floor(difference / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
		
	hours %= 24;
	minutes %= 60;
	seconds %= 60;

	document.getElementById("timer").innerHTML = create_timer_string(days, hours, minutes, seconds);
}
