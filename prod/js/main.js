$(document).ready(function(){

$('.ca-menu__list').on('click', 'a', function(event){
	event.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	},500);
});

});


$(window).scroll(function(){
	var dist = $('#about_us').offset().top;
	if($(window).scrollTop() > dist){
		$('.ca-header').css('background', 'rgba(255,255,255,0.7)');
	}else{
		$('.ca-header').css('background', 'transparent');
	}
});



	