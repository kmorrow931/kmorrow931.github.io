$(document).ready(function() {
	$("td").hover(
		function(){
			if (!$(this).hasClass("month")) {
				$(this).addClass("emphasis");
			}
		}, function() {
			$(this).removeClass("emphasis");
		});
	// $(".image-holder").hover(
	// 	function(){
	// 		if ($(this).hasClass("first-holder")) {
	// 		$(this).css(({'left': '825px'}));
	// 	}
	// 		});






});
	