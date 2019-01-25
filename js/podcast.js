$(document).ready(function() {

	$(".hamburger").on('click', function() {
		
		let $nav = $('nav');		

		$(this).toggleClass("open");
		if ($nav.hasClass('open-menu')) {
			$nav.removeClass('open-menu');
		} else {
			$nav.addClass('open-menu');
		}
	 });

	$(window).scroll(function() {
		if ($(document).scrollTop() > 600) {
			$('header ul li').fadeOut(500);
		} else {
			$('header ul li').fadeIn(500);
		} 

		if($(document).scrollTop() > 600) {
			$(".hamburger span").addClass('scroll');
		} else {
			$(".hamburger span").removeClass('scroll');
		}

		if($(document).scrollTop() > 400) {
			$("#banner_one p").fadeIn(500);
		}
	});

});				
