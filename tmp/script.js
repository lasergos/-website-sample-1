$(document).ready(function() {
 
 	$('#owl').owlCarousel({
 		items: 1,
 		nav: false,
 		dots: true,
 		dotsClass: 'my_dots',
 		dotClass: 'my_dot',
 		dotClass: 'my_dot active',
 		loop: true,
 	});

 	$('#owl_suit').owlCarousel({
 		items: 1,
 		nav: false,
 		dots: true,
 		dotClass: 'my_dot_suit',
 		dotClass: 'my_dot_suit active',
 		loop: true,
 	});

 	$('#owl_blog').owlCarousel({
 		items: 1,
 		nav: true,
 		dots: false,
 		loop: true,
 		navText:  ['<span class="fa fa-angle-left fa-2x" ></span>','<span class="fa fa-angle-right fa-2x" ></span>' ],
 		rewindNav: false,
 		controlsClass:'my_blog_controls',
 	});
});