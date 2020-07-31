$(document).ready(function() {
	$('.nav__burger').click(function(event) {
		$('.nav__burger,.nav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.map__title').click(function(event){
		$(this).toggleClass('open').next().slideToggle(300);
	});
});

$('.banner-area').slick({
	autoplay: true,
	speed: 1000,
	arrows: true,
	dots: false,
	autoplaySpeed: 3000,
	fade: true,
	responsive:[
	{
		breakpoint: 768,
		settings: {
			arrows: false
		}
	}
	]
});

$('.slider-team').slick({
	autoplay: true,
	speed: 1000,
	arrows: false,
	dots: true,
	autoplaySpeed: 3000,
	fade: true,
	responsive:[
	{
		breakpoint: 768,
		settings: {
			arrows: false
		}
	}
	]
});

$(document).ready(function(){
	$('.slider-row').slick({
		arrows:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
		{
			breakpoint: 768,
			settings: {
				slidesToShow:2,
				centerMode: true
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow:1,
				centerMode: true
			}
		}
		]
	});
});

	// Initialize and add the map
	function initMap() {
	  // The location of Uluru
	  var uluru = {lat: 49.7999654, lng: 73.095208};
	  // The map, centered at Uluru
	  var map = new google.maps.Map(
	  	document.getElementById('map'), {zoom: 14, center: uluru});
	  // The marker, positioned at Uluru
	  var marker = new google.maps.Marker({position: uluru, map: map});
	}