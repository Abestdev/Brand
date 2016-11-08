$(document).ready(function() {

	$(".header_slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,		
		dots: true,
		dotsClass: 'header_slick-dots',
		autoplay: true,
		autoplaySpeed: 5000,
		speed:1000,
	});

	$(".trending_items_slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,		
		dots: true,
		dotsClass: 'trending_items_slick-dots',
		autoplay: true,
		autoplaySpeed: 5000,
		speed:1000,
	});	

	$(".blogArticleSlider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,	
		prevArrow: '<button type="button" data-role="none" class=" blogArticleArrow slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left fa-4x " aria-hidden="true"></button>',
		nextArrow: '<button type="button" data-role="none" class=" blogArticleArrow slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right fa-4x " aria-hidden="true"></i></button>',	
		dots: false,		
		autoplay: true,
		// autoplaySpeed: 5000,
		// speed:1000,
	});	
});
