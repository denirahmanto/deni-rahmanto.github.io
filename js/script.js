$('.menu-top').on('click', function(event) {

	// mengambil posisi offsetTop id masing"
    var target = $( $(this).attr('href') );

    // (posisi href, waktu scroll)
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top -50
        }, 980, 'easeInOutExpo');
    }

});


// parallax
$(window).scroll(function(){

	var scrollJs = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ scrollJs/4 +'%)'
	});
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ scrollJs/2.2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ scrollJs +'%)'
	});
	$('.jumbotron button').css({
		'transform' : 'translate(0px, '+ scrollJs/2 +'%)'
	});


	// quote
	if (scrollJs > $('.quote').offset().top -400) {
		
		$('.quote .quote-parallax').each(function(i){
			setTimeout(function(){
				$('.quote .quote-parallax').eq(i).addClass('show');
			}, 100 *(i+1));
		});

	}

	// galery
	if (scrollJs > $('.galery').offset().top -220) {
		
		$('.galery .thumbnail').each(function(i){
			setTimeout(function(){
				$('.galery .thumbnail').eq(i).addClass('show');
			}, 100 *(i+1));
		});

	}

	// about
	if (scrollJs > $('.about').offset().top -200) {
		
		$('.about .about-parallax').each(function(i){
			setTimeout(function(){
				$('.about .about-parallax').eq(i).addClass('show');
			}, 100 *(i+1));
		});

	}

	// sosmed
	if (scrollJs > $('.sosmed').offset().top -400) {
		
		$('.sosmed .sosmed-parallax').each(function(i){
			setTimeout(function(){
				$('.sosmed .sosmed-parallax').eq(i).addClass('show');
			}, 100 *(i+1));
		});

	}

});