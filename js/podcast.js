$(document).ready(function() {

	$(".hamburger").on('click', function() {
		
		let $nav = $('nav ul');
		let $body = $('body');		

		$(this).toggleClass("open");
		if ($nav.hasClass('open-menu')) {
			$nav.removeClass('open-menu');
		} else {
			$nav.addClass('open-menu');
		}
		if ($body.hasClass('ham-open')) {
			$body.removeClass('ham-open');
		} else {
			$body.addClass('ham-open');
		}
	 });

	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});

	$(window).scroll(function() {

		if($(document).scrollTop() > 800) {
			$(".hamburger span").addClass('scroll');
			$(".logo").fadeOut(500);
		} else {
			$(".hamburger span").removeClass('scroll');
			$(".logo").fadeIn(500);
		}

		// if($(document).scrollTop() > 400) {
		// 	$("#banner_one p").fadeIn(500);
		// }
	});

	$('button').on('click', function() {
		$('button').removeClass('selected');
		$(this).addClass('selected');
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $(this).text();
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';
			$.each(data.items, function(i, photo) {
				photoHTML += '<li>';
				photoHTML += '<a href="' + photo.link + '">';
				photoHTML += '<img src"' + photo.media.m + '"></a></li>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		}
		$.getJSON(flickrAPI, flickrOptions, displayPhotos);
	});

});				
