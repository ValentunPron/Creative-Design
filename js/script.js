$(document).ready( () => {
	// Menu
	$('.menu__item a').each((index, element) => {
		$(`#${element.id}`).click(() => {
			$('html, body').animate({
				scrollTop: $(`.${element.id}`).offset().top
			}, 500);
			if ($('.header__burger, .header__menu').hasClass('active')) {
				$('.header__burger, .header__menu').toggleClass('active');
				$('body').toggleClass('lock')
			}
		})
	}) 
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
});