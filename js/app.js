$(document).ready(function(){
	$('.ryu').on('mouseenter', function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.message').show();
	});
	$('.ryu').on('mouseleave', function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
	$('.ryu').mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.message').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left': '300px'}, 500, function() {
      		$(this).hide();
      		$(this).css('left', '-212px');
    	});
	});
	$('.ryu').mouseup(function(){
		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
  		$('.message').show();
	});
	$(document).keydown(function(event) {
		if (event.which == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.message').hide();
			$('.ryu-cool').show();
		}
	});
	$(document).keyup(function(event){
		if (event.which == 88){
			if($('.ryu').mouseover = true ){
				$('.ryu-cool').hide();
				$('.ryu-still').hide();
				$('.ryu-ready').show();
			}else{
				$('.ryu-cool').hide();
				$('.ryu-ready').hide();
				$('.ryu-still').show();
			}
		}
	});

});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
  	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}