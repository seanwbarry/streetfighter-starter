function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

var cool = false;
function playCool () {
	cool = !cool;
	if (cool) {
		$('#cool-sound')[0].volume=0.5;
		//$('#cool-sound')[0].load();
		$('#cool-sound')[0].play();
	}
}

$(document).ready(function () {
	moves();
});

function moves() {
	$('.ryu').mouseenter(function () {
		$('.ryu-still').hide();
		$('.ryu-ready').show();

	})
	.mouseleave(function () {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		
	})
	.mousedown(function () {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','572px');
			}
		);
	})
	.mouseup(function () {
		$('ryu-throwing').hide();
		$('.ryu-ready').show();
		$('ryu-throwing').hide();
	});
	$('body').keydown(function() {
		if (event.which===88) {
			playCool();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	});
	$('body').keyup(function() {
		if (event.which===88) {
			console.log('asdf');
			$('#cool-sound')[0].pause();
			$('#cool-sound')[0].load();
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide();
		}
	});
}

