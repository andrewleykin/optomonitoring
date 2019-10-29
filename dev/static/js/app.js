// Начальная функция

(function(){
	const headerEl = $('.header');
	const	headerClass = 'header--background';
	const { pathname } = location;
	if (!$('.js-index')) {
		headerEl.addClass(headerClass)
	} else {
		$(window).on('scroll', () => {
			$(window).scrollTop() >= 65 
				? headerEl.addClass(headerClass) 
				: headerEl.removeClass(headerClass)
		})
	}

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

	$('.menu__open').click(function() {
		$('.menu__block').addClass('menu__block--active')
		$('body').addClass('overflow-hidden')
	})

	$('.menu-block__close').click(function() {
		$('.menu__block').removeClass('menu__block--active')
		$('body').removeClass('overflow-hidden')
	})
})();