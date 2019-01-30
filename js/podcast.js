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
