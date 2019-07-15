window.onload = function () {
	
	var timer, timer2;
	var compareDate = new Date(Date.UTC(2019, 6, 7, 20));
	
	timeBetweenDates(compareDate);
	timer = setInterval(function() {
		timeBetweenDates(compareDate);
	}, 1000);	

	timer2 = setInterval(changePic, 1000);
}

var pics = ["a.jpg", "b.jpg", "c.jpg"];
var currentPic = 0;

function changePic() {

	if (currentPic == pics.length) {
		currentPic = 0;
	}

	document.body.style.backgroundImage = "url('" + pics[currentPic] + "')";
	currentPic++;
}




function create_timer_string(days, hours, minutes, seconds) {

	var timer_string = 
		days + " " + russify(days, "день", "дня", "дней") + ", " + 
		hours + " " + russify(hours, "час", "часа", "часов") + ", " +
		minutes + " " + russify(minutes, "минуту", "минуты", "минут") + " и " +
		seconds + " " + russify(seconds, "секундy", "секунды", "секунд") + ".";

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
