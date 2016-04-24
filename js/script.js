$(document).ready(function(){
	"use strict";

	$('body').scrollspy({
		target:'.navbar',
		offset:160
	});

animationHover('#video_button','tada');
function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}
animationHover('#headerarrow','swing');
function scrollHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass(animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass(animation);
            }, 2000);         
        });
}


});


// SCROLLUP BOTTON

$('.scrollup').click(function(){
$("html, body").animate({scrollTop:0},2000);
return false;
});

// SCROLLDOWN-MOUSE

$('.scrolldown a').bind('click', function(){
	$('html, body').stop().animate({
		scrollTop:$($(this).attr('href')).offset().top - 100
	},900, 'easeInOutExpo');
	event.preventDefault();
});

// NAVBAR

$('.nav a').bind('click', function(){
	$('html, body').stop().animate({
		scrollTop:$($(this).attr('href')).offset().top - 50
	},900, 'easeInOutExpo');
	event.preventDefault();
});

// ====Navbar fixed=====
/*
jQuery(window).scroll(function(){
	var top = jQuery(document).scrollTop();
	var batas = jQuery(window).height();
	// alert(batas);

	if(top >= batas){
		jQuery('.main-menu').addClass('tiny');
		jQuery('.main-menu').css('opacity','1');
	} else {
		jQuery('.main-menu').removeClass('tiny');
	}
});
*/

// owl-carousel

$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:10,
    autoplay:true,
    autoplayTimeout:7000
});
});


