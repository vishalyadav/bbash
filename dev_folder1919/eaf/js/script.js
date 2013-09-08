$(document).ready(function(){
	var bb_date = new Date(2013, 8, 23, 10, 0, 0, 0);
	var secs_per_day = 86400;
	var secs_per_hour = 3600;
	var secs_per_min = 60;

	function countdown() {
		var now = new Date();

		var time_between = (bb_date.getTime()-now.getTime())/1000;
		var days, hours, mins, secs;
		days = parseInt(time_between/secs_per_day);
		time_between = time_between % secs_per_day;

		hours = parseInt(time_between/secs_per_hour);
		time_between = time_between % secs_per_hour;

		mins = parseInt(time_between/secs_per_min);
		secs = parseInt(time_between % secs_per_min);

		if(secs < 10) {
			secs = "" + 0 + secs;
		}
		if(mins < 10) {
			mins = "" + 0 + mins;
		}
		if(days < 10) {
			days = "" + 0 + days;
		}
		if(hours < 10) {
			hours = "" + 0 + hours;
		}
		$('#days').html(days);
		$('#hours').html(hours);
		$('#mins').html(mins);
		$('#secs').html(secs);
	}
	countdown();
	setInterval(countdown, 1000);
});
