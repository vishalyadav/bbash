$(document).ready(function(){
	/* One page scrolling */
	$("#navigation").localScroll();
	window.location.replace("#bbash");
	$(window).scrollTop(0);
	
	$("#bbash_link").css({"background-color": "#f8e505" });

	$("#bbash, #concert, #film, #lounge, #dance").bind("inview", function (event, visible) {
			if (visible == true) {
				$(this).addClass("inview");
			} else {
				$(this).removeClass("inview");
			}
	});

	$("li").click(function(){
			setTimeout(function() {$(window).scrollTop($(window).scrollTop() + 1);}, 1100);
	});
	$(window).bind('scroll', function(){
		if($("#bbash").hasClass("inview")) {
			$("#bbash_link").css({"background-color": "#f8e505" });
		} else {
			$("#bbash_link").css({"background-color": "#ffffff" });
		}
		if($("#concert").hasClass("inview")) {
			if(!$("#bbash").hasClass("inview")) {
				$("#concert_link").css({"background-color": "#f8e505" });
			} else {
				$("#concert_link").css({"background-color": "#ffffff" });
			}
		} else {
			$("#concert_link").css({"background-color": "#ffffff" });
		}
		if($("#film").hasClass("inview")) {
			if(!$("#concert").hasClass("inview")) {
				$("#film_link").css({"background-color": "#f8e505" });
			} else {
				$("#film_link").css({"background-color": "#ffffff" });
			}
		} else {
			$("#film_link").css({"background-color": "#ffffff" });
		}
		if($("#dance").hasClass("inview")) {
			if(!$("#film").hasClass("inview")) {
				$("#dance_link").css({"background-color": "#f8e505" });
			} else {
				$("#dance_link").css({"background-color": "#ffffff" });
			}
		} else {
			$("#dance_link").css({"background-color": "#ffffff" });
		}
		if($("#lounge").hasClass("inview")) {
			if(!$("#dance").hasClass("inview")) {
				$("#lounge_link").css({"background-color": "#f8e505" });
			} else {
				$("#lounge_link").css({"background-color": "#ffffff" });
			}
		} else {
			$("#lounge_link").css({"background-color": "#ffffff" });
		}
	});

	/* Countdown logic */
	var bb_date = new Date(2013, 8, 22, 20, 0, 0, 0);
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
	/* end Countdown logic */


	var headliner, opener, parking = false;
   /* concert artist dropdowns */
   $('#headliner_title').on('click', function() {
   	if(headliner) {
			$('#opener_wrapper').slideDown(400);
			$('#parking_wrapper').slideDown(400);
			headliner = false;
		} else {
			$('#opener_wrapper').fadeOut(400);
			$('#parking_wrapper').fadeOut(400);
			headliner = true;
		}
      toggleArtistInfo($(this), 'right');
//      toggleArtistInfo($('#opener_title.open'), 'left');
		
   });
   $('#opener_title').on('click', function() {
      toggleArtistInfo($(this), 'left');
//      toggleArtistInfo($('#headliner_title.open'), 'right');
		if(opener) {
			$('#headliner_wrapper').slideDown(400);
			$('#parking_wrapper').slideDown(400);
			opener = false;
		} else {
			$('#headliner_wrapper').slideUp(400);
			$('#parking_wrapper').fadeOut(400);
			opener = true;
		}
   });
	$('#parking_title').on('click', function() {
	      toggleArtistInfo($(this), 'right');
	//      toggleArtistInfo($('#headliner_title.open'), 'right');
			if(parking) {
				$('#headliner_wrapper').slideDown(400);
				$('#opener_wrapper').slideDown(400);
				parking = false;
			} else {
				$('#headliner_wrapper').slideUp(400);
				$('#opener_wrapper').slideUp(400);
				parking = true;
			}
	   });
      

});

function toggleArtistInfo($artistTitle, rOrl)
{
   $artistTitle.siblings('.artist_info').slideToggle(400);
   $artistTitle.toggleClass('open')
                .toggleClass('down_arrow_' + rOrl)
                .toggleClass('up_arrow_' + rOrl);
}


