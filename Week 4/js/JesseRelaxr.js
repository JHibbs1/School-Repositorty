$(document).ready(function(){
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