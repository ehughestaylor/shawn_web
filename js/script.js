// function horiScroll(){
// 	if ($(window).width() >= 667){	
// 		console.log('small');
// 		scrollConverter.activate();
// 	} else{
// 		scrollConverter.deactivate();
// 	}
// };



$(document).ready(function(){
	$('#about').hide();
	$('#social').hide();
	$('#pricing').hide();
	$('#header').fadeIn();

	$('.about').on('click',function(){
		$(this).toggleClass('active');
		$('#about').toggle("slide", { direction: "right"  }, 500);
	});

	$('.social').on('click',function(){
		$(this).toggleClass('active');
		$('#social').toggle("slide", { direction: "left"  }, 500);
	});

	$('.pricing').on('click',function(){
		$(this).toggleClass('active');
	    $('#pricing').toggle("slide", { direction: "up"  }, 500);
	});

	$('#my_elem').mousewheel(function(event) {
	    console.log(event.deltaX, event.deltaY, event.deltaFactor);
	});

	(function () {
    var mql = window.matchMedia("(orientation: landscape)");
	//activate plugin only when orientation is landscape
	if(mql.matches) {  
			scrollConverter.activate();
	}		
	//listen for orientation changes and if it was changed - reload page without plugin activation
	// or activate plugin again when orientation turns back to landscape
	mql.addListener(function(m) {
		if(m.matches) {
			scrollConverter.activate();
		}	
		else {	
			window.location.reload();
		}
	});
}());

});