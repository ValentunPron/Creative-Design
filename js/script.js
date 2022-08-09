$(document).ready( () => {
	// Burger
	$('.header__burger').click((event) => {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	})
	// Slide fone
	$('.main__bg1').slick({
		dots: true,
		appendDots:$('.slider__dots'),
		infinite: true,
		autoplay: true,
		autoplaySpeed: 15000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		speed: 500,
		fade: true,
		dots: false,
		cssEase: 'linear',
	  });
	$('.main__bg2').slick({
		dots: true,
		appendDots:$('.slider__dots'),
		infinite: true,
		autoplay: true,
		autoplaySpeed: 15000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		speed: 500,
		fade: true,
		dots: false,
		cssEase: 'linear',
	  });
});