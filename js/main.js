$(function(){
	$('.fairy-tail__slider, .our-trip__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prew.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
		autoplay: true,
		fade: true,
		responsive: [
			{
				breakpoint: 601,
				settings: {
					arrows: false
				}
			},
		]
	});
});

$(".menu, .our-trip__body").on("click","a", function (event) {
		event.preventDefault(); //опустошим стандартную обработку
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
	$('body,html').animate({scrollTop: top}, 1500); //сделаем прокрутку за 1 с
	});