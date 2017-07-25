$(document).ready(function(){
<<<<<<< HEAD
	$(".readmore").click(function(){
			event.preventDefault();
			$(".readmore").hide();
			$(".readless").show();
			$("#show-this-on-click").slideDown("slow");
	});
	$(".readless").click(function(){
			event.preventDefault();
			$("#show-this-on-click").slideUp("slow");
			$(".readless").hide();
			$(".readmore").show();
	});
	$(".learnmore").click(function(){
			event.preventDefault();
			$(".learnmore").hide();
			$("#learnmoretext").slideDown("slow");
	});
})
=======
 	$(".readmore").click(function(){
 			$(".readmore").hide();
 			$("#show-click").slideDown("slow");
 			$(".readless").show();

 	});
 	$(".learnmore").click(function(){
 			$(".learnmore").hide();
 			$("#learnmoretext").slideDown("slow");
 	$(".readless").click(function(){
 			$("#show-this-on-click").slideUp("slow");
 			$(".readless").hide();
 			$(".readmore").show();
 	
 	});
 })
>>>>>>> gh-pages
