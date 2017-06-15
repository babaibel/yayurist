var $W = $(window),
	$D = $(document),
	$H = $('html'),
	$B = $('body'),
	swidth=(window.innerWidth-$(window).width());

$(function() {

	$('.js-popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		showCloseBtn: false,
		mainClass: 'popup-modal-overlay',
		callbacks: {
			open: function() { $('._scrolled .header-wr').css('padding-right', swidth + "px"); }, 
			close: function() { $('._scrolled .header-wr').css('padding-right', 0); },
		}
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});


