$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();	
		// retrieves the value
		var cityValue = $("#city-type").val(); 
		// clears the input value
		$("#city-type").val("");
		// conver the stored value to lowercase
		cityValue=cityValue.toLowerCase();

		//console.log(value);

		if(cityValue==="new york"||cityValue==="new york city"||cityValue==="nyc"){
			//background Image changes to NYC
			console.log("make background new york");
		}
		else if(cityValue==="san francisco"||cityValue==="sf"||cityValue==="bay area"){
			//background Image changes to San Francisco
			console.log("make background san francisco");
		}
		else if(cityValue==="los angeles"||cityValue==="la"||cityValue==="lax"){
			//background Image changes to Los Angeles
			console.log("make background los angeles");
		}
		else if(cityValue==="austin"||cityValue==="aus"||cityValue==="atx"){
			//background Image changes to Austin
			console.log("make background austin");
		}
		else if(cityValue==="sydney"||cityValue==="syd"||cityValue==="sydney"){
			//background Image changes to Sydney
			console.log("make background sydney");
		}
});
  

// - "new york" or "new york city" or "nyc" make the background of the page nyc.jpg
// - "san francisco" or "sf" or "bay area" make the background of the page sf.jpg
// - "los angeles" or "la" or "lax" make the background of the page la.jpg
// - "austin" or "atx" make the background of the page austin.jpg
// - "sydney" or "syd" make the background of the page sydney.jpg

// when the form is submitted
// prevent the form from being submitted 
// get the value from the form	
//When San Francisco is entered in the "enter a city"field
//background Image changes to San Francisco
//When Los Angeles  is entered in the "enter a city"field
//background Image changes to Los Angeles
//When Austin is entered in the "enter a city"field
//background Image changes to Austin
//When NYC is entered in the "enter a city"field
//When Sydney is entered in the "enter a city"field
//background Image changes to Sydney


// function getValue(){
// 	var newValue = $("#newEntry").val();
// 	newValue = parseFloat(newValue);
// 	console.log(newValue);
// 	return newValue;
// }
// $(document).ready(function(){
//   $("#entry").on("update", onSubmit);
// });
// function changeCity(){
// 	$("")
// }


