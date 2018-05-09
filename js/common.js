document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('preloader');
		if(!preloader.classList.contains('done') )
		{
			preloader.classList.add('load-done');
		}
	}, 1000);
}

$(document).ready(function(){

		//E-mail Ajax Send
	$("form.form-feedback").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			$(th).find('.form-success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Function
				$(th).find('.form-success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	/* mmenu tools */
	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="images/logo.png" alt="S&R Barber"/>'
		},
		offCanvas: {
			position: 'right'
		}
	});
	var mmenuApi = $('#my-menu').data('mmenu');
	mmenuApi.bind('opened', function(){
		$('#nav-icon1').addClass('open');
	}).bind('closed', function(){
		$('#nav-icon1').removeClass('open');
	});
	/* owl carousel tools */
	$('.carousel-service').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 750,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right">'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			/*800: {
				items: 2
			},
			1100: {
				items: 2
			}*/
		}
	});
});