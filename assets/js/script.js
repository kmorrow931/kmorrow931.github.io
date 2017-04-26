$(document).ready(function() {
    		$(".instruction-1").fadeIn(20s)
    		$(".instruction-1").fadeOut([20s][40s]);
    		$(".instruction-2").fadeIn(30s);
    	});
    			// $(function(){
	// 	$(.typed-message).typed ({
	// 		strings:["Welcome to Miss Morrow's", "Fourth Grade Class Website!"],
	// 		typeSpeed:4s;
	// 	});
		// });
	$("td").hover(
		function(){
			if (!$(this).hasClass("month")) {
				$(this).addClass("emphasis");
			}
		}, function() {
			$(this).removeClass("emphasis");
		}	
	);


	// $(".button").click(function(){
	// 		$(".image-holder").toggle( "bounce", { times: 3 }, "slow" );
		
	// });
	// 	}
	// });

	// $()	


};	