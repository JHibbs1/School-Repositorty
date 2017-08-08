
$(document).ready(function(){
	$(".aboutthesegentlemen").click(function(event){
		event.preventDefault();
		$(".aboutthesegentlemen").hide();
		$("#show-click").slideDown("slow");
		$(".aboutthesegentlemen").show();
	});
	$(".aboutthesegentlemen").click(function(event){
		event.preventDefault();
		$(".epicthanks").hide();
		$("#aboutthesegentlemen").slideDown("slow");
	});
	$(".aboutthesegentlemen").click(function(event){
		event.preventDefault();
		$("#show-click").slideUp("slow");
		$(".epicthanks").hide();
		$(".aboutthesegentlemen").show();
	});
	//if about these gentlemen is clicked
	//show paragraph
	//if epic thanks is clicked
	//hide paragraph
	