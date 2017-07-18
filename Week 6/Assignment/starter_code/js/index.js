//when city is picked from the drop down
//change background based on name
// variables

var backgroundImages = [];
var valueOption;
var switchCityto = ["New York","San Francisco","Los Angeles","Austin","Sydney"];
//Assigns City name to city image

$(document).ready(function(){
  for(i = 0; i < switchCityto.length; i++){
    $("#city-type").append("<option>"+switchCityto[i]+"</option>")
  }

function processInputValue(){
  valueOption = document.getElementById("city-type").selectedIndex;
     $('body').css('background-image', 'url(images/'+backgroundImages[valueOption]+')');
}
  backgroundImages.push(src = "citipix_skyline.jpg", "nyc.jpg","sf.jpg","la.jpg","austin.jpg","sydney.jpg");
  document.getElementById("city-type").onchange = processInputValue;
});
