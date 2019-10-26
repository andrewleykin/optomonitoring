// Начальная функция

(function(){
	const headerEl = $('.header');
	const	headerClass = 'header--background';
	const { pathname } = location;
	if (pathname !== '/' && pathname !== '/index.html') {
		headerEl.addClass(headerClass)
	} else {
		$(window).on('scroll', () => {
			$(window).scrollTop() >= 65 
				? headerEl.addClass(headerClass) 
				: headerEl.removeClass(headerClass)
		})
	}
})();
$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();