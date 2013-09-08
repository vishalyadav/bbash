$(document).ready(function(){
	$("#header").localScroll();
	$("#circle_nav").localScroll();
	window.location.replace("#home");
	$(window).scrollTop(0);
	if($(window).width() <= 840) {
			if($("#home").hasClass("inview")) {
				$("#home").css({"background-position":"0 " + 70 + "px" });
				$("#home").css({"background-size": "840px auto"});
			}
	}

	$("#home, #about").bind("inview", function (event, visible) {
			if (visible == true) {
				$(this).addClass("inview");
			} else {
				$(this).removeClass("inview");
			}
	});

	$(window).bind('scroll', function(){
	    var position = $(window).scrollTop();
		if($("#home").hasClass("inview")) {
			if($(window).width() > 840) {
				$("#home").css({"background-position":"50% " + (70 - (position * 0.25)) + "px" });
			}
		}
		if($("#about").hasClass("inview")) {
			if($(window).width() > 840) {
				$("#about").css({"background-position":"50% " + (240 - (position * 0.25)) + "px" });
			}
		}

	});

	$(window).resize(function(){
		if($(window).width() <= 840) {
			if($("#home").hasClass("inview")) {
				$("#home").css({"background-position":"0 " + 70 + "px" });
				$("#home").css({"background-size": "840px auto"});
			}
		} else {
			if($("#home").hasClass("inview")) {
				$("#home").css({"background-position":"50% " + (70 - ($(window).scrollTop() * 0.25)) + "px" });
				$("#home").css({"background-size": "100% auto"});
			}
		}
	});
});