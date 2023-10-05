
$(document).ready(function () {
	$('.slick-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.slick-products').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<div class="slick-brands-arrows left"><i class="fa-solid fa-chevron-left " aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-brands-arrows right"><i class="fa-solid fa-chevron-right " aria-hidden="true"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.slick-brands').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-brands-arrows"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-brands-arrows"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></div>',
		dots: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});


	$('.slick-promos').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-promos-arrows"><i class="fa-solid fa-chevron-left prev" aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-promos-arrows"><i class="fa-solid fa-chevron-right next" aria-hidden="true"></i></div>',
		dots: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});


	$('.slick-destacados').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<div class="slick-brands-arrows left"><i class="fa-solid fa-chevron-left " aria-hidden="true"></i></div>',
		nextArrow: '<div class="slick-brands-arrows right"><i class="fa-solid fa-chevron-right " aria-hidden="true"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

});