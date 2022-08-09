$(document).ready( () => {
	// Burger
	$('.header__burger').click((event) => {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	})
	// Slide fone
	$('.main__bg1').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 15000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		speed: 1000,
		fade: true,
		dots: false,
		cssEase: 'linear',
	});
	$('.main__bg2').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 15000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		speed: 1000,
		fade: true,
		dots: false,
		cssEase: 'linear',
	});

	// Click Image
	console.log($('.portf__item img'));
	$('.portf__item img').click(e => {
		$('.wrapper').innerHTML = `${e.target}`
	})
});