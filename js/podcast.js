$(document).ready(function() {

	$(window).scroll(function() {
		if ($(document).scrollTop() > 600) {
			$('header ul li').fadeOut(500);
		} else {
			$('header ul li').fadeIn(500);
		}
	});

});				
