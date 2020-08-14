$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
		$('.mobile-menu .nav li.li-drop').removeClass('active');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$('.b-catalog-slider').slick({
		arrows: false,
		slidesToShow: 7,
		slidesToScroll: 7,
		responsive:[
			{
				breakpoint: 1890,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6
				}
			},
			{
				breakpoint: 1620,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 1350,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 810,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	function ScrollCatalogWidth(){
		if ( $('.b-small-catalog').length ){
			var ww = $(window).width();
			if (ww < 1210){
				var el_width, el_margin;
				if ( ww > 768){
					el_margin = 20;
				} else {
					el_margin = 15;
				}
				if ( ww > 585 ){
					el_width = 270;
				} else {
					el_width = 155;
				}

				$('.b-small-catalog').each(function(){
					var $block = $(this).find('.b-catalog-list');
					var count_el = $block.children('li').length;
					var block_width = count_el*(el_width + el_margin);

					$block.css('width',block_width);
				});
			} else {
				$('.b-small-catalog').find('.b-catalog-list').removeAttr('style');
			}
		}
	}
	ScrollCatalogWidth();

	$(window).resize(function(){
		ScrollCatalogWidth();
	});

});