$('.contact').on('click',function(){
	$(this).toggleClass('active');
	$('#contact').toggle("slide", { direction: "right"  }, 500);
});

$('.social').on('click',function(){
	$(this).toggleClass('active');
	$('#social').toggle("slide", { direction: "left"  }, 500);
});

$('.pricing').on('click',function(){
	$(this).toggleClass('active');
    $('#pricing').toggle("slide", { direction: "up"  }, 500);
});


$(document).ready(function(){
	scrollConverter.activate();
	$('#contact').hide();
	$('#social').hide();
	$('#pricing').hide();
	$('#header').fadeIn();
});