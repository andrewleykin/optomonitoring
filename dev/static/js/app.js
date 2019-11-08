// Начальная функция

(function(){
	// header
	const headerEl = $('.header');
	const	headerClass = 'header--background';
	const { pathname } = location;
	if (!!$('.js-index')) {
		headerEl.addClass(headerClass)
		$('.main').addClass('main--inner')
	} else {
		$(window).on('scroll', () => {
			$(window).scrollTop() >= 65 
				? headerEl.addClass(headerClass) 
				: headerEl.removeClass(headerClass)
		})
	}

	// form label
	function labelHide() {
		$('.form__input').each(function() {
			$(this).focus(function() {
					$(this).siblings('.form__label').addClass('hide');
			});
			$(this).blur(function(){
				if(!($(this).val())){
					$(this).siblings('.form__label').removeClass('hide')
				};
			});
		});
	}
	labelHide()

	// menu
	$('.menu__open').click(function() {
		$('.menu__block').addClass('menu__block--active')
		$('body').addClass('overflow-hidden')
	})

	$('.menu-block__close').click(function() {
		$('.menu__block').removeClass('menu__block--active')
		$('body').removeClass('overflow-hidden')
	})

	// scroll to element
	function scrollNav() {
		$('.js-scroll-to').on("click", function(){  
			//Animate
			$('html, body').stop().animate({
					scrollTop: $( $(this).attr('href') ).offset().top - 100
			}, 400);
			return false;
		});
	}
	scrollNav();

	// adaptive
	if ($(window).width() <= 768) {
		$('.advantage').slick({
			dots: true,
			arrows: false,
			adaptiveHeight: true
		})

		$('.js-menu-contact').text('Контакты')
	}
})();