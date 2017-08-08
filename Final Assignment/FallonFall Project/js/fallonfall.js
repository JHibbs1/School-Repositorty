
$(document).ready(function(){
  console.log("loaded");
  $(".toggle").on("click", function(event){
    event.preventDefault();
    $(".aboutthesegentlemen").slideToggle();
    var oldText = $(this).text();
   var newText = $(this).data("toggleText");
   $(this).text(newText);
   $(this).data("toggleText",oldText);
  })

});