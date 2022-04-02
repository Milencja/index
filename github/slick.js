$('.carousel-products').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 5000,
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 576,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 3 },
		},
		{
			breakpoint: 1200,
			settings: { slidesToShow: 4 },
		},
	],
})
