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
			$('.header').removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
			$('.b-filter').removeClass('active');
		} else {
			$(this).addClass('active');
			$('.header').addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+9 999 999-99-99');

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

	$('.b-select select').chosen({
		disable_search: true
	});

	$('.b-catalog-slider').slick({
		arrows: false,
		dots: true,
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

	$(document).on('click',function(e){
		var ww = $(window).width();
		var container = $('.b-filter');
		var container2 = $('.b-select-size');

		if ( !$(e.target).closest(container).length ){
			if (ww > 1024){
				container.removeClass('active');
				$('.mobile-btn').removeClass('active');
				$('.header').removeClass('active');
				$('body').removeClass('no-scroll');
			}
		}
		if ( !$(e.target).closest(container2).length ){
			container2.removeClass('active');
		}
	});

	$(document).on('click','.b-filter .text',function(){
		if ( !$(this).parents('.b-filter').hasClass('active') ){
			$('.b-filter').removeClass('active');
		}
		$(this).parents('.b-filter').toggleClass('active');
		$('.mobile-btn').toggleClass('active');
		$('.header').toggleClass('active');
		$('body').toggleClass('no-scroll');
	});

	$(document).on('click','.b-filter-drop ul li',function(){
		var text = $(this).text();

		if ( !$(this).hasClass('active') ){
			$(this).parents('ul').find('li').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.b-filter').find('.text span').text(text);
		}
		$(this).parents('.b-filter').removeClass('active');
		$('.mobile-btn').removeClass('active');
		$('.header').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$(document).on('click','.b-select-size .text',function(){
		$(this).parents('.b-select-size').toggleClass('active');
	});

	$(document).on('click','.b-select-size ul li',function(){
		var text = $(this).text();

		if ( !$(this).hasClass('active') ){
			$(this).parent('ul').find('li').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.b-select-size').find('.text span').text(text);
		}
		$(this).parents('.b-select-size').removeClass('active');
	});

	$(document).on('click', '.info-btn', function(){
		$(this).parents('.b-designer-face').find('.info').addClass('active');
	});

	$(document).on('click', '.info-close', function(){
		$(this).parents('.info').removeClass('active');
	});

	$('.b-face-el-image .slider').slick({
		fade: true
	});

	$('.b-face-el-image .slider').on('beforeChange',function(event, slick, currentSlide, nextSlide){
		var st = $(this).parent().find('.swap-slides').scrollTop();
		var pos_el = $(this).parent().find('.swap-slides').find('img[data-slide="'+(nextSlide+1)+'"]').position().top - 1;
		$(this).parent().find('.swap-slides').find('img').removeClass('active');
		$(this).parent().find('.swap-slides').find('img[data-slide="'+(nextSlide+1)+'"]').addClass('active');
		$(this).parent().find('.swap-slides').animate({scrollTop: st + pos_el},500);
	});

	$(document).on('click', '.swap-slides img', function(){
		var slide_num = Number($(this).attr('data-slide')) - 1;

		if ( !$(this).hasClass('active') ){
			$(this).parent('.swap-slides').find('img').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.b-face-el-image').find('.slider').slick('slickGoTo',slide_num);
		}
	});

	$('.b-face-el-main-image .slider').slick({
		arrows: false,
		fade: true
	});

	$(document).on('click', '.swiper-slides .item', function(){
		var slide_num = Number($(this).attr('data-slide')) - 1;

		if ( !$(this).hasClass('active') ){
			$(this).parents('.swiper-slides').find('.item').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.mobile').find('.b-face-el-main-image .slider').slick('slickGoTo',slide_num);
			$('body,html').animate({scrollTop: $(this).parents('.mobile').find('.b-face-el-main-image').offset().top - 61},800);
		}
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

	function ScrollEl(){
		if ( $('.b-scroll-wrap').length ){
			var ww = $(window).width();
			if (ww > 1024){
				var st = $(window).scrollTop();
				$('.b-scroll-wrap').each(function(){
					var $banner = $(this).find('.b-scroll-el');
					var vg = $(this).offset().top - 30;
					var ng = vg + $(this).outerHeight() - $banner.outerHeight();
					$(this).css('min-height',$banner.outerHeight());
					if ( st > vg ){
						if ( st > ng ){
							$banner.removeClass('scroll').addClass('bottom');
						} else {
							$banner.addClass('scroll').removeClass('bottom');
						}
					} else {
						$banner.removeClass('scroll').removeClass('bottom');
					}
				});
			} else {
				$('.b-scroll-el').removeClass('scroll');
				$('.b-scroll-el').removeClass('bottom');
				$('.b-scroll-wrap').removeAttr('style');
			}
		}
	}
	ScrollEl();

	function FaceSize(){
		var wh = $(window).outerHeight();
		var hh = $('.header').outerHeight();

		$('.b-face').find('.wrap').css('min-height',wh - hh);
	}
	FaceSize();

	$(window).resize(function(){
		ScrollCatalogWidth();
		ScrollEl();
		FaceSize();
	});

	$(window).on('scroll',function(){
		ScrollEl();
	});

});