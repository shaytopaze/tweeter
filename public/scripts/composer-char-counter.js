$(document).ready(function() {

$(".new-tweet textarea").on("keypress", function() {
  let input = $(this).val();
  let count = input.length

  let htmlCounter = $(this).parent().children(".counter").html(140 - count);

  if(count <= 140){
  htmlCounter;
} else {
  $(htmlCounter).css({'color': 'red'});
}

});


});