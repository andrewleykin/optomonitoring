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
})();